'use client'

import React from 'react'
import type { TierInfo } from '@/lib/stripe'

interface TierCardProps {
  tier: TierInfo
  isPopular?: boolean
  available?: number
}

export default function TierCard({ tier, isPopular = false, available }: TierCardProps) {
  const isEarlyBird = tier.id === 'early'
  const isSoldOut = isEarlyBird && available !== undefined && available <= 0

  const handleCheckout = async () => {
    if (isSoldOut) return

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tierId: tier.id,
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Error creating checkout session. Please try again.')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Error creating checkout session. Please try again.')
    }
  }

  return (
    <div
      className={`relative rounded-2xl border-2 p-8 transition-all hover:scale-105 ${
        isPopular
          ? 'border-orange-500 shadow-2xl shadow-orange-500/20'
          : 'border-gray-200 dark:border-gray-700 hover:border-orange-500'
      } ${isSoldOut ? 'opacity-60' : ''} bg-white dark:bg-gray-800`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-orange-600 text-white">
            Most Popular
          </span>
        </div>
      )}

      {isSoldOut && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-red-600 text-white">
            Sold Out
          </span>
        </div>
      )}

      {isEarlyBird && !isSoldOut && available !== undefined && (
        <div className="absolute -top-4 right-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-600 text-white">
            {available} left
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{tier.description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold">${tier.price}</span>
          {tier.originalPrice && (
            <span className="text-xl text-gray-400 line-through">
              ${tier.originalPrice}
            </span>
          )}
        </div>
        {tier.originalPrice && (
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">
            Save ${tier.originalPrice - tier.price}
          </p>
        )}
      </div>

      <ul className="mb-8 space-y-3">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg
              className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleCheckout}
        disabled={isSoldOut}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
          isSoldOut
            ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
            : isPopular
            ? 'bg-orange-600 hover:bg-orange-700 text-white'
            : 'bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900'
        }`}
      >
        {isSoldOut ? 'Sold Out' : 'Pre-Order Now'}
      </button>
    </div>
  )
}
