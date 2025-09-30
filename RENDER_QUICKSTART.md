# Render Quick Deploy Guide

Ultra-fast deployment guide for Render.

## Prerequisites
- GitHub account
- Render account (free at https://render.com)
- Stripe account with API keys

## 5-Minute Deploy

### 1. Push to GitHub (if not done yet)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gatefire-510.git
git push -u origin main
```

### 2. Create Web Service on Render

1. Go to https://dashboard.render.com
2. Click **"New +"** → **"Web Service"**
3. Click **"Connect GitHub"** and authorize Render
4. Select your `gatefire-510` repository

### 3. Configure Service

**Name**: `gatefire-510-preorder`  
**Environment**: `Node`  
**Region**: Choose closest to your users  
**Branch**: `main`  

**Build Command**:
```
npm install && npm run build
```

**Start Command**:
```
npm start
```

**Instance Type**:
- **Free** - For testing (spins down after inactivity)
- **Starter ($7/mo)** - For production (always on) ⭐ Recommended

### 4. Add Environment Variables

Click **"Advanced"** → **"Add Environment Variable"**

Add these **one by one**:

```
STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
NEXT_PUBLIC_SITE_URL=https://gatefire-510-preorder.onrender.com
NODE_ENV=production
```

**Note**: Use `sk_test_` and `pk_test_` for testing. Switch to `sk_live_` and `pk_live_` when going live!

### 5. Deploy!

1. Click **"Create Web Service"**
2. Render will build and deploy (takes 2-3 minutes)
3. Your site goes live at: `https://gatefire-510-preorder.onrender.com`

## Post-Deploy Checklist

### ✅ Test Your Site

- [ ] Visit your Render URL
- [ ] Click a pre-order tier button
- [ ] Test with Stripe test card: `4242 4242 4242 4242`
- [ ] Complete checkout
- [ ] Verify thank-you page appears

### ✅ Add Custom Domain (Optional)

1. Render Dashboard → **Settings** → **Custom Domain**
2. Add your domain (e.g., `gatefire510.com`)
3. Update DNS records at your domain registrar:
   ```
   Type: CNAME
   Name: www (or @)
   Value: gatefire-510-preorder.onrender.com
   ```
4. Update environment variable:
   ```
   NEXT_PUBLIC_SITE_URL=https://gatefire510.com
   ```
5. Save → Render auto-redeploys with new URL

### ✅ Switch to Stripe Live Mode

When ready to accept real payments:

1. Get Stripe **live** keys: https://dashboard.stripe.com/apikeys
2. Render Dashboard → **Environment**
3. Update:
   ```
   STRIPE_SECRET_KEY=sk_live_YOUR_LIVE_KEY
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_LIVE_KEY
   ```
4. Save → Render auto-redeploys

## Updating Your Site

### Auto-Deploy on Push

Every time you push to GitHub, Render auto-deploys:

```bash
# Make changes
git add .
git commit -m "Update hero copy"
git push origin main
# Render automatically deploys!
```

Watch build progress in Render Dashboard → **Logs**

### Manual Deploy

Render Dashboard → **Manual Deploy** → **Deploy latest commit**

## Troubleshooting

**Build fails with "Cannot find module 'next'"**
→ Render is installing. Wait for build to complete.

**Site shows "Service Unavailable"**
→ Free tier spun down. First request takes ~30s. Upgrade to Starter for always-on.

**Stripe checkout doesn't work**
→ Check `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set correctly (must start with `pk_`)

**Stats show 0**
→ Normal if no test orders yet. Complete a checkout to see stats.

## Optional Enhancements

### Persistent Inventory Counter

Set up Upstash Redis (free):

1. Create account: https://upstash.com
2. Create Redis database → Copy credentials
3. Add to Render environment:
   ```
   UPSTASH_REDIS_REST_URL=https://your-db.upstash.io
   UPSTASH_REDIS_REST_TOKEN=your_token
   ```

### Enable Analytics

```
NEXT_PUBLIC_ANALYTICS_ENABLED=true
```

## Monitoring

**View Logs**:  
Render Dashboard → **Logs** (real-time)

**View Metrics**:  
Render Dashboard → **Metrics** (CPU, memory, response times)

**Monitor Payments**:  
https://dashboard.stripe.com/payments

## Cost Breakdown

| Service | Free Tier | Production |
|---------|-----------|------------|
| Render Web Service | $0/mo (spins down) | $7/mo (always on) |
| Upstash Redis | $0/mo (10K requests) | $0/mo (usually enough) |
| Custom Domain | - | ~$12/year |
| **Total** | **$0/mo** | **~$7-8/mo** |

## Support

- **Render Support**: https://community.render.com
- **Deployment Issues**: See `DEPLOYMENT.md`
- **Code Issues**: See `README.md`
- **Email**: hello@gatefire510.com

---

**That's it! Your site is live! 🎉**

View live site: `https://your-service.onrender.com`  
View logs: Render Dashboard → Logs  
Update code: `git push origin main`
