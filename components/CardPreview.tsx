'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function CardPreview() {
  const [message, setMessage] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-32 md:py-48 bg-cream" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 text-warm-black">
            Write your first card
          </h2>
          <p className="font-body text-lg md:text-xl text-warm-black/60 italic">
            What would you say to a stranger?
          </p>
        </motion.div>

        {/* Single immersive card */}
        <motion.div
          className="relative max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Shadow card behind */}
          <div className="absolute inset-0 card-paper transform rotate-2 translate-x-3 translate-y-3 opacity-40" />
          <div className="absolute inset-0 card-paper transform -rotate-1 translate-x-1 translate-y-1 opacity-60" />

          {/* Main card */}
          <motion.div
            className={`relative card-paper p-8 md:p-12 min-h-[400px] md:min-h-[500px] transition-all duration-500 ${
              isFocused ? 'shadow-2xl scale-[1.02]' : 'shadow-lg'
            }`}
            animate={isFocused ? { rotate: 0 } : { rotate: -0.5 }}
          >
            {/* Card lines */}
            <div className="absolute inset-x-8 md:inset-x-12 top-24 bottom-8 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="border-b border-burgundy/10 h-10 md:h-12"
                />
              ))}
            </div>

            {/* Decorative stamp area */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8 w-14 h-16 border-2 border-dashed border-dusty-rose/40 rounded flex items-center justify-center">
              <motion.span
                className="text-2xl md:text-3xl opacity-60"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                💌
              </motion.span>
            </div>

            {/* Date line */}
            <div className="mb-8 md:mb-10">
              <span className="font-ui text-xs uppercase tracking-widest text-dusty-rose">
                February 2026
              </span>
            </div>

            {/* Textarea - hidden but functional */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value.slice(0, 400))}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Dear stranger..."
              className="w-full h-64 md:h-80 bg-transparent resize-none font-script text-xl md:text-2xl text-burgundy placeholder-burgundy/40 leading-relaxed focus:outline-none relative z-10"
              style={{ lineHeight: '2.5rem' }}
            />

            {/* Character count */}
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
              <span className="font-ui text-xs text-dusty-rose/60">
                {message.length}/400
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="font-body text-warm-black/60 mb-6 italic">
            This could be real.
          </p>
          <a
            href="#apply"
            className="inline-block font-ui text-sm uppercase tracking-widest text-burgundy border-b-2 border-burgundy pb-1 hover:text-burgundy-dark hover:border-burgundy-dark transition-colors"
          >
            Apply now
          </a>
        </motion.div>
      </div>
    </section>
  )
}
