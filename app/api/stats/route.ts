import { NextResponse } from 'next/server'
import { getStats } from '@/lib/stats'

export const dynamic = 'force-dynamic'
export const revalidate = 30 // Cache for 30 seconds

export async function GET() {
  try {
    const stats = await getStats()
    return NextResponse.json(stats)
  } catch (error) {
    console.error('Error in /api/stats:', error)
    return NextResponse.json(
      { backers: 0, pledged: 0, percent: 0, goal: 50000 },
      { status: 500 }
    )
  }
}
