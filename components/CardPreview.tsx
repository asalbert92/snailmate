'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function CardPreview() {
  const [message, setMessage] = useState('')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-pink">
            Write your first card
          </h2>
          <p className="text-lg text-white/70">
            What would you say to a stranger?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Input area */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value.slice(0, 300))}
              placeholder="Dear stranger..."
              className="w-full h-64 p-6 bg-white/10 backdrop-blur-sm rounded-lg text-white placeholder-white/50 resize-none border border-white/20 focus:border-lime transition-colors"
            />
            <p className="text-right text-sm text-white/50 mt-2">
              {message.length}/300
            </p>
          </motion.div>

          {/* Card preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <motion.div
              className="card-paper p-8 min-h-[300px] relative overflow-hidden"
              whileHover={{ rotate: 2, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Card lines */}
              <div className="absolute inset-x-8 top-20 bottom-8 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="border-b border-purple/10 h-8"
                  />
                ))}
              </div>

              {/* Handwritten text */}
              <p className="font-script text-2xl text-purple relative z-10 leading-relaxed whitespace-pre-wrap">
                {message || 'Dear stranger...'}
              </p>

              {/* Decorative stamp */}
              <div className="absolute top-4 right-4 w-12 h-14 border-2 border-dashed border-purple/30 rounded flex items-center justify-center">
                <span className="text-2xl">💌</span>
              </div>
            </motion.div>

            {/* Shadow card behind */}
            <div className="absolute inset-0 card-paper -z-10 transform rotate-3 translate-x-2 translate-y-2 opacity-50" />
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-white/60 mb-4">
            This could be real. {' '}
            <a href="#apply" className="text-lime hover:underline">
              Apply now.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
