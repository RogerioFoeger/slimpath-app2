# Deployment Guide - SlimPath Marketing Website

## 🚀 Quick Deployment Steps

### 1. Prepare Repository

```bash
# Navigate to marketing site directory
cd slimpath-marketing

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: SlimPath Marketing Website"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/slimpath-marketing.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Click "Deploy"
6. Wait 2-3 minutes ✅

### 3. Add Custom Domain

1. In Vercel → Your Project → Settings → Domains
2. Add domain: `slimpathai.com`
3. Vercel will provide DNS records
4. Go to GoDaddy DNS Management
5. Add records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21 (Vercel's IP)
   TTL: 600

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 600
   ```
6. Wait 24-48 hours for DNS propagation
7. ✅ Site live at `https://slimpathai.com`

### 4. Configure Environment Variables (Optional)

In Vercel → Project → Settings → Environment Variables:

```
NEXT_PUBLIC_APP_URL=https://slim-path-marketing.vercel.app
NEXT_PUBLIC_PWA_URL=https://slimpathaiapp.vercel.app
NEXT_PUBLIC_CHECKOUT_MONTHLY=your_checkout_url
NEXT_PUBLIC_CHECKOUT_ANNUAL=your_checkout_url
```

### 5. Update Checkout URLs

1. Edit `app/sales/[type]/page.tsx`
2. Update CHECKOUT_URLS with your actual Cartpanda/Kirvano URLs
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update checkout URLs"
   git push
   ```
4. Vercel auto-deploys! ✅

### 6. Test Complete Flow

1. Visit `https://slimpathai.com`
2. Click "Take Free Quiz"
3. Complete quiz
4. See result page
5. Get redirected to sales page
6. Verify checkout URLs work
7. Test with real purchase (or test mode)

## 🔗 Integration with PWA

Ensure your PWA (slimpathaiapp.vercel.app) webhook is configured:

1. **Cartpanda/Kirvano Webhook URL**: `https://slimpathaiapp.vercel.app/api/webhook`
2. **Custom Field**: `profile_type`
3. **Pass from URL**: Yes (from `?type=cortisol` in checkout URL)

## ✅ Post-Deployment Checklist

- [ ] Marketing site loads at `slimpathai.com`
- [ ] Quiz works and calculates correct type
- [ ] Sales pages display correctly for all 6 types
- [ ] Checkout URLs redirect properly
- [ ] URL parameter `?type=X` is passed to checkout
- [ ] Test purchase creates user in PWA
- [ ] User receives magic link email
- [ ] User can login to PWA app
- [ ] Analytics tracking works (if configured)

## 🎨 Customization

### Add Your Logo

1. Add logo file to `public/logo.png`
2. Update references in components

### Change Content

- **Homepage**: Edit `app/page.tsx`
- **Quiz Questions**: Edit `lib/quiz-questions.ts`
- **Type Info**: Edit `lib/metabolism-types.ts`
- **Sales Page**: Edit `app/sales/[type]/page.tsx`

### Add Sales Video

In `app/sales/[type]/page.tsx`, replace the video placeholder:

```tsx
<div className="aspect-video">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
```

## 📊 Monitoring

### Vercel Analytics

Automatically enabled - view in Vercel dashboard

### Google Analytics (Optional)

1. Get GA4 tracking ID
2. Add to Vercel environment variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Add tracking code to `app/layout.tsx`

## 🆘 Troubleshooting

### Site Not Loading
- Check DNS propagation: use [whatsmydns.net](https://whatsmydns.net)
- Verify Vercel deployment succeeded
- Check domain settings in Vercel

### Quiz Not Working
- Open browser console for errors
- Verify `lib/quiz-logic.ts` has no syntax errors
- Check localStorage is enabled

### Checkout Not Redirecting
- Verify CHECKOUT_URLS are correct
- Check URL format includes `?type=` parameter
- Test in incognito mode

## 📞 Support

Need help? Contact: support@slimpathai.com

## 🎉 You're Live!

Congratulations! Your marketing funnel is now live and ready to convert visitors into customers.

**Next Steps:**
1. Drive traffic to your quiz
2. Monitor conversion rates
3. A/B test different copy
4. Collect testimonials
5. Scale your ads!

