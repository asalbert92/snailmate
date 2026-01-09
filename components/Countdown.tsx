'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[60px] md:min-w-[80px]"
      >
        <span className="font-display text-2xl md:text-4xl font-bold">
          {String(value).padStart(2, '0')}
        </span>
      </motion.div>
      <span className="text-xs md:text-sm mt-1 text-white/70">{label}</span>
    </div>
  )

  return (
    <div className="flex gap-2 md:gap-4 justify-center">
      <TimeBlock value={timeLeft.days} label="days" />
      <span className="text-2xl md:text-4xl font-display self-start mt-2 md:mt-3">:</span>
      <TimeBlock value={timeLeft.hours} label="hours" />
      <span className="text-2xl md:text-4xl font-display self-start mt-2 md:mt-3">:</span>
      <TimeBlock value={timeLeft.minutes} label="minutes" />
      <span className="text-2xl md:text-4xl font-display self-start mt-2 md:mt-3 hidden md:block">:</span>
      <div className="hidden md:block">
        <TimeBlock value={timeLeft.seconds} label="seconds" />
      </div>
    </div>
  )
}
