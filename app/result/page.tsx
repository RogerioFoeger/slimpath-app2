'use client'

import { useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { getMetabolismType } from '@/lib/metabolism-types'
import { MetabolismTypeInfo } from '@/lib/types'

function ResultContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [typeInfo, setTypeInfo] = useState<MetabolismTypeInfo | null>(null)
  const [countdown, setCountdown] = useState(15)

  useEffect(() => {
    const type = searchParams.get('type') || 'cortisol'
    setTypeInfo(getMetabolismType(type))

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push(`/sales/${type}`)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [searchParams, router])

  if (!typeInfo) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Result Reveal */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">Your Result Is Ready!</h1>
          <p className="text-xl text-gray-600">Analyzing your answers...</p>
        </div>

        {/* Type Card */}
        <Card className="animate-fade-in p-12 mb-8">
          <div className="text-7xl mb-6">{typeInfo.icon}</div>
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            You Are a {typeInfo.name}
          </h2>
          <p className="text-2xl text-gray-700 mb-6">{typeInfo.title}</p>
          <p className="text-lg text-gray-600 mb-8">{typeInfo.description}</p>
          
          {/* Symptoms Match */}
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-8">
            <div className="text-green-600 font-bold mb-4 text-lg">✓ Do These Symptoms Sound Familiar?</div>
            <div className="grid md:grid-cols-2 gap-3 text-left">
              {typeInfo.symptoms.slice(0, 4).map((symptom, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">●</span>
                  <span className="text-gray-700">{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary-50 border-2 border-primary-500 rounded-lg p-6">
            <p className="text-xl font-bold text-gray-800 mb-4">
              Redirecting to your personalized solution in {countdown} seconds...
            </p>
            <Button size="lg" onClick={() => router.push(`/sales/${typeInfo.type}`)}>
              See My Solution Now →
            </Button>
          </div>
        </Card>

        {/* Trust Badges */}
        <div className="flex justify-center gap-6 text-sm text-gray-600">
          <span className="text-gray-600">✓ Science-Based</span>
          <span className="text-gray-600">✓ 10,000+ Success Stories</span>
          <span className="text-gray-600">✓ 30-Day Program</span>
        </div>
      </div>
    </div>
  )
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ResultContent />
    </Suspense>
  )
}

