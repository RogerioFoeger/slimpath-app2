'use client'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center px-4">
      <Card className="max-w-2xl text-center p-12">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-4xl font-bold mb-4 gradient-text">
          Welcome to SlimPath AI!
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Your payment was successful!
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Check your email for your magic link to access the app and start your personalized 30-day transformation.
        </p>
        
        <div className="bg-primary-50 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-lg mb-3">What Happens Next:</h3>
          <div className="text-left space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-primary-500 font-bold">1.</span>
              <p className="text-gray-700">Check your email for your access link</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary-500 font-bold">2.</span>
              <p className="text-gray-700">Click the link to access your dashboard</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary-500 font-bold">3.</span>
              <p className="text-gray-700">Complete your 7-step onboarding</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary-500 font-bold">4.</span>
              <p className="text-gray-700">Start Day 1 of your transformation!</p>
            </div>
          </div>
        </div>

        <Button 
          size="lg"
          onClick={() => window.location.href = 'https://slimpathaiapp.vercel.app/login'}
        >
          Go to App →
        </Button>

        <p className="text-sm text-gray-500 mt-6">
          Need help? Email us at support@slimpathai.com
        </p>
      </Card>
    </div>
  )
}

