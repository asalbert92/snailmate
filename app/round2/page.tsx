'use client'

import { useState } from 'react'
import { submitToSheet } from '@/lib/submitToSheet'

interface FormSection {
  title: string
  questions: {
    id: string
    question: string
    type: 'textarea' | 'radio'
    options?: string[]
    required: boolean
  }[]
}

const sections: FormSection[] = [
  {
    title: 'About You',
    questions: [
      { id: 'friendDescribe', question: 'How would your closest friend describe you?', type: 'textarea', required: true },
      { id: 'exDescribe', question: 'How would an ex describe you? Be honest.', type: 'textarea', required: true },
      { id: 'weirdlyProud', question: "What's something you're weirdly proud of?", type: 'textarea', required: true },
      { id: 'workingOn', question: "What's something you're working on about yourself?", type: 'textarea', required: true },
      { id: 'alone', question: "What do you do when you're alone and no one's watching?", type: 'textarea', required: true },
      { id: 'hill', question: "What's a hill you'll die on?", type: 'textarea', required: true },
      { id: 'laugh', question: 'What makes you laugh hardest?', type: 'textarea', required: true },
    ]
  },
  {
    title: 'How You Connect',
    questions: [
      { id: 'showCare', question: 'How do you show someone you care about them?', type: 'textarea', required: true },
      { id: 'receiveAffection', question: 'How do you like to receive affection?', type: 'textarea', required: true },
      { id: 'sayOrShow', question: 'Are you more likely to say how you feel or show how you feel?', type: 'radio', options: ['Say', 'Show', 'Both equally'], required: true },
      { id: 'openUp', question: 'Do you open up quickly or does it take time?', type: 'radio', options: ['Quickly', 'Takes time', 'Depends'], required: true },
      { id: 'feelSeen', question: 'What makes you feel seen in a relationship?', type: 'textarea', required: true },
      { id: 'conflict', question: 'How do you handle conflict?', type: 'textarea', required: true },
    ]
  },
  {
    title: "What You're Looking For",
    questions: [
      { id: 'needQuality', question: "What's one quality you need in a partner?", type: 'textarea', required: true },
      { id: 'instantNo', question: "What's one thing that's an instant no?", type: 'textarea', required: true },
      { id: 'similar', question: 'Do you want someone similar to you or someone who balances you out?', type: 'radio', options: ['Similar', 'Balances', 'No preference'], required: true },
      { id: 'goodRelationship', question: 'What does a good relationship look like to you?', type: 'textarea', required: true },
    ]
  },
  {
    title: 'The Deeper Stuff',
    questions: [
      { id: 'want', question: "What's something you want but rarely say out loud?", type: 'textarea', required: true },
      { id: 'scares', question: 'What scares you about relationships?', type: 'textarea', required: true },
      { id: 'excites', question: 'What excites you about relationships?', type: 'textarea', required: true },
      { id: 'learned', question: 'What have you learned from past relationships?', type: 'textarea', required: true },
    ]
  }
]

export default function Round2() {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)

  const handleChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const result = await submitToSheet('Round2', formData)

    if (result.success) {
      setIsSubmitted(true)
    } else {
      alert('Something went wrong. Please try again.')
    }

    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 bg-ink">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-8">💌</div>
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-cream">Received.</h2>
          <p className="text-cream/70">
            We&apos;ll reach out soon if you&apos;re moving to the final round.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen py-20 px-6 bg-ink">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-script text-5xl md:text-6xl text-dusty-rose mb-4">Round 2</h1>
          <p className="font-display text-xl text-cream/90 mb-2">
            You made the first cut. Now we need to know you better.
          </p>
          <p className="text-cream/50 text-sm">
            This takes about 10-15 minutes. Be honest.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSection ? 'bg-gold' : 'bg-cream/20'
              }`}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <h2 className="font-display text-2xl text-gold mb-6">
              {sections[currentSection].title}
            </h2>

            <div className="space-y-6">
              {sections[currentSection].questions.map((q) => (
                <div key={q.id}>
                  <label className="block text-xs uppercase tracking-[0.1em] text-dusty-rose mb-3">
                    {q.question} {q.required && '*'}
                  </label>

                  {q.type === 'textarea' ? (
                    <textarea
                      value={formData[q.id] || ''}
                      onChange={(e) => handleChange(q.id, e.target.value)}
                      className="w-full p-4 bg-cream/5 rounded text-cream placeholder-cream/30 border border-cream/10 focus:border-gold focus:outline-none transition-colors resize-none h-24"
                      required={q.required}
                    />
                  ) : (
                    <div className="flex flex-wrap gap-4">
                      {q.options?.map((option) => (
                        <label key={option} className="flex items-center gap-2 cursor-pointer group">
                          <input
                            type="radio"
                            name={q.id}
                            value={option}
                            checked={formData[q.id] === option}
                            onChange={(e) => handleChange(q.id, e.target.value)}
                            className="w-4 h-4 accent-gold"
                            required={q.required}
                          />
                          <span className="text-cream/80 group-hover:text-cream transition-colors">{option}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => setCurrentSection(prev => prev - 1)}
              disabled={currentSection === 0}
              className="px-6 py-3 border border-cream/20 text-cream text-sm uppercase tracking-[0.1em] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-cream/5 transition-colors"
            >
              Back
            </button>

            {currentSection < sections.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentSection(prev => prev + 1)}
                className="px-6 py-3 bg-cream text-burgundy text-sm uppercase tracking-[0.1em] hover:bg-gold hover:text-ink transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-cream text-burgundy text-sm uppercase tracking-[0.1em] hover:bg-gold hover:text-ink transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Round 2'}
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  )
}
