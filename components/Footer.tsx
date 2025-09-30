import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-lime-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">GF</span>
              </div>
              <span className="font-semibold text-lg text-white tracking-tight">GateFire 510</span>
            </div>
            <p className="text-sm">
              The first pocket-proof 510 battery with heat-gated activation technology.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/policies/terms"
                  className="hover:text-lime-400 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/privacy"
                  className="hover:text-lime-400 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/preorder"
                  className="hover:text-lime-400 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-sm"
                >
                  Pre-Order Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/refund"
                  className="hover:text-lime-400 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-sm"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <p className="text-sm mb-2">Questions about your pre-order?</p>
            <a
              href="mailto:hello@gatefire510.com"
              className="text-lime-400 hover:text-lime-300 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-sm"
            >
              hello@gatefire510.com
            </a>
            <p className="text-sm mt-4">1 year warranty included</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© {currentYear} GateFire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
