'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const rules = [
  'No texting.',
  'No calling.',
  'No social media.',
  'No googling.',
]

const finalLines = [
  'Just letters.',
  'Just patience.',
  'Just trust.',
]

export default function Rules() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-32 md:py-48 overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070')`,
          }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-warm-black/80 via-warm-black/70 to-warm-black/90" />
        {/* Film grain effect */}
        <div className="absolute inset-0 film-grain opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Title */}
        <motion.h2
          className="font-display text-4xl md:text-5xl lg:text-6xl mb-16 text-cream"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          The Rules
        </motion.h2>

        {/* Rules - large stacked typography */}
        <div className="space-y-4 md:space-y-6 mb-16">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * index + 0.2, duration: 0.6 }}
            >
              <p className="font-display text-2xl md:text-4xl lg:text-5xl text-cream/90 tracking-wide">
                {rule}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Gold divider */}
        <motion.div
          className="w-24 h-px bg-gold mx-auto mb-16"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        />

        {/* Final lines - italic gold */}
        <div className="space-y-3 md:space-y-4">
          {finalLines.map((line, index) => (
            <motion.p
              key={index}
              className="font-display text-xl md:text-3xl lg:text-4xl text-gold italic"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + 0.2 * index, duration: 0.6 }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
