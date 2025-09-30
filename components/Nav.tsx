'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-lime-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold text-sm">GF</span>
            </div>
            <span className="font-semibold text-lg tracking-tight">GateFire 510</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className="text-sm font-medium hover:text-lime-600 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 rounded-sm"
            >
              How it Works
            </a>
            <a
              href="#specs"
              className="text-sm font-medium hover:text-lime-600 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 rounded-sm"
            >
              Specs
            </a>
            <a
              href="#faq"
              className="text-sm font-medium hover:text-lime-600 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 rounded-sm"
            >
              FAQ
            </a>
            <a
              href="#tiers"
              className="px-4 py-2 bg-gradient-to-r from-lime-500 to-primary-600 hover:from-lime-600 hover:to-primary-700 text-white rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
            >
              Pre-Order
            </a>
          </div>

          <a
            href="#tiers"
            className="md:hidden px-4 py-2 bg-gradient-to-r from-lime-500 to-primary-600 hover:from-lime-600 hover:to-primary-700 text-white rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
          >
            Pre-Order
          </a>
        </div>
      </div>
    </nav>
  )
}
