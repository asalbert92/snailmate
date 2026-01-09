'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { submitToSheet } from '@/lib/submitToSheet'

interface FormDataFields {
  name: string
  age: string
  pronouns: string
  email: string
  phone: string
  occupation: string
  interest: string
  available: string
  instagram: string
  [key: string]: string
}

export default function ApplicationForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<FormDataFields>>({})

  const [formData, setFormData] = useState<FormDataFields>({
    name: '',
    age: '',
    pronouns: '',
    email: '',
    phone: '',
    occupation: '',
    interest: '',
    available: '',
    instagram: ''
  })

  const validateForm = (): boolean => {
    const newErrors: Partial<FormDataFields> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.age || parseInt(formData.age) < 21 || parseInt(formData.age) > 45) {
      newErrors.age = 'Age must be between 21-45'
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Valid email is required'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.occupation.trim()) newErrors.occupation = 'Occupation is required'
    if (!formData.interest.trim()) newErrors.interest = 'Please tell us why'
    if (!formData.available) newErrors.available = 'Please select availability'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Submit to Google Sheets
    const result = await submitToSheet('Round1', formData)

    if (result.success) {
      setIsSubmitted(true)
    } else {
      alert('Something went wrong. Please try again.')
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormDataFields]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <section id="apply" className="py-32 md:py-40 bg-cream" ref={ref}>
        <motion.div
          className="max-w-md mx-auto text-center px-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.div
            animate={{
              y: [-10, -100, -200],
              opacity: [1, 1, 0],
              rotate: [0, -10, 10]
            }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="text-6xl mb-8"
          >
            ✉️
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-burgundy">Got it.</h2>
          <p className="font-body text-warm-black/70">
            We&apos;ll be in touch within 48 hours if you&apos;re moving forward.
          </p>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="apply" className="py-32 md:py-40 bg-cream" ref={ref}>
      <div className="max-w-2xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 text-warm-black">
            Think you could do it?
          </h2>
          <p className="font-body text-lg text-warm-black/60">
            We&apos;re selecting two people for our first experiment.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Name */}
            <div className="input-underline">
              <label className="block font-ui text-xs uppercase tracking-widest text-dusty-rose mb-3">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-warm-black/20 pb-2 text-warm-black font-body text-lg focus:outline-none focus:border-burgundy transition-colors placeholder-warm-black/30"
                placeholder="Your name"
              />
              {errors.name && <p className="text-burgundy text-sm mt-2">{errors.name}</p>}
            </div>

            {/* Age */}
            <div className="input-underline">
              <label className="block font-ui text-xs uppercase tracking-widest text-dusty-rose mb-3">
                Age *
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-warm-black/20 pb-2 text-warm-black font-body text-lg focus:outline-none focus:border-burgundy transition-colors placeholder-warm-black/30"
                placeholder="21-45"
                min="21"
                max="45"
              />
              {errors.age && <p className="text-burgundy text-sm mt-2">{errors.age}</p>}
            </div>
          </div>

          {/* Pronouns */}
          <div className="input-underline">
            <label className="block font-ui text-xs uppercase tracking-widest text-dusty-rose mb-3">
              Pronouns
            </label>
            <input
              type="text"
              name="pronouns"
              value={formData.pronouns}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-warm-black/20 pb-2 text-warm-black font-body text-lg focus:outline-none focus:border-burgundy transition-colors placeholder-warm-black/30"
              placeholder="e.g., she/her, he/him, they/them"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Email */}
            <div className="input-underline">
              <label className="block font-ui text-xs uppercase tracking-widest text-dusty-rose mb-3">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-warm-black/20 pb-2 text-warm-black font-body text-lg focus:outline-none focus:border-burgundy transition-colors placeholder-warm-black/30"
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-burgundy text-sm mt-2">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="input-underline">
              <label className="block font-ui text-xs uppercase tracking-widest text-dusty-rose mb-3">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-warm-black/20 pb-2 text-warm-black font-body text-lg focus:outline-none focus:border-burgundy transition-colors placeholder-warm-black/30"
                placeholder="(555) 555-5555"
              />
              {errors.phone && <p className="text-burgundy text-sm mt-2">{errors.phone}</p>}
            </div>
          </div>

          {/* Occupation */}
          <div className="input-underline">
            <label className="block font-ui text-xs uppercase tracking-widest text-dusty-rose mb-3">
              What do you do? *
            </label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-warm-black/20 pb-2 text-warm-black font-body text-lg focus:outline-none focus:border-burgundy transition-colors placeholder-warm-black/30"
              placeholder="Your job, passion, or how you spend your days"
            />
            {errors.occupation && <p className="text-burgundy text-sm mt-2">{errors.occupation}</p>}
          </div>

          {/* Interest */}
          <div className="input-underline">
            <label className="block font-ui text-xs uppercase tracking-widest text-dusty-rose mb-3">
              Why does this interest you? *
            </label>
            <textarea
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-warm-black/20 pb-2 text-warm-black font-body text-lg focus:outline-none focus:border-burgundy transition-colors placeholder-warm-black/30 resize-none h-32"
              placeholder="Be honest. We're looking for genuine people."
              maxLength={500}
            />
            <div className="flex justify-between mt-2">
              {errors.interest && <p className="text-burgundy text-sm">{errors.interest}</p>}
              <p className="text-right text-sm text-dusty-rose ml-auto">
                {formData.interest.length}/500
              </p>
            </div>
          </div>

          {/* Availability */}
          <div>
            <label className="block font-ui text-xs uppercase tracking-widest text-dusty-rose mb-4">
              Are you available for filming Feb 10-14, 2026? *
            </label>
            <div className="flex gap-8">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="available"
                  value="yes"
                  checked={formData.available === 'yes'}
                  onChange={handleChange}
                  className="w-5 h-5 accent-burgundy"
                />
                <span className="font-body text-warm-black group-hover:text-burgundy transition-colors">Yes</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="available"
                  value="no"
                  checked={formData.available === 'no'}
                  onChange={handleChange}
                  className="w-5 h-5 accent-burgundy"
                />
                <span className="font-body text-warm-black group-hover:text-burgundy transition-colors">No</span>
              </label>
            </div>
            {errors.available && <p className="text-burgundy text-sm mt-2">{errors.available}</p>}
          </div>

          {/* Instagram */}
          <div className="input-underline">
            <label className="block font-ui text-xs uppercase tracking-widest text-dusty-rose mb-3">
              Instagram handle (optional)
            </label>
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-warm-black/20 pb-2 text-warm-black font-body text-lg focus:outline-none focus:border-burgundy transition-colors placeholder-warm-black/30"
              placeholder="@yourusername"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-8">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    ✉️
                  </motion.span>
                  Sending...
                </span>
              ) : (
                'Send It'
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
