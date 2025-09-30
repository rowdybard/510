import React from 'react'
import Link from 'next/link'

export default function PreOrderPolicyPage() {
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

        <h1 className="text-4xl font-bold mb-8">Pre-Order Policy</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What You&rsquo;re Purchasing</h2>
          <p>
            You are purchasing a pre-order for a GateFire 510 battery that is currently in
            development. This is not an immediate purchase of a finished product. By placing a
            pre-order, you acknowledge that:
          </p>
          <ul>
            <li>The product is still in development and has not yet been manufactured</li>
            <li>Estimated delivery dates are subject to change based on production timelines</li>
            <li>
              Final product specifications may vary slightly from descriptions due to
              manufacturing optimization
            </li>
            <li>You will receive updates throughout the production process</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Payment</h2>
          <p>
            Pre-orders are charged in full at the time of purchase. Your payment secures your
            place in the production queue and tier pricing.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping Timeline</h2>
          <p>Estimated shipping schedule based on tier:</p>
          <ul>
            <li>
              <strong>Early Bird & Twin Pack:</strong> Month 4 from campaign launch
            </li>
            <li>
              <strong>Reserve & Retailer Pack:</strong> Month 5 from campaign launch
            </li>
          </ul>
          <p>
            We will email you with tracking information when your order ships. Delays may occur
            due to manufacturing, certification, or shipping logistics.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Refund Policy</h2>
          <p>
            Full refunds are available any time before your order ships. Once your order has
            shipped, our standard return policy applies (see{' '}
            <Link href="/policies/refund" className="text-orange-600 hover:underline">
              Refund Policy
            </Link>
            ).
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Communication</h2>
          <p>
            By placing a pre-order, you agree to receive email updates about your order,
            production progress, and shipping notifications. You can opt out of marketing emails
            but will still receive critical order updates.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Warranty</h2>
          <p>
            All GateFire 510 batteries include a 1-year manufacturer warranty covering defects in
            materials and workmanship. Warranty begins on the date of delivery.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Questions?</h2>
          <p>
            If you have any questions about your pre-order, please contact us at{' '}
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
