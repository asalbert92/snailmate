'use client'

import { useState, useEffect } from 'react'
import EnvelopeAnimation from '@/components/EnvelopeAnimation'
import Hero from '@/components/Hero'
import Premise from '@/components/Premise'
import Timeline from '@/components/Timeline'
import Rules from '@/components/Rules'
import CardPreview from '@/components/CardPreview'
import ApplicationForm from '@/components/ApplicationForm'
import FAQ from '@/components/FAQ'

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [hasSeenIntro, setHasSeenIntro] = useState(false)

  useEffect(() => {
    // Check if user has seen the intro before
    const seen = sessionStorage.getItem('snailmate-intro-seen')
    if (seen) {
      setShowIntro(false)
      setHasSeenIntro(true)
    }
  }, [])

  const handleIntroComplete = () => {
    setShowIntro(false)
    setHasSeenIntro(true)
    sessionStorage.setItem('snailmate-intro-seen', 'true')
  }

  return (
    <main className="relative bg-warm-black">
      {showIntro && !hasSeenIntro && (
        <EnvelopeAnimation onComplete={handleIntroComplete} />
      )}

      <Hero />
      <Premise />
      <Timeline />
      <Rules />
      <CardPreview />
      <ApplicationForm />
      <FAQ />

      {/* Footer */}
      <footer className="py-12 px-6 bg-warm-black border-t border-cream/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-cream/50 text-sm">
            A project by{' '}
            <a
              href="https://escargot.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
            >
              Escargot
            </a>
          </p>
          <p className="font-ui text-xs uppercase tracking-widest text-cream/30 mt-4">
            Valentine&apos;s Day 2026
          </p>
        </div>
      </footer>
    </main>
  )
}
