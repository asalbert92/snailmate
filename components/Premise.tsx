'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const lines = [
  'No texting. No DMs. No googling.',
  'Just handwritten cards to a stranger.',
  'For 10 days.',
  'Then you meet. On Valentine\'s Day.',
  '',
  'This is Snail Mate.'
]

export default function Premise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div ref={ref} className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-12 text-pink"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          What if you couldn&apos;t swipe?
        </motion.h2>

        <div className="space-y-4">
          {lines.map((line, index) => (
            <motion.p
              key={index}
              className={`text-lg md:text-xl lg:text-2xl ${
                line === 'This is Snail Mate.'
                  ? 'font-script text-3xl md:text-4xl text-lime mt-8'
                  : 'text-white/90'
              } ${line === '' ? 'h-4' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.15
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
