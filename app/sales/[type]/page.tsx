'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react' // <--- 1. Importei isso
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { CheckIcon } from '@/components/CheckIcon'
import { getMetabolismType } from '@/lib/metabolism-types'

// LISTA DE VÍDEOS
const videoEmbeds: Record<string, string> = {
  'insulin':      `<script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script> <div id="ifr_6952c822bf3670f5340af207_wrapper" style="margin: 0 auto; width: 100%; "> <div style="position: relative; padding: 56.25% 0 0 0;" id="ifr_6952c822bf3670f5340af207_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_6952c822bf3670f5340af207" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/d8eccbd3-1abd-42bc-a6c9-76886e64285a/players/6952c822bf3670f5340af207/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> </div> </div>`,
  'retention':    `<script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script> <div id="ifr_6952c7e7b6c0dcc467296f69_wrapper" style="margin: 0 auto; width: 100%; "> <div style="position: relative; padding: 56.25% 0 0 0;" id="ifr_6952c7e7b6c0dcc467296f69_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_6952c7e7b6c0dcc467296f69" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/d8eccbd3-1abd-42bc-a6c9-76886e64285a/players/6952c7e7b6c0dcc467296f69/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> </div> </div>`,
  'cortisol':     `<script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script> <div id="ifr_6952a8edba8707e946be8f0d_wrapper" style="margin: 0 auto; width: 100%; "> <div style="position: relative; padding: 56.25% 0 0 0;" id="ifr_6952a8edba8707e946be8f0d_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_6952a8edba8707e946be8f0d" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/d8eccbd3-1abd-42bc-a6c9-76886e64285a/players/6952a8edba8707e946be8f0d/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> </div> </div>`,
  'inflammatory': `<script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script> <div id="ifr_6952a89b90b70171e3830d4f_wrapper" style="margin: 0 auto; width: 100%; "> <div style="position: relative; padding: 56.25% 0 0 0;" id="ifr_6952a89b90b70171e3830d4f_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_6952a89b90b70171e3830d4f" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/d8eccbd3-1abd-42bc-a6c9-76886e64285a/players/6952a89b90b70171e3830d4f/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> </div> </div>`,
  'hormonal':     `<script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script> <div id="ifr_6952a847ed1852c895e1dcb0_wrapper" style="margin: 0 auto; width: 100%; "> <div style="position: relative; padding: 56.25% 0 0 0;" id="ifr_6952a847ed1852c895e1dcb0_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_6952a847ed1852c895e1dcb0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/d8eccbd3-1abd-42bc-a6c9-76886e64285a/players/6952a847ed1852c895e1dcb0/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> </div> </div>`,
  'metabolic':    `<script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script> <div id="ifr_6952a7d471611df8185232ca_wrapper" style="margin: 0 auto; width: 100%; "> <div style="position: relative; padding: 56.25% 0 0 0;" id="ifr_6952a7d471611df8185232ca_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_6952a7d471611df8185232ca" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/d8eccbd3-1abd-42bc-a6c9-76886e64285a/players/6952a7d471611df8185232ca/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> </div> </div>`,
};

// CHECKOUT URLS
const CHECKOUT_URLS = {
  monthly: 'https://metaslim.mycartpanda.com/checkout/204917190:1?test_mode=true',
  annual: 'https://metaslim.mycartpanda.com/checkout/204917189:1?test_mode=true'
}

export default function SalesPage() {
  const params = useParams()
  const type = params.type as string
  const typeInfo = getMetabolismType(type)

  // --- 2. CONFIGURAÇÃO DO DELAY (8 MINUTOS) ---
  const [showOffer, setShowOffer] = useState(false)

  useEffect(() => {
    // 8 minutos = 480 segundos = 480000 ms
    // DICA: Para testar rápido, mude 480000 para 2000 (2 segundos)
    const timer = setTimeout(() => {
      setShowOffer(true)
    }, 480000)

    return () => clearTimeout(timer)
  }, [])
  // -------------------------------------------

  const handleCheckout = async (plan: 'monthly' | 'annual') => {
    // Store type in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('slimpath_profile_type', type)
      localStorage.setItem('slimpath_checkout_timestamp', Date.now().toString())
      
      let sessionId = sessionStorage.getItem('slimpath_checkout_session_id')
      if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        sessionStorage.setItem('slimpath_checkout_session_id', sessionId)
      }
      localStorage.setItem('slimpath_checkout_session_id', sessionId)
      
      try {
        console.log(`🔄 [Marketing] Storing profile type "${type}" with session_id "${sessionId}"...`)
        
        const apiUrl = 'https://www.slimpathai.com/api/store-profile-type'
        console.log(`   Calling API: ${apiUrl}`)
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            profile_type: type,
            session_id: sessionId
          })
        })
        
        console.log(`   Response status: ${response.status} ${response.statusText}`)
        
        if (response.ok) {
          const result = await response.json()
          console.log('✅ [Marketing] Profile type stored in database for checkout:', result)
        } else {
          const errorText = await response.text()
          let errorData
          try {
            errorData = JSON.parse(errorText)
          } catch {
            errorData = { error: errorText }
          }
          console.error('❌ [Marketing] Failed to store profile type in database:', errorData)
          console.warn('⚠️ Profile type not saved. You may need to contact support after payment.')
        }
      } catch (error) {
        console.error('❌ [Marketing] Network error storing profile type in database:', error)
        console.warn('⚠️ Network error saving profile type. Check your connection.')
      }
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const separator = CHECKOUT_URLS[plan].includes('?') ? '&' : '?';
    const checkoutUrl = `${CHECKOUT_URLS[plan]}${separator}type=${type}`
    console.log(`🔄 [Marketing] Redirecting to checkout: ${checkoutUrl}`)
    window.location.href = checkoutUrl
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="text-2xl font-bold">SlimPath AI</div>
          <div className="text-sm">✓ Your Personalized Solution</div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">{typeInfo.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {typeInfo.headline}
          </h1>
          <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
            {typeInfo.description}
          </p>
          <div className="inline-block bg-white rounded-lg shadow-lg p-4">
            <p className="text-sm text-gray-600 mb-2">Your Type:</p>
            <p className="text-2xl font-bold gradient-text">{typeInfo.name}</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Watch: How to Fix Your {typeInfo.name}
          </h2>
          
          <Card className="aspect-video bg-black flex items-center justify-center overflow-hidden relative shadow-2xl rounded-xl">
             {videoEmbeds[type] ? (
               <div 
                 className="w-full h-full absolute inset-0"
                 dangerouslySetInnerHTML={{ __html: videoEmbeds[type] }} 
               />
             ) : (
               <div className="text-center text-white">
                 <div className="text-6xl mb-4">🎥</div>
                 <p className="text-xl">Carregando vídeo...</p>
               </div>
             )}
          </Card>
        </div>
      </section>

      {/* --- 3. AQUI COMEÇA O BLOCO ESCONDIDO (APARECE SÓ APÓS 8 MINUTOS) --- */}
      {showOffer && (
        <>
          {/* Problem Section */}
          <section className="py-16 animate-fade-in">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">
                Why {typeInfo.name}s Can't Lose Weight
              </h2>
              <Card className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-red-600">The Real Problem:</h3>
                <div className="space-y-4">
                  {typeInfo.causes.map((cause, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">✗</span>
                      <p className="text-gray-700">{cause}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="bg-green-50 border-2 border-green-500">
                <h3 className="text-2xl font-bold mb-4 text-green-700">The Solution:</h3>
                <p className="text-lg text-gray-700 mb-6">{typeInfo.solution}</p>
                <div className="space-y-3">
                  {typeInfo.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-4 text-white">
                Start Your {typeInfo.name} Transformation Today
              </h2>
              <p className="text-center text-white/90 mb-12 text-lg">
                Choose your plan and get instant access to your personalized program
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Monthly Plan */}
                <Card className="text-center p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Monthly Plan</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">$37</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900">30-day {typeInfo.name} program</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900">Lean AI coach 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900">Type-specific meal plans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900">Progress tracking</span>
                    </li>
                  </ul>
                  <Button fullWidth size="lg" onClick={() => handleCheckout('monthly')}>
                    Start Monthly Plan →
                  </Button>
                </Card>

                {/* Annual Plan */}
                <Card className="text-center p-8 border-4 border-yellow-400 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-1 rounded-full font-bold text-sm">
                    BEST VALUE - Save $147
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Annual Plan</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">$297</span>
                    <span className="text-gray-600">/year</span>
                    <p className="text-sm text-green-600 font-semibold mt-2">
                      Just $24.75/month!
                    </p>
                  </div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900">Everything in Monthly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900">Priority support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900">Exclusive bonus content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900">Advanced analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="font-bold text-green-700">Save $147 per year!</span>
                    </li>
                  </ul>
                  <Button fullWidth size="lg" onClick={() => handleCheckout('annual')}>
                    Start Annual Plan →
                  </Button>
                </Card>
              </div>

              <div className="text-center mt-8 text-white">
                <p className="text-sm">✓ 30-Day Money-Back Guarantee · ✓ Cancel Anytime · ✓ Instant Access</p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Success Stories from Other {typeInfo.name}s
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
                      S
                    </div>
                    <div>
                      <div className="font-bold">Sarah M.</div>
                      <div className="text-sm text-gray-600">{typeInfo.name}</div>
                    </div>
                  </div>
                  <div className="text-green-600 font-bold mb-2">✓ Lost 23 lbs in 8 weeks</div>
                  <p className="text-gray-700 italic">"Finally found a program designed for my {typeInfo.type} type. Game changer!"</p>
                </Card>
                <Card>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center text-white font-bold text-xl">
                      J
                    </div>
                    <div>
                      <div className="font-bold">Jennifer L.</div>
                      <div className="text-sm text-gray-600">{typeInfo.name}</div>
                    </div>
                  </div>
                  <div className="text-green-600 font-bold mb-2">✓ Lost 18 lbs in 6 weeks</div>
                  <p className="text-gray-700 italic">"The personalized approach made all the difference. Worth every penny!"</p>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {[
                  { q: "How is this different from other programs?", a: `SlimPath is specifically designed for ${typeInfo.name}s. Generic diets don't work because they ignore your unique metabolism type.` },
                  { q: "What happens after I sign up?", a: "You'll receive instant access to your personalized dashboard. Complete the onboarding (7 steps) and start Day 1 of your transformation." },
                  { q: "Can I cancel anytime?", a: "Yes! Cancel anytime with no hassle. We also offer a 30-day money-back guarantee." },
                  { q: "Do I need special equipment?", a: "No! The program is designed to work with minimal equipment. Most exercises can be done at home with bodyweight." }
                ].map((faq, index) => (
                  <Card key={index}>
                    <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Fix Your {typeInfo.name}?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Join thousands who finally found their solution. Start your personalized program today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => handleCheckout('annual')}>
                  Start Annual Plan - Save $147 →
                </Button>
                <Button size="lg" variant="outline" onClick={() => handleCheckout('monthly')} className="bg-white">
                  Start Monthly Plan →
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-6">
                ✓ Instant Access · ✓ 30-Day Guarantee · ✓ Cancel Anytime
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
        </>
      )}
    </div>
  )
}