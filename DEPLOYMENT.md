# Deployment Guide - GateFire 510 (Render)

Quick reference for deploying to Render.

## Pre-Deployment Checklist

- [ ] Replace placeholder images in `/public/`
  - [ ] `device-render.svg` → Real product photo
  - [ ] `og.png` → 1200x630 social share image
  - [ ] `favicon.ico` → Your favicon
  - [ ] `apple-touch-icon.png` → 180x180 iOS icon

- [ ] Set up Stripe account
  - [ ] Create products or get price IDs
  - [ ] Get API keys (use live keys for production!)

- [ ] Optional: Set up Upstash Redis
  - [ ] Create database at https://upstash.com
  - [ ] Get REST URL and token

## Deploy to Render

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: GateFire 510 pre-order site"
git remote add origin https://github.com/yourusername/gatefire-510.git
git push -u origin main
```

### Step 2: Create Web Service on Render

1. Go to https://dashboard.render.com
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure the service:

**Settings:**
```
Name: gatefire-510-preorder
Environment: Node
Region: Choose closest to your users
Branch: main
Build Command: npm install && npm run build
Start Command: npm start
```

**Instance Type:**
- Free tier for testing
- Starter ($7/mo) or higher for production

### Step 3: Add Environment Variables

In Render Dashboard → Environment → Environment Variables, add:

**Required:**
```
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
NEXT_PUBLIC_SITE_URL=https://your-site.onrender.com
NODE_ENV=production
```

**Optional (Stripe Price IDs):**
```
STRIPE_PRICE_EARLY=price_...
STRIPE_PRICE_RESERVE=price_...
STRIPE_PRICE_TWIN=price_...
STRIPE_PRICE_RETAIL=price_...
```

**Optional (Upstash for persistent counter):**
```
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...
```

**Optional (Analytics):**
```
NEXT_PUBLIC_ANALYTICS_ENABLED=true
```

### Step 4: Deploy

1. Click **"Create Web Service"**
2. Render will automatically build and deploy
3. Your site will be live at: `https://your-service-name.onrender.com`

### Custom Domain

1. Render Dashboard → Settings → Custom Domain
2. Add your custom domain (e.g., `gatefire510.com`)
3. Update DNS records as instructed by Render:
   - **A Record**: Point to Render's IP
   - **CNAME**: Point to your Render URL
4. Update `NEXT_PUBLIC_SITE_URL` environment variable to your custom domain
5. Render automatically provisions SSL certificate (free!)

## Important Render-Specific Notes

### Free Tier Limitations
- Service spins down after 15 minutes of inactivity
- First request after sleep takes ~30 seconds
- Not recommended for production

### Recommended: Starter Plan ($7/mo)
- Always on (no spin down)
- Better performance
- Suitable for production

### Build & Deploy Settings

Render uses these commands from `package.json`:
- **Build**: `npm run build` (creates production build)
- **Start**: `npm start` (runs Next.js production server)

### Health Checks

Render automatically pings your site to keep it alive. Next.js homepage serves as health check endpoint.

## Post-Deployment

### 1. Test Everything
- [ ] Visit your live URL
- [ ] Test pre-order flow with Stripe test mode
- [ ] Verify all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Test social sharing preview
- [ ] Run Lighthouse audit

### 2. Switch to Stripe Live Mode
- [ ] Get Stripe **live** API keys from https://dashboard.stripe.com/apikeys
- [ ] Update `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` in Render
- [ ] Trigger manual deploy to apply changes

### 3. Set Up Monitoring
- **Render Dashboard**: Monitor deploys, logs, metrics
- **Stripe Dashboard**: Track payments and refunds
- **Uptime Monitoring**: Consider UptimeRobot (free) or similar

## Updating Your Site

### Automatic Deploys (Recommended)

Render automatically deploys when you push to GitHub:

```bash
# Make changes to your code
git add .
git commit -m "Update pricing tiers"
git push origin main
```

Render detects the push and auto-deploys. Watch progress in Render Dashboard.

### Manual Deploy

Render Dashboard → Manual Deploy → Deploy latest commit

### Environment Variable Changes

After updating environment variables:
1. Render Dashboard → Environment
2. Update variables
3. Render automatically redeploys

## Rollback

If something goes wrong:

1. Render Dashboard → Events
2. Find a working deployment
3. Click "Rollback" to restore

Or rollback via Git:

```bash
git revert HEAD
git push origin main
```

## View Logs

**Real-time logs:**
- Render Dashboard → Logs tab
- Shows build logs and runtime logs
- Great for debugging errors

**Common issues in logs:**
- `STRIPE_SECRET_KEY is not set` → Add environment variable
- `Module not found` → Run fresh build
- `Port already in use` → Render handles this automatically

## Performance Tips

### 1. Enable Caching
Already configured! Stats API caches for 30 seconds.

### 2. Use Redis for Inventory
Set up Upstash Redis (free tier available) for persistent Early Bird counter.

### 3. Optimize Images
- Replace SVG placeholders with optimized PNGs
- Use WebP format for smaller file sizes
- Next.js Image component auto-optimizes

### 4. Monitor Performance
- Render Dashboard → Metrics
- Track response times and memory usage
- Upgrade plan if needed

## Troubleshooting

### Build Fails
**Error**: `npm ERR! missing script: build`
**Fix**: Check `package.json` has `"build": "next build"`

**Error**: TypeScript errors during build
**Fix**: Run `npm run build` locally first to catch errors

### Site Won't Load
**Check**: Environment variables are set correctly
**Check**: `NEXT_PUBLIC_SITE_URL` matches your actual URL
**Check**: Logs for runtime errors

### Stripe Checkout Not Working
**Check**: Using correct Stripe keys (live vs test)
**Check**: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set
**Check**: Success/cancel URLs match your domain

### Early Bird Counter Resets
**Expected**: Without Redis, counter resets on each deploy
**Fix**: Set up Upstash Redis (see environment variables above)

## Security Checklist

- [ ] Use Stripe **live** keys (not test) for production
- [ ] Never commit `.env.local` to Git (already in `.gitignore`)
- [ ] Enable HTTPS (automatic on Render)
- [ ] Review Render security settings
- [ ] Set up notification emails for failed builds

## Cost Estimation

**Minimum (Testing):**
- Render Free Tier: $0/mo
- Total: **$0/mo**

**Recommended (Production):**
- Render Starter: $7/mo
- Upstash Redis: $0/mo (free tier)
- Custom Domain: ~$12/year
- Total: **~$8/mo**

**With Traffic:**
- Render may require higher tier for high traffic
- Monitor usage in dashboard

## Alternative: Vercel Deployment

If you want to use Vercel instead:

1. Remove `render.yaml` (if present)
2. Go to https://vercel.com/new
3. Import GitHub repository
4. Add same environment variables
5. Deploy

Vercel has better Next.js optimization and free SSL/CDN, but Render offers more control and transparent pricing.

## Support Resources

- **Render Docs**: https://render.com/docs
- **Render Community**: https://community.render.com
- **Next.js Docs**: https://nextjs.org/docs
- **Stripe Docs**: https://stripe.com/docs
- **Project Email**: hello@gatefire510.com

## Quick Reference

| Action | Command |
|--------|---------|
| Deploy | `git push origin main` |
| View Logs | Render Dashboard → Logs |
| Rollback | Render Dashboard → Events |
| Update Env | Render Dashboard → Environment |
| Custom Domain | Render Dashboard → Settings |

---

**You're ready to go live on Render! 🚀**