'use client'

import React, { useEffect, useState } from 'react'

interface Stats {
  backers: number
  pledged: number
  percent: number
  goal: number
}

export default function StatsCounter() {
  const [stats, setStats] = useState<Stats>({
    backers: 0,
    pledged: 0,
    percent: 0,
    goal: 50000,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats')
        const data = await response.json()
        setStats(data)
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
    // Refresh every 30 seconds
    const interval = setInterval(fetchStats, 30000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl p-8">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-white/20 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-lime-500 to-primary-600 text-white rounded-2xl p-8 shadow-2xl shadow-lime-500/20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold mb-2">
            {stats.backers.toLocaleString()}
          </div>
          <div className="text-sm uppercase tracking-wider opacity-90">Backers</div>
        </div>

        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold mb-2">
            ${stats.pledged.toLocaleString()}
          </div>
          <div className="text-sm uppercase tracking-wider opacity-90">Pledged</div>
        </div>

        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold mb-2">{stats.percent}%</div>
          <div className="text-sm uppercase tracking-wider opacity-90">Funded</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative">
        <div className="h-3 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-500"
            style={{ width: `${Math.min(100, stats.percent)}%` }}
          ></div>
        </div>
        <div className="mt-2 text-right text-sm opacity-90">
          Goal: ${stats.goal.toLocaleString()}
        </div>
      </div>
    </div>
  )
}
