'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'

const days = [
  { day: 1, text: "You write your first card. No idea who's reading it.", icon: "✍️" },
  { day: 2, text: "You wait. Checking your mailbox like it's 1995.", icon: "📮" },
  { day: 3, text: "Their card arrives. You recognize nothing but their handwriting.", icon: "💌" },
  { day: 4, text: "You write back. It's getting easier.", icon: "✉️" },
  { day: 5, text: "You start wondering what they look like.", icon: "💭" },
  { day: 6, text: "You've memorized how they cross their T's.", icon: "🔍" },
  { day: 7, text: "The letters are getting longer.", icon: "📝" },
  { day: 8, text: "You almost google them. You don't.", icon: "🚫" },
  { day: 9, text: "Tomorrow you meet.", icon: "🌙" },
  { day: 10, text: "Valentine's Day. You see them for the first time.", icon: "💕" },
]

export default function Timeline() {
  const [activeDay, setActiveDay] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-32 md:py-40" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 text-cream">
            How It Works
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </motion.div>

        {/* Desktop Timeline - Horizontal scroll with cards */}
        <div className="hidden md:block">
          <div className="flex gap-4 overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
            {days.map((item, index) => (
              <motion.div
                key={item.day}
                className="flex-shrink-0 w-56"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.05 * index + 0.3, duration: 0.5 }}
              >
                <motion.button
                  className={`w-full text-left transition-all duration-300 ${
                    activeDay === item.day ? 'scale-105' : ''
                  }`}
                  onClick={() => setActiveDay(activeDay === item.day ? null : item.day)}
                  whileHover={{ y: -4 }}
                >
                  {/* Card */}
                  <div className={`card-paper p-5 transition-all duration-300 ${
                    activeDay === item.day ? 'shadow-xl' : ''
                  }`}>
                    {/* Day number */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-ui text-xs uppercase tracking-widest text-dusty-rose">
                        Day {item.day}
                      </span>
                      <span className="text-lg">{item.icon}</span>
                    </div>

                    {/* Content */}
                    <p className={`font-body text-sm text-warm-black/80 transition-all duration-300 ${
                      activeDay === item.day ? 'line-clamp-none' : 'line-clamp-2'
                    }`}>
                      {item.text}
                    </p>
                  </div>

                  {/* Connector line */}
                  {index < days.length - 1 && (
                    <div className="flex items-center justify-end mt-3 -mr-4">
                      <div className="h-px w-8 bg-gold/30" />
                    </div>
                  )}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="md:hidden relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-4 top-0 bottom-0 w-px bg-gold/30"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-6">
            {days.map((item, index) => (
              <motion.div
                key={item.day}
                className="flex items-start gap-6 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.08 * index + 0.3 }}
              >
                {/* Day marker */}
                <button
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-ui text-xs font-medium flex-shrink-0 transition-all z-10 ${
                    activeDay === item.day
                      ? 'bg-burgundy text-cream'
                      : 'bg-warm-black border border-gold/30 text-cream/70'
                  }`}
                  onClick={() => setActiveDay(activeDay === item.day ? null : item.day)}
                >
                  {item.day}
                </button>

                {/* Card content */}
                <motion.div
                  className={`flex-1 transition-all duration-300 ${
                    activeDay === item.day
                      ? 'card-paper p-4'
                      : 'py-1'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm">{item.icon}</span>
                    <span className={`font-ui text-xs uppercase tracking-widest ${
                      activeDay === item.day ? 'text-burgundy' : 'text-cream/50'
                    }`}>
                      Day {item.day}
                    </span>
                  </div>
                  <p className={`text-sm ${
                    activeDay === item.day
                      ? 'text-warm-black/80'
                      : 'text-cream/60'
                  }`}>
                    {activeDay === item.day ? item.text : item.text.slice(0, 40) + '...'}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
