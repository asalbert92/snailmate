'use client'

import { useState, useEffect } from 'react'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const valentinesDay = new Date('2026-02-14T00:00:00')

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = valentinesDay.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-baseline gap-1 font-ui">
      <span className="text-3xl md:text-4xl font-light text-cream tabular-nums">
        {String(timeLeft.days).padStart(2, '0')}
      </span>
      <span className="text-sm text-cream/40 mr-3">d</span>

      <span className="text-3xl md:text-4xl font-light text-cream tabular-nums">
        {String(timeLeft.hours).padStart(2, '0')}
      </span>
      <span className="text-sm text-cream/40 mr-3">h</span>

      <span className="text-3xl md:text-4xl font-light text-cream tabular-nums">
        {String(timeLeft.minutes).padStart(2, '0')}
      </span>
      <span className="text-sm text-cream/40 mr-3">m</span>

      <span className="text-3xl md:text-4xl font-light text-cream tabular-nums hidden md:inline">
        {String(timeLeft.seconds).padStart(2, '0')}
      </span>
      <span className="text-sm text-cream/40 hidden md:inline">s</span>
    </div>
  )
}
