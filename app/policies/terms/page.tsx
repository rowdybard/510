import React from 'react'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-sm"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
          <p>
            By accessing or using the GateFire website and purchasing our products, you agree to
            be bound by these Terms of Service and all applicable laws and regulations.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Age Restriction</h2>
          <p>
            You must be 21 years of age or older to purchase GateFire products. By placing an
            order, you confirm that you meet this age requirement and will comply with all local
            laws regarding the purchase and use of vaporizer products.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Product Use</h2>
          <p>
            GateFire 510 batteries are designed for use with legal 510-threaded cartridges only.
            Users are responsible for ensuring compliance with all local, state, and federal laws
            regarding the substances they choose to use with this device.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Pre-Orders</h2>
          <p>
            Pre-orders are subject to our{' '}
            <Link href="/policies/preorder" className="text-orange-600 hover:underline">
              Pre-Order Policy
            </Link>
            . Estimated delivery dates are not guaranteed and may change due to manufacturing or
            shipping delays.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and software, is the
            property of GateFire and protected by copyright and trademark laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
          <p>
            GateFire is not liable for any indirect, incidental, or consequential damages arising
            from the use or inability to use our products. Our maximum liability is limited to
            the purchase price of the product.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Warranty</h2>
          <p>
            Products come with a 1-year limited warranty covering manufacturing defects. This
            warranty does not cover damage from misuse, accidents, or normal wear and tear.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
          <p>
            These Terms are governed by the laws of the jurisdiction in which GateFire operates,
            without regard to conflict of law principles.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective
            immediately upon posting to this website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
          <p>
            Questions about these Terms? Contact us at{' '}
            <a
              href="mailto:hello@gatefire510.com"
              className="text-orange-600 hover:underline"
            >
              hello@gatefire510.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
