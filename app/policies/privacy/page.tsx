import React from 'react'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
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

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment to Privacy</h2>
          <p>
            GateFire is built on the principle of privacy by design. We don&rsquo;t collect
            biometric data, we don&rsquo;t require an app, and we don&rsquo;t connect to the
            cloud.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">From the Device</h3>
          <p>
            <strong>None.</strong> The GateFire 510 battery operates entirely locally. It does
            not collect, store, or transmit any usage data, biometric data, or personal
            information.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">From This Website</h3>
          <p>When you visit our website or place a pre-order, we collect:</p>
          <ul>
            <li>
              <strong>Order Information:</strong> Name, email address, shipping address, and
              payment information (processed securely through Stripe)
            </li>
            <li>
              <strong>Analytics:</strong> Basic website usage data (page views, device type,
              referring site) via privacy-focused analytics
            </li>
            <li>
              <strong>Cookies:</strong> Essential cookies for checkout functionality; no
              tracking cookies
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and fulfill your pre-order</li>
            <li>Send you order updates and shipping notifications</li>
            <li>Respond to your customer service requests</li>
            <li>Improve our website and product</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing</h2>
          <p>We share your information only with:</p>
          <ul>
            <li>
              <strong>Stripe:</strong> For payment processing (see{' '}
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Stripe Privacy Policy
              </a>
              )
            </li>
            <li>
              <strong>Shipping Carriers:</strong> To deliver your order
            </li>
            <li>
              <strong>Law Enforcement:</strong> Only when required by law
            </li>
          </ul>
          <p>We never sell your personal information to third parties.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we have about you</li>
            <li>Request correction or deletion of your information</li>
            <li>Opt out of marketing emails (order updates will still be sent)</li>
            <li>Request a copy of your data</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p>
            We use industry-standard encryption and security measures to protect your
            information. Payment data is processed through Stripe and never stored on our
            servers.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            For privacy-related questions or to exercise your rights, contact us at{' '}
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
