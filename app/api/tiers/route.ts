import { NextResponse } from 'next/server'
import { TIERS } from '@/lib/stripe'
import { getEarlyBirdAvailable } from '@/lib/inventory'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const earlyBirdAvailable = await getEarlyBirdAvailable()

    const tiersWithAvailability = TIERS.map((tier) => {
      if (tier.id === 'early') {
        return {
          ...tier,
          available: earlyBirdAvailable,
        }
      }
      return tier
    })

    return NextResponse.json(tiersWithAvailability)
  } catch (error) {
    console.error('Error in /api/tiers:', error)
    return NextResponse.json({ error: 'Failed to fetch tiers' }, { status: 500 })
  }
}
