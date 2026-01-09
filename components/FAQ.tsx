'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'

const faqs = [
  {
    question: 'Is this real?',
    answer: 'Yes. Two real people. Real cards. Real date. We\'re filming a short documentary.'
  },
  {
    question: 'Do I have to be on camera?',
    answer: 'Yes. That\'s part of the deal. We\'ll capture you writing, receiving, reacting, and the date itself.'
  },
  {
    question: 'What if we don\'t click?',
    answer: 'That\'s part of the experiment. Not every connection works. We\'ll capture whatever happens honestly.'
  },
  {
    question: 'Where do we meet on Valentine\'s Day?',
    answer: 'Somewhere in NYC. We\'ll share details with the selected participants.'
  },
  {
    question: 'Who\'s behind this?',
    answer: 'Escargot — we make greeting cards for people who actually have something to say.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="font-display text-4xl md:text-5xl text-center mb-12 text-pink"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          FAQ
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
              className="border border-white/20 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="font-display text-lg">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  className="text-lime text-2xl"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-4 pb-4 text-white/70">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
