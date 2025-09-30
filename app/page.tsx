import React from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import FeatureList from '@/components/FeatureList'
import TierCard from '@/components/TierCard'
import FAQ from '@/components/FAQ'
import StatsCounter from '@/components/StatsCounter'
import Footer from '@/components/Footer'
import { TIERS } from '@/lib/stripe'
import { getEarlyBirdAvailable } from '@/lib/inventory'

export default async function HomePage() {
  const earlyBirdAvailable = await getEarlyBirdAvailable()

  const problemSolutionFeatures = [
    {
      title: 'The problem',
      description:
        '5-click locks fail in pockets. Auto-draw gets tricked by airflow. Result: mystery drain, burnt terps, dead cart.',
      icon: '⚠️',
    },
    {
      title: 'Our solution',
      description:
        'Heat-gated activation. The device only enables power when it detects both finger contact and a skin-temperature rise above ambient. Anything else (keys, fabric, hot car) = no fire.',
      icon: '✅',
    },
  ]

  const howItWorksSteps = [
    {
      title: 'Capacitive touch ring',
      description: 'Senses a real finger.',
      icon: '👆',
    },
    {
      title: 'Thermal sensor',
      description: 'Checks for human-like warmth vs ambient.',
      icon: '🌡️',
    },
    {
      title: 'Gate logic',
      description: 'Only enables the coil when both signals pass.',
      icon: '🔐',
    },
    {
      title: 'Hard limits',
      description: 'Stops if device or environment is too hot.',
      icon: '🛡️',
    },
  ]

  const benefits = [
    {
      title: 'Zero pocket fires',
      description:
        'Never worry about accidental activation in your pocket, bag, or car.',
      icon: '🔥',
    },
    {
      title: 'Save oil',
      description: 'No more mystery drain or burnt carts from accidental firing.',
      icon: '💧',
    },
    {
      title: 'Private by design',
      description:
        'No biometrics, no app, no cloud. Your usage data stays with you.',
      icon: '🔒',
    },
    {
      title: 'Safer',
      description:
        'Multiple protection circuits prevent over-current, short circuit, and thermal runaway.',
      icon: '⚡',
    },
    {
      title: 'Universal 510',
      description: 'Works with any standard 510 cartridge. No proprietary pods.',
      icon: '🔌',
    },
  ]

  const specs = [
    {
      title: '900–1200 mAh',
      description: 'Long-lasting battery with USB-C fast charging.',
      icon: '🔋',
    },
    {
      title: 'Dual sensors',
      description: 'Capacitive + NTC thermal sensors for heat-gating.',
      icon: '🎯',
    },
    {
      title: 'Full protection',
      description: 'Short, over-current, low-voltage, over-temp protections.',
      icon: '🛡️',
    },
    {
      title: '8-sec auto cutoff',
      description: 'Prevents overheating and conserves battery life.',
      icon: '⏱️',
    },
    {
      title: 'Durable build',
      description: 'Anodized aluminum shell, IP54 dust/water resistance.',
      icon: '💪',
    },
    {
      title: 'LED indicators',
      description: 'Ring indicators for battery level and status.',
      icon: '💡',
    },
  ]

  const roadmap = [
    {
      title: 'Month 1',
      description: 'EVT prototype',
      icon: '🔬',
    },
    {
      title: 'Month 2–3',
      description: 'Pilot run + certs',
      icon: '✅',
    },
    {
      title: 'Month 4',
      description: 'Ship Early Bird + Twin Pack',
      icon: '📦',
    },
    {
      title: 'Month 5',
      description: 'Ship Reserve + Retailer Pack',
      icon: '🚚',
    },
  ]

  const faqItems = [
    {
      question: 'Does it use fingerprints?',
      answer:
        'No. GateFire uses capacitive touch and temperature sensing only. No biometric data is collected or stored.',
    },
    {
      question: 'Will it work with gloves?',
      answer:
        'Thin gloves work in most cases. We\'re planning a "glove mode" feature for v2 firmware updates.',
    },
    {
      question: 'What about in a hot car?',
      answer:
        'It won\'t fire. The device requires both touch contact AND a specific heat profile that matches human skin warming. A uniformly hot environment won\'t trigger it.',
    },
    {
      question: 'Can I get a refund?',
      answer:
        'Yes. Full refund any time before shipment. See our refund policy for details.',
    },
    {
      question: 'What\'s the warranty?',
      answer:
        '1 year manufacturer warranty covering defects in materials and workmanship.',
    },
    {
      question: 'Is this compatible with my cartridge?',
      answer:
        'Yes! GateFire 510 works with any standard 510 threaded cartridge. No proprietary pods required.',
    },
  ]

  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* Problem → Solution */}
        <Section
          id="problem-solution"
          background="gray"
        >
          <FeatureList features={problemSolutionFeatures} columns={2} />
        </Section>

        {/* How it Works */}
        <Section
          id="how-it-works"
          title="How it Works"
          subtitle="Four-layer safety system ensures only intentional activation"
          background="white"
        >
          <FeatureList features={howItWorksSteps} columns={4} />
        </Section>

        {/* Benefits */}
        <Section
          id="benefits"
          title="Benefits"
          subtitle="Designed for safety, privacy, and peace of mind"
          background="gray"
        >
          <FeatureList features={benefits} columns={3} />
        </Section>

        {/* Specs */}
        <Section
          id="specs"
          title="Technical Specifications"
          subtitle="Enterprise-grade components in a pocket-friendly design"
          background="white"
        >
          <FeatureList features={specs} columns={3} />
        </Section>

        {/* Live Stats */}
        <Section background="gray">
          <StatsCounter />
        </Section>

        {/* Tiers */}
        <Section
          id="tiers"
          title="Pre-Order Tiers"
          subtitle="Reserve your GateFire 510 at exclusive pre-order pricing"
          background="white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIERS.map((tier) => {
              const isEarlyBird = tier.id === 'early'
              const shouldHide = isEarlyBird && earlyBirdAvailable <= 0
              
              if (shouldHide) return null

              return (
                <TierCard
                  key={tier.id}
                  tier={tier}
                  isPopular={tier.id === 'reserve'}
                  available={isEarlyBird ? earlyBirdAvailable : undefined}
                />
              )
            })}
          </div>
        </Section>

        {/* Roadmap */}
        <Section
          id="roadmap"
          title="Roadmap & Shipping"
          subtitle="Transparent timeline from prototype to your doorstep"
          background="gradient"
        >
          <FeatureList features={roadmap} columns={4} />
        </Section>

        {/* Social Proof */}
        <Section id="testimonials" background="white">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium italic text-gray-900 dark:text-gray-100">
              &ldquo;I ruined two carts not knowing my pocket fired the battery.
              GateFire fixes it.&rdquo;
            </blockquote>
            <p className="mt-4 text-gray-600 dark:text-gray-400">— Early Tester</p>
          </div>
        </Section>

        {/* FAQ */}
        <Section
          id="faq"
          title="Frequently Asked Questions"
          background="gray"
        >
          <FAQ items={faqItems} />
        </Section>
      </main>

      <Footer />
    </>
  )
}
