import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GateFire 510 - Pocket-Proof 510 Battery | Heat-Gated Activation',
  description: 'The first 510 battery that requires live human touch + body heat to activate. No pocket fires. No accidental burns. Pre-order now.',
  keywords: 'GateFire, 510 battery, heat-activated, pocket-proof, vape battery, pre-order',
  authors: [{ name: 'GateFire' }],
  openGraph: {
    title: 'GateFire 510 - Pocket-Proof 510 Battery',
    description: 'The first 510 battery that requires live human touch + body heat to activate. No pocket fires.',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'GateFire 510',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GateFire 510 - Pocket-Proof 510 Battery',
    description: 'The first 510 battery that requires live human touch + body heat to activate.',
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
