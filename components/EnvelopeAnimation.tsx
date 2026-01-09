'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface EnvelopeAnimationProps {
  onComplete: () => void
}

export default function EnvelopeAnimation({ onComplete }: EnvelopeAnimationProps) {
  const [phase, setPhase] = useState<'closed' | 'opening' | 'card' | 'done'>('closed')

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('opening'), 500)
    const timer2 = setTimeout(() => setPhase('card'), 1000)
    const timer3 = setTimeout(() => setPhase('done'), 2500)
    const timer4 = setTimeout(() => onComplete(), 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete])

  const handleSkip = () => {
    setPhase('done')
    setTimeout(onComplete, 100)
  }

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-warm-black cursor-pointer"
          onClick={handleSkip}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Film grain overlay */}
          <div className="absolute inset-0 film-grain opacity-20" />

          {/* Envelope container */}
          <div className="relative w-80 h-56 md:w-96 md:h-64">
            {/* Envelope back */}
            <motion.div
              className="absolute inset-0 bg-cream rounded shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            />

            {/* Card sliding out */}
            <AnimatePresence>
              {(phase === 'card' || phase === 'opening') && (
                <motion.div
                  className="absolute inset-x-4 bg-white rounded shadow-lg flex items-center justify-center"
                  initial={{ top: '50%', height: '80%', y: '-50%' }}
                  animate={{
                    top: phase === 'card' ? '-30%' : '50%',
                    y: phase === 'card' ? '0%' : '-50%'
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <motion.h1
                    className="font-script text-4xl md:text-5xl text-burgundy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Snail Mate
                  </motion.h1>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Envelope front bottom */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1/2 bg-dusty-rose rounded-b"
              style={{
                clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)',
              }}
            />

            {/* Envelope flap */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1/2 bg-burgundy origin-top"
              style={{
                clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
              }}
              initial={{ rotateX: 0 }}
              animate={{
                rotateX: phase === 'opening' || phase === 'card' ? 180 : 0
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>

          {/* Skip hint */}
          <motion.p
            className="absolute bottom-8 font-ui text-xs uppercase tracking-widest text-cream/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Click anywhere to skip
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
