'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const elements = ['💌', '🐌', '💕', '✉️', '💗', '📮', '💘']

interface FloatingElement {
  id: number
  emoji: string
  x: number
  y: number
  duration: number
  delay: number
  size: number
}

export default function FloatingElements() {
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const newElements: FloatingElement[] = []
    for (let i = 0; i < 15; i++) {
      newElements.push({
        id: i,
        emoji: elements[Math.floor(Math.random() * elements.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 5 + Math.random() * 5,
        delay: Math.random() * 3,
        size: 20 + Math.random() * 20
      })
    }
    setFloatingElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingElements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            fontSize: el.size,
            opacity: 0.2
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: 'easeInOut'
          }}
        >
          {el.emoji}
        </motion.div>
      ))}
    </div>
  )
}
