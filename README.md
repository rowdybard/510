# GateFire 510 Pre-Order Website

A production-ready, single-page pre-order website for GateFire 510, a revolutionary heat-gated 510 battery. Built with Next.js 14, TypeScript, Tailwind CSS, and Stripe integration.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **Stripe Integration**: Secure pre-order checkout with multiple tiers
- **Inventory Management**: Early Bird tier with configurable limits (250 units)
- **Live Stats**: Real-time backer count, pledged amount, and funding percentage
- **Responsive Design**: Mobile-first, accessible, and optimized for performance
- **SEO Optimized**: OpenGraph tags, meta descriptions, semantic HTML
- **Policy Pages**: Complete legal coverage (Terms, Privacy, Refund, Pre-Order)
- **Analytics Ready**: Pluggable Vercel Analytics support

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Stripe account (test mode is fine for development)

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your values:

```env
# Required: Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key

# Optional: Stripe Price IDs (if not set, app will create products/prices automatically)
STRIPE_PRICE_EARLY=price_1xxxxxxxxxxxxx
STRIPE_PRICE_RESERVE=price_1xxxxxxxxxxxxx
STRIPE_PRICE_TWIN=price_1xxxxxxxxxxxxx
STRIPE_PRICE_RETAIL=price_1xxxxxxxxxxxxx

# Required: Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: Upstash Redis (for persistent inventory counter)
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# Optional: Enable Analytics
NEXT_PUBLIC_ANALYTICS_ENABLED=false
```

### 3. Set Up Stripe

#### Option A: Let the App Create Products (Recommended for Testing)

1. Get your Stripe test keys from https://dashboard.stripe.com/test/apikeys
2. Add them to `.env.local`
3. Run the app - products will be created automatically on first checkout

#### Option B: Create Products Manually

1. Go to https://dashboard.stripe.com/test/products
2. Create 4 products with the following prices:
   - Early Bird: $39
   - Reserve: $49
   - Twin Pack: $89
   - Retailer Pack: $399
3. Copy each Price ID and add to `.env.local`

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🧪 Testing Stripe Checkout

Use Stripe's test card numbers:

| Scenario | Card Number | CVC | Date |
|----------|-------------|-----|------|
| Success | 4242 4242 4242 4242 | Any 3 digits | Any future date |
| Decline | 4000 0000 0000 0002 | Any 3 digits | Any future date |
| Requires Auth | 4000 0025 0000 3155 | Any 3 digits | Any future date |

More test cards: https://stripe.com/docs/testing

## 📊 Simulating Sales Locally

To test the live stats counter with sample data:

1. Complete test checkouts using Stripe test cards
2. Successful payments will appear in your Stripe Dashboard
3. The `/api/stats` endpoint fetches succeeded payment intents
4. Stats refresh every 30 seconds on the homepage

**Note**: In development, stats may show 0 if you haven't completed any test checkouts.

## 🎨 Customization

### Replace Placeholder Images

Replace these placeholder files in `/public/`:

1. **device-render.png** (600x600px+) - Main product image
2. **og.png** (1200x630px) - Social sharing preview image
3. **favicon.ico** - Browser favicon
4. **apple-touch-icon.png** (180x180px) - iOS home screen icon

### Update Copy

All copy is in `/app/page.tsx`. Key sections:

- Hero headline & subheadline
- Features, benefits, specs
- FAQ questions & answers
- Tier descriptions

### Adjust Styling

- Colors: Edit `/tailwind.config.ts`
- Global styles: Edit `/app/globals.css`
- Component styles: Tailwind classes in component files

### Configure Inventory Limits

Edit `/lib/stripe.ts` - change `TIERS` array:

```typescript
{
  id: 'early',
  name: 'Early Bird',
  limit: 250, // <- Change this number
  // ...
}
```

## 🚀 Deployment (Render)

### Quick Deploy

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click **"New +"** → **"Web Service"**
4. Connect your GitHub repository
5. Configure:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Instance Type**: Starter ($7/mo recommended for production)
6. Add environment variables (see below)
7. Click **"Create Web Service"**

### Environment Variables for Render

Add these in Render Dashboard → Environment:

**Required:**
```
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
NEXT_PUBLIC_SITE_URL=https://your-site.onrender.com
NODE_ENV=production
```

See `DEPLOYMENT.md` for complete deployment guide.

**Important**: Update `NEXT_PUBLIC_SITE_URL` to your production domain in Render environment variables.

### Upstash Redis (Optional - for Persistent Inventory)

Without Upstash, the Early Bird counter resets when the server restarts. For production:

1. Create free account at [Upstash](https://upstash.com/)
2. Create a Redis database
3. Copy `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`
4. Add to Render environment variables

## 📁 Project Structure

```
gatefire-510-preorder/
├── app/
│   ├── api/
│   │   ├── checkout/route.ts    # Stripe checkout session creation
│   │   ├── stats/route.ts       # Live stats endpoint
│   │   └── tiers/route.ts       # Tier availability
│   ├── policies/
│   │   ├── preorder/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── refund/page.tsx
│   │   └── terms/page.tsx
│   ├── thank-you/page.tsx       # Post-checkout success page
│   ├── layout.tsx               # Root layout with SEO meta
│   ├── page.tsx                 # Main landing page
│   └── globals.css              # Global styles
├── components/
│   ├── Badge.tsx
│   ├── FAQ.tsx
│   ├── FeatureList.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Nav.tsx
│   ├── Section.tsx
│   ├── StatsCounter.tsx
│   └── TierCard.tsx
├── lib/
│   ├── inventory.ts             # Early Bird counter (KV or in-memory)
│   ├── stats.ts                 # Stripe stats aggregation
│   └── stripe.ts                # Stripe client & tier config
├── public/
│   ├── logo.svg
│   ├── device-render.png        # (placeholder - replace)
│   ├── og.png                   # (placeholder - replace)
│   └── favicon.ico              # (placeholder - replace)
└── README.md
```

## ⚡ Performance

Optimizations included:

- Server components for fast initial load
- Image optimization with Next.js Image
- Tailwind CSS for minimal CSS bundle
- 30-second cache on stats API
- Reduced motion support for accessibility

**Target**: Lighthouse 90+ on mobile ✅

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels where needed
- Keyboard navigation support
- Focus states on all interactive elements
- Color contrast AA compliance
- Prefers-reduced-motion support

## 🔒 Security

- Stripe handles all payment data (PCI compliant)
- No biometric data collected
- No user tracking (privacy-first)
- Environment variables for secrets
- HTTPS enforced on production (Vercel default)

## 📧 Support

For questions or issues:

- **Email**: hello@gatefire510.com
- **Docs**: See inline code comments
- **Stripe Docs**: https://stripe.com/docs

## 📄 License

Proprietary - GateFire © 2025

---

Built with ❤️ for the GateFire community
