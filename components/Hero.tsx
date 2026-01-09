'use client'

import { motion } from 'framer-motion'
import Countdown from './Countdown'

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop')`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-warm-black/80 via-warm-black/60 to-warm-black/90" />
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.5)' }} />

      {/* Content - Left aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Main title */}
            <h1 className="font-display italic text-5xl md:text-7xl lg:text-8xl text-cream mb-6">
              Snail Mate
            </h1>

            {/* Decorative line */}
            <div className="w-16 h-px bg-gold mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tagline - Each line on its own */}
            <div className="space-y-1 mb-10">
              <p className="font-body text-xl md:text-2xl text-dusty-rose">Two strangers.</p>
              <p className="font-body text-xl md:text-2xl text-dusty-rose">Ten days.</p>
              <p className="font-body text-xl md:text-2xl text-dusty-rose">Only letters.</p>
              <p className="font-body text-xl md:text-2xl text-dusty-rose">One date.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Countdown */}
            <div className="mb-10">
              <p className="font-ui text-xs uppercase tracking-widest text-cream/50 mb-4">
                Valentine&apos;s Day 2026
              </p>
              <Countdown />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* CTA Button */}
            <a
              href="#apply"
              className="btn-primary inline-block"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-ui text-xs uppercase tracking-widest text-cream/40">Scroll</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-cream/40"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
