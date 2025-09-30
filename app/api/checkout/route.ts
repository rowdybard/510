import { NextRequest, NextResponse } from 'next/server'
import { stripe, TIERS, getOrCreatePrice } from '@/lib/stripe'
import { getEarlyBirdAvailable, incrementEarlyBirdCount } from '@/lib/inventory'

export async function POST(request: NextRequest) {
  try {
    const { tierId } = await request.json()

    const tier = TIERS.find((t) => t.id === tierId)

    if (!tier) {
      return NextResponse.json({ error: 'Invalid tier' }, { status: 400 })
    }

    // Check Early Bird availability
    if (tier.id === 'early') {
      const available = await getEarlyBirdAvailable()
      if (available <= 0) {
        return NextResponse.json(
          { error: 'Early Bird tier is sold out' },
          { status: 400 }
        )
      }
    }

    // Get or create price
    const priceId = await getOrCreatePrice(tier)

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/#tiers`,
      metadata: {
        tier: tier.id,
        tierName: tier.name,
      },
    })

    // Increment Early Bird counter if applicable
    // Note: This has a race condition in production. For true inventory management,
    // use Stripe's inventory features or webhook-based confirmation.
    if (tier.id === 'early') {
      await incrementEarlyBirdCount()
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
