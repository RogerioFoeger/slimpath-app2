# SlimPath AI - Marketing Website

This is the marketing website for SlimPath AI, featuring:
- Homepage with compelling copy
- Interactive 10-question metabolism quiz
- Results page
- 6 personalized sales pages (one per metabolism type)
- Thank you page

## 🚀 Features

- **Interactive Quiz**: 10 questions that determine user's metabolism type
- **Smart Logic**: Calculates results based on weighted answers
- **6 Metabolism Types**:
  - Cortisol (Stress)
  - Hormonal
  - Inflammatory
  - Metabolic
  - Retention
  - Insulinic
- **Personalized Sales Pages**: Different content for each type
- **Mobile Responsive**: Perfect on all devices
- **Fast Performance**: Built with Next.js 14

## 📋 Prerequisites

- Node.js 18+ and npm
- Cartpanda or Kirvano account for payment processing

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### 1. Update Checkout URLs

Edit `app/sales/[type]/page.tsx` and update the CHECKOUT_URLS:

```typescript
const CHECKOUT_URLS = {
  monthly: 'https://your-cartpanda-url.com/checkout/monthly',
  annual: 'https://your-cartpanda-url.com/checkout/annual'
}
```

### 2. Add Your Sales Video

In `app/sales/[type]/page.tsx`, replace the video placeholder with your actual video embed (YouTube, Vimeo, etc.)

### 3. Configure Cartpanda/Kirvano

In your payment processor:
1. Set webhook URL: `https://slimpathaiapp.vercel.app/api/webhook`
2. Configure custom field: `profile_type`
3. Pass type from URL parameter
4. Send these fields in webhook:
   - email
   - name
   - profile_type
   - subscription_plan
   - transaction_id
   - amount

## 📁 Project Structure

```
slimpath-marketing/
├── app/
│   ├── page.tsx              # Homepage
│   ├── quiz/
│   │   └── page.tsx          # Interactive quiz
│   ├── result/
│   │   └── page.tsx          # Quiz results
│   ├── sales/
│   │   └── [type]/
│   │       └── page.tsx      # Dynamic sales page
│   └── thank-you/
│       └── page.tsx          # Post-purchase
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── ProgressBar.tsx
│   └── CheckIcon.tsx
├── lib/
│   ├── types.ts              # TypeScript types
│   ├── metabolism-types.ts   # All 6 types data
│   ├── quiz-questions.ts     # 10 quiz questions
│   └── quiz-logic.ts         # Scoring algorithm
└── public/
    └── (add your logo here)
```

## 🌐 Deployment to Vercel

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit - SlimPath Marketing Site"
git remote add origin https://github.com/your-username/slimpath-marketing.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and import your repository

3. Configure:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. Deploy!
   - Vercel will auto-assign a domain like `slim-path-marketing.vercel.app`
   - Or add a custom domain in Settings → Domains

## 🎨 Customization

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#YOUR_COLOR',
    // ... other shades
  }
}
```

### Modify Quiz Questions

Edit `lib/quiz-questions.ts` to change questions or add more

### Update Type Information

Edit `lib/metabolism-types.ts` to modify symptoms, causes, solutions for each type

## 📊 User Flow

```
Homepage → Quiz (10 questions) → Result Page → Sales Page → Checkout → PWA App
```

1. User visits `slim-path-marketing.vercel.app`
2. Takes quiz and answers 10 questions
3. Sees result: "You're a Cortisol Type!"
4. Redirected to personalized sales page
5. Watches video, sees testimonials
6. Clicks "Buy Now"
7. Goes to Cartpanda checkout
8. After payment, webhook creates account in PWA
9. User receives magic link email
10. Clicks link → Opens PWA app → Onboarding → Dashboard

## 🔗 Integration with PWA

The marketing site integrates with the PWA app via:
1. **Profile Type Parameter**: Passes `type=cortisol` to checkout
2. **Webhook**: Cartpanda sends data to `slimpathaiapp.vercel.app/api/webhook`
3. **Magic Link**: PWA sends email with login link
4. **Onboarding**: PWA already knows user's metabolism type

## 🆘 Support

Need help? Contact: support@slimpathai.com

## 📝 License

© 2025 SlimPath AI. All rights reserved.

