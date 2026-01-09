'use client'

import { useState, useEffect } from 'react'

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling past 100vh
      const shouldShow = window.scrollY > window.innerHeight
      setIsVisible(shouldShow)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-14 bg-cream/95 backdrop-blur-sm z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0 shadow-sm' : 'opacity-0 -translate-y-full'
      }`}
    >
      <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between">
        <span className="font-script text-xl text-burgundy">snail mate</span>
        <a
          href="https://l0tpc2x5vz2.typeform.com/snailmate"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs uppercase tracking-[0.1em] text-burgundy hover:text-burgundy-deep transition-colors cursor-pointer"
        >
          Apply
        </a>
      </div>
    </header>
  )
}
