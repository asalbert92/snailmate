'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'

const days = [
  { day: 1, text: "You write your first card. No idea who's reading it." },
  { day: 2, text: "You wait. Checking your mailbox like it's 1995." },
  { day: 3, text: "Their card arrives. You recognize nothing but their handwriting." },
  { day: 4, text: "You write back. It's getting easier." },
  { day: 5, text: "You start wondering what they look like." },
  { day: 6, text: "You've memorized how they cross their T's." },
  { day: 7, text: "The letters are getting longer." },
  { day: 8, text: "You almost google them. You don't." },
  { day: 9, text: "Tomorrow you meet." },
  { day: 10, text: "Valentine's Day. You see them for the first time." },
]

export default function Timeline() {
  const [activeDay, setActiveDay] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-display text-4xl md:text-5xl text-center mb-16 text-pink"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          How It Works
        </motion.h2>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline line */}
          <motion.div
            className="absolute top-8 left-0 right-0 h-1 bg-lime/30 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {/* Day markers */}
          <div className="flex justify-between relative">
            {days.map((item, index) => (
              <motion.div
                key={item.day}
                className="flex flex-col items-center relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index + 0.5 }}
              >
                <motion.button
                  className={`w-16 h-16 rounded-full flex items-center justify-center font-display text-lg font-bold cursor-pointer transition-all z-10 ${
                    activeDay === item.day
                      ? 'bg-lime text-deep-purple scale-110'
                      : 'bg-white/10 text-white hover:bg-lime/50 hover:text-deep-purple'
                  }`}
                  onClick={() => setActiveDay(activeDay === item.day ? null : item.day)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.day}
                </motion.button>

                {/* Expanded card */}
                {activeDay === item.day && (
                  <motion.div
                    className="absolute top-20 bg-cream text-deep-purple p-4 rounded-lg shadow-xl w-64 z-20"
                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  >
                    <p className="font-script text-lg">Day {item.day}</p>
                    <p className="text-sm mt-2">{item.text}</p>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cream rotate-45" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-1 bg-lime/30 rounded-full"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-6">
            {days.map((item, index) => (
              <motion.div
                key={item.day}
                className="flex items-start gap-4 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * index + 0.3 }}
              >
                <motion.button
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold flex-shrink-0 transition-all z-10 ${
                    activeDay === item.day
                      ? 'bg-lime text-deep-purple'
                      : 'bg-white/10 text-white'
                  }`}
                  onClick={() => setActiveDay(activeDay === item.day ? null : item.day)}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.day}
                </motion.button>

                <motion.div
                  className={`flex-1 transition-all ${
                    activeDay === item.day
                      ? 'bg-cream text-deep-purple p-4 rounded-lg'
                      : ''
                  }`}
                  animate={{
                    backgroundColor: activeDay === item.day ? '#FFF8F0' : 'transparent',
                  }}
                >
                  {activeDay === item.day ? (
                    <>
                      <p className="font-script text-xl text-purple">Day {item.day}</p>
                      <p className="text-sm mt-1">{item.text}</p>
                    </>
                  ) : (
                    <p className="text-white/70 text-sm pt-3">
                      Tap to reveal Day {item.day}
                    </p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
