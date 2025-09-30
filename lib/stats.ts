import { stripe } from './stripe'

export interface SiteStats {
  backers: number
  pledged: number
  percent: number
  goal: number
}

const FUNDING_GOAL = 50000 // $50,000 default goal

let statsCache: { data: SiteStats; timestamp: number } | null = null
const CACHE_DURATION = 30000 // 30 seconds

export async function getStats(forceRefresh = false): Promise<SiteStats> {
  const now = Date.now()

  // Return cached data if still valid
  if (!forceRefresh && statsCache && now - statsCache.timestamp < CACHE_DURATION) {
    return statsCache.data
  }

  try {
    // Fetch all successful payment intents
    const paymentIntents = await stripe.paymentIntents.list({
      limit: 100,
      // Only include succeeded payments
    })

    let backers = 0
    let pledged = 0

    for (const intent of paymentIntents.data) {
      if (intent.status === 'succeeded') {
        backers++
        pledged += intent.amount / 100 // Convert cents to dollars
      }
    }

    const percent = Math.min(100, Math.round((pledged / FUNDING_GOAL) * 100))

    const stats: SiteStats = {
      backers,
      pledged,
      percent,
      goal: FUNDING_GOAL,
    }

    // Update cache
    statsCache = {
      data: stats,
      timestamp: now,
    }

    return stats
  } catch (error) {
    console.error('Error fetching stats:', error)
    
    // Return cached data if available, otherwise return zeros
    if (statsCache) {
      return statsCache.data
    }

    return {
      backers: 0,
      pledged: 0,
      percent: 0,
      goal: FUNDING_GOAL,
    }
  }
}
