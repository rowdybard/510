'use client'

import React from 'react'
import Image from 'next/image'
import Badge from './Badge'

export default function Hero() {
  const scrollToTiers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const tiersSection = document.getElementById('tiers')
    if (tiersSection) {
      tiersSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const howItWorksSection = document.getElementById('how-it-works')
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Pocket-Proof 510.{' '}
              <span className="text-orange-600">Fires only with your touch.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Meet GateFire 510 — the first 510 battery that requires live human touch + body heat to activate. 
              No pocket presses. No accidental cooking your oil. No biometrics, no app, no cloud.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <a
                href="#tiers"
                onClick={scrollToTiers}
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-lg font-semibold transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Reserve for $49
                <span className="ml-2 text-sm font-normal opacity-90">(Save $20 today)</span>
              </a>
              
              <a
                href="#how-it-works"
                onClick={scrollToHowItWorks}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 hover:border-orange-600 dark:hover:border-orange-600 rounded-lg text-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Learn how it works
              </a>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Badge variant="info">Local-only</Badge>
              <Badge variant="info">No biometrics</Badge>
              <Badge variant="success">USB-C</Badge>
              <Badge variant="warning">Short-circuit + thermal protection</Badge>
            </div>
          </div>

          {/* Right: Product Image */}
          <div className="relative">
            <div className="relative max-w-lg mx-auto">
              {/* Ink-stain gradient background effect */}
              <div className="absolute inset-0 scale-110">
                <div className="absolute inset-0 bg-gradient-radial from-black via-gray-900/80 via-40% to-transparent opacity-60 blur-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent"></div>
              </div>
              
              {/* Product image with blend mode */}
              <div className="relative z-10">
                <Image
                  src="/device-render.png"
                  alt="GateFire 510 battery with heat-gated activation technology showing the signature heat-sensing ring"
                  width={800}
                  height={1000}
                  priority
                  className="w-full h-auto mix-blend-normal relative"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)',
                  }}
                />
              </div>
              
              {/* Subtle glow effect for the ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
