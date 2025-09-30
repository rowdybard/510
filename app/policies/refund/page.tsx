import React from 'react'
import Link from 'next/link'

export default function RefundPolicyPage() {
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

        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Pre-Shipment Refunds</h2>
          <p>
            <strong>Full refund available any time before shipment.</strong> If you change your
            mind about your pre-order before we ship your device, we&rsquo;ll provide a complete
            refund with no questions asked.
          </p>
          <p>
            To request a pre-shipment refund, email{' '}
            <a
              href="mailto:hello@gatefire510.com"
              className="text-orange-600 hover:underline"
            >
              hello@gatefire510.com
            </a>{' '}
            with your order number. Refunds are typically processed within 5-7 business days.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Post-Shipment Returns</h2>
          <p>Once your order has shipped, the following return policy applies:</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">30-Day Return Window</h3>
          <p>
            You may return your GateFire 510 within 30 days of delivery for a full refund if:
          </p>
          <ul>
            <li>The device is in new, unused condition</li>
            <li>All original packaging and accessories are included</li>
            <li>The device has not been damaged or modified</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Defective Products</h3>
          <p>
            If your GateFire 510 arrives defective or becomes defective within the 1-year
            warranty period:
          </p>
          <ul>
            <li>Contact us immediately at hello@gatefire510.com</li>
            <li>We&rsquo;ll provide a prepaid return label</li>
            <li>Choose between a replacement or full refund</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Return Process</h2>
          <ol>
            <li>Email hello@gatefire510.com with your order number and reason for return</li>
            <li>We&rsquo;ll send you return instructions and a return authorization</li>
            <li>Ship the product back in its original packaging</li>
            <li>Once received and inspected, we&rsquo;ll process your refund within 5-7 business days</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Non-Returnable Items</h2>
          <p>For health and safety reasons, we cannot accept returns of:</p>
          <ul>
            <li>Used devices that have been in contact with cartridges or oils</li>
            <li>Devices with physical damage not covered by warranty</li>
            <li>
              Devices modified, repaired, or tampered with by anyone other than GateFire
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Refund Method</h2>
          <p>
            Refunds will be issued to the original payment method used during purchase. Please
            allow 5-10 business days for the refund to appear in your account after processing.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">International Returns</h2>
          <p>
            International customers are responsible for return shipping costs unless the product
            is defective. Customs duties and taxes are non-refundable.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Questions?</h2>
          <p>
            Contact us at{' '}
            <a
              href="mailto:hello@gatefire510.com"
              className="text-orange-600 hover:underline"
            >
              hello@gatefire510.com
            </a>{' '}
            for any questions about returns or refunds.
          </p>
        </div>
      </div>
    </div>
  )
}
