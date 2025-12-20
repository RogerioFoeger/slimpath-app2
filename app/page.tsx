'use client'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CheckIcon } from '@/components/CheckIcon'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Navigation */}
      <nav className="bg-white shadow-soft">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">SlimPath AI</div>
          <Button variant="outline" size="sm" onClick={() => window.location.href = 'https://slimpathai.com/login'}>
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Why Can't You <span className="gradient-text">Lose Weight?</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto animate-fade-in">
          Your Metabolism Type Holds The Answer
        </p>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
          Take our free 2-minute quiz to discover which of 6 metabolism types is blocking your weight loss—and get a personalized solution that actually works.
        </p>
        <Button 
          size="lg" 
          onClick={() => router.push('/quiz')}
          className="animate-fade-in"
        >
          Take Free Quiz →
        </Button>
        <p className="text-sm text-gray-500 mt-4">✓ 2 minutes · ✓ Science-based · ✓ 10,000+ women helped</p>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Does This Sound Familiar?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "You've tried every diet but nothing works",
              "You lose weight then gain it all back",
              "You exercise but see no results",
              "You're always tired and bloated",
              "You crave sugar and carbs constantly",
              "Your weight won't budge no matter what"
            ].map((problem, index) => (
              <Card key={index} className="flex items-start gap-4">
                <span className="text-2xl">😞</span>
                <p className="text-gray-700">{problem}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 mb-6">
              <strong>It's not your fault.</strong> You're just following the wrong plan for YOUR metabolism.
            </p>
            <Button onClick={() => router.push('/quiz')}>
              Discover Your Metabolism Type →
            </Button>
          </div>
        </div>
      </section>

      {/* 6 Types Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          The 6 Metabolism Types
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Most diets fail because they treat everyone the same. But your body is unique. 
          Discover which type you are and unlock your personalized solution.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '⚡', name: 'Cortisol Type', desc: 'Stress hormones blocking weight loss' },
            { icon: '🌸', name: 'Hormonal Type', desc: 'Hormone imbalances causing gain' },
            { icon: '🔥', name: 'Inflammatory Type', desc: 'Chronic inflammation storing fat' },
            { icon: '⚙️', name: 'Metabolic Type', desc: 'Slow metabolism from yo-yo dieting' },
            { icon: '💧', name: 'Retention Type', desc: 'Water retention hiding progress' },
            { icon: '🍯', name: 'Insulinic Type', desc: 'Blood sugar issues storing fat' }
          ].map((type, index) => (
            <Card key={index} hover className="text-center">
              <div className="text-5xl mb-4">{type.icon}</div>
              <h3 className="text-xl font-bold mb-2">{type.name}</h3>
              <p className="text-gray-600 text-sm">{type.desc}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" onClick={() => router.push('/quiz')}>
            Which Type Are You? Take Quiz →
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How SlimPath Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Take the Quiz', desc: 'Answer 10 simple questions about your symptoms, habits, and body' },
              { num: '2', title: 'Get Your Type', desc: 'Discover which metabolism type is blocking your weight loss' },
              { num: '3', title: 'Start Your Program', desc: '30-day personalized plan with AI coaching designed for YOUR type' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white text-primary-500 flex items-center justify-center text-2xl font-bold">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/90">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Join 10,000+ Women Who Found Their Solution
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Sarah M.', type: 'Cortisol Type', result: 'Lost 23 lbs', quote: "Finally understood why stress was blocking my weight loss. The personalized plan worked when nothing else did." },
            { name: 'Jennifer L.', type: 'Hormonal Type', result: 'Lost 18 lbs', quote: "The cycle-synced nutrition was a game-changer. I feel like myself again and the weight is finally coming off." },
            { name: 'Maria R.', type: 'Insulinic Type', result: 'Lost 31 lbs', quote: "No more sugar cravings! Understanding my blood sugar type gave me control I never had before." }
          ].map((testimonial, index) => (
            <Card key={index}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.type}</div>
                </div>
              </div>
              <div className="text-green-600 font-bold mb-2">✓ {testimonial.result}</div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discover Your Metabolism Type?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Take the free 2-minute quiz and get your personalized weight loss solution today.
          </p>
          <Button size="lg" onClick={() => router.push('/quiz')}>
            Start Free Quiz Now →
          </Button>
          <p className="text-sm text-gray-400 mt-6">
            ✓ No email required · ✓ Instant results · ✓ Science-backed
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-xl font-bold mb-4 gradient-text">SlimPath AI</div>
          <div className="flex justify-center gap-6 mb-4 text-sm">
            <a href="mailto:support@slimpathai.com" className="text-gray-400 hover:text-white">Support</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms</a>
          </div>
          <p className="text-gray-500 text-sm">© 2025 SlimPath AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

