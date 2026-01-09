'use client'

import { motion } from 'framer-motion'
import Countdown from './Countdown'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.h1
          className="font-script text-6xl md:text-8xl lg:text-9xl mb-4 text-pink"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Snail Mate
        </motion.h1>

        <motion.p
          className="font-display text-xl md:text-2xl lg:text-3xl mb-8 text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Two strangers. Ten days. Only letters. One date.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm text-white/60 mb-3">Valentine&apos;s Day 2026</p>
          <Countdown />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#apply"
            className="btn-lime inline-block text-lg font-semibold animate-pulse-glow"
          >
            Apply Now
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: { repeat: Infinity, duration: 1.5 }
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-white/50"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
