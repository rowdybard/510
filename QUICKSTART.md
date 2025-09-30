# Quick Start Guide

Get GateFire 510 pre-order site running in 5 minutes.

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Create Environment File

```bash
# Create .env.local from example
cp .env.local.example .env.local
```

## Step 3: Get Stripe Test Keys

1. Sign up at https://stripe.com (free)
2. Go to https://dashboard.stripe.com/test/apikeys
3. Copy your **Publishable key** and **Secret key**
4. Add to `.env.local`:

```env
STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## Step 5: Test Checkout

1. Click any "Pre-Order Now" button
2. Use Stripe test card: `4242 4242 4242 4242`
3. Any future expiry date, any CVC
4. Complete checkout
5. See thank-you page!

## What's Next?

- **Replace Images**: Add real product photos in `/public/`
- **Test Stats**: Complete a few test checkouts to see live stats
- **Customize Copy**: Edit content in `/app/page.tsx`
- **Deploy**: See [DEPLOYMENT.md](DEPLOYMENT.md) for Render deployment

## Common Issues

**"STRIPE_SECRET_KEY is not set"**
- Make sure `.env.local` exists and has your Stripe keys

**Images not loading**
- Replace `.svg` placeholders with real `.png` images
- Or keep the SVG placeholders for testing

**Stats showing 0**
- Complete a test checkout first
- Stats only show succeeded payments

**Need Help?**
- See [README.md](README.md) for full documentation
- Email: hello@gatefire510.com
