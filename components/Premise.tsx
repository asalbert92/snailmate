'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Premise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-32 md:py-40 bg-cream relative overflow-hidden">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)'/%3E%3C/svg%3E")`
      }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left side - Decorative envelope image */}
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div
                className="aspect-[4/3] bg-cover bg-center rounded-sm shadow-2xl"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=60')`,
                  backgroundColor: '#D4C4A8'
                }}
              >
                {/* Envelope illustration overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-32 bg-envelope-tan rounded-sm shadow-lg transform rotate-3 relative">
                    {/* Envelope flap */}
                    <div
                      className="absolute top-0 left-0 right-0 h-12 bg-cream-dark"
                      style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }}
                    />
                    {/* Wax seal */}
                    <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-burgundy shadow-md flex items-center justify-center">
                      <span className="text-cream text-xs">♥</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Shadow card behind */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-dusty-rose/30 rounded-sm -z-10" />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <div className="order-1 md:order-2 md:text-right">
            <motion.h2
              className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 text-warm-black"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              What if you couldn&apos;t swipe?
            </motion.h2>

            <div className="space-y-4 mb-10">
              <motion.p
                className="text-lg md:text-xl text-warm-black/80"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                No texting. No DMs. No googling.
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-warm-black/80"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Just handwritten cards to a stranger.
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-warm-black/80"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                For 10 days.
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-warm-black/80"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Then you meet. On Valentine&apos;s Day.
              </motion.p>
            </div>

            {/* Decorative star */}
            <motion.div
              className="flex md:justify-end mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="text-gold text-2xl">✦</span>
            </motion.div>

            <motion.p
              className="font-display italic text-3xl md:text-4xl text-gold"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              This is Snail Mate.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
