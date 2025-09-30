import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
  typescript: true,
})

export interface TierInfo {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  stripePriceId?: string
  limit?: number
  available?: number
  features: string[]
}

export const TIERS: TierInfo[] = [
  {
    id: 'early',
    name: 'Early Bird',
    price: 39,
    originalPrice: 59,
    description: 'First 250 backers only',
    stripePriceId: process.env.STRIPE_PRICE_EARLY,
    limit: 250,
    features: [
      '1x GateFire 510 battery',
      'USB-C charging cable',
      'Premium packaging',
      'Priority shipping (Month 4)',
      'Limited edition serial number',
    ],
  },
  {
    id: 'reserve',
    name: 'Reserve',
    price: 49,
    originalPrice: 69,
    description: 'Standard pre-order',
    stripePriceId: process.env.STRIPE_PRICE_RESERVE,
    features: [
      '1x GateFire 510 battery',
      'USB-C charging cable',
      'Standard packaging',
      'Ships Month 5',
    ],
  },
  {
    id: 'twin',
    name: 'Twin Pack',
    price: 89,
    originalPrice: 138,
    description: 'Best value for personal use',
    stripePriceId: process.env.STRIPE_PRICE_TWIN,
    features: [
      '2x GateFire 510 batteries',
      '2x USB-C charging cables',
      'Premium packaging',
      'Ships Month 4',
      'Save $49',
    ],
  },
  {
    id: 'retailer',
    name: 'Retailer Pack',
    price: 399,
    description: 'For shops & distributors',
    stripePriceId: process.env.STRIPE_PRICE_RETAIL,
    features: [
      '10x GateFire 510 batteries',
      'Bulk packaging',
      'Dealer support',
      'Ships Month 5',
      'Reseller pricing',
    ],
  },
]

// Helper to get or create Stripe prices
export async function getOrCreatePrice(tier: TierInfo): Promise<string> {
  if (tier.stripePriceId) {
    return tier.stripePriceId
  }

  // Create product
  const product = await stripe.products.create({
    name: `GateFire 510 - ${tier.name}`,
    description: tier.description,
    metadata: {
      tier: tier.id,
    },
  })

  // Create price
  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: tier.price * 100, // Convert to cents
    currency: 'usd',
    metadata: {
      tier: tier.id,
    },
  })

  return price.id
}
