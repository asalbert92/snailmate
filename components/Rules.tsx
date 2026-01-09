'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const rules = [
  'No texting.',
  'No calling.',
  'No social media.',
  'No googling.',
  'Only letters. Only patience. Only trust.',
]

export default function Rules() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 px-4 bg-deep-purple/50" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="font-display text-4xl md:text-5xl mb-12 text-pink"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          The Rules
        </motion.h2>

        <div className="space-y-6">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 * index + 0.3, duration: 0.5 }}
            >
              <motion.p
                className={`text-xl md:text-2xl font-body ${
                  index === rules.length - 1
                    ? 'text-lime font-semibold mt-8'
                    : 'text-white'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                {index < rules.length - 1 && (
                  <span className="text-magenta font-bold mr-2">
                    Rule {index + 1}:
                  </span>
                )}
                {rule}
              </motion.p>

              {/* Strike-through animation for "No" rules */}
              {index < rules.length - 1 && (
                <motion.div
                  className="absolute left-1/2 top-1/2 h-0.5 bg-magenta/50 -translate-y-1/2"
                  initial={{ width: 0, x: '-50%' }}
                  animate={isInView ? { width: '80%', x: '-50%' } : {}}
                  transition={{ delay: 0.2 * index + 0.8, duration: 0.3 }}
                  style={{ maxWidth: '300px' }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
