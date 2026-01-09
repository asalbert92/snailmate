'use client'

import { useState, useEffect } from 'react'
import EnvelopeAnimation from '@/components/EnvelopeAnimation'
import FloatingElements from '@/components/FloatingElements'
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
    <main className="relative">
      {showIntro && !hasSeenIntro && (
        <EnvelopeAnimation onComplete={handleIntroComplete} />
      )}

      <FloatingElements />

      <div className="relative z-10">
        <Hero />
        <Premise />
        <Timeline />
        <Rules />
        <CardPreview />
        <ApplicationForm />
        <FAQ />

        {/* Footer */}
        <footer className="py-8 px-4 text-center border-t border-white/10">
          <p className="text-white/50 text-sm">
            A project by{' '}
            <a
              href="https://escargot.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime hover:underline"
            >
              Escargot
            </a>
          </p>
          <p className="text-white/30 text-xs mt-2">
            Valentine&apos;s Day 2026
          </p>
        </footer>
      </div>
    </main>
  )
}
