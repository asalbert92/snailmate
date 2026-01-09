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
    <section className="py-32 md:py-40 bg-warm-black" ref={ref}>
      <div className="max-w-2xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
            Questions
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index + 0.2 }}
              className="border-b border-cream/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 text-left flex justify-between items-center group"
              >
                <span className="font-display text-lg md:text-xl text-cream group-hover:text-gold transition-colors">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  className="text-gold text-2xl flex-shrink-0 ml-4"
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
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 font-body text-cream/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center mt-12 font-body text-sm text-cream/40 italic"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          More questions? Reach out to us at hello@escargot.cards
        </motion.p>
      </div>
    </section>
  )
}
