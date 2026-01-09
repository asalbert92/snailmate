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

  const inputClasses = "w-full p-4 bg-white/10 backdrop-blur-sm rounded-lg text-white placeholder-white/50 border border-white/20 focus:border-lime transition-colors"
  const labelClasses = "block text-sm font-medium text-white/80 mb-2"
  const errorClasses = "text-magenta text-sm mt-1"

  if (isSubmitted) {
    return (
      <section id="apply" className="py-20 px-4 bg-deep-purple/50" ref={ref}>
        <motion.div
          className="max-w-md mx-auto text-center"
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
          <h2 className="font-display text-4xl mb-4 text-pink">Got it.</h2>
          <p className="text-white/70">
            We&apos;ll be in touch within 48 hours if you&apos;re moving forward.
          </p>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="apply" className="py-20 px-4 bg-deep-purple/50" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-pink">
            Think you could do it?
          </h2>
          <p className="text-lg text-white/70">
            We&apos;re selecting two people for our first experiment.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClasses}>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Your name"
              />
              {errors.name && <p className={errorClasses}>{errors.name}</p>}
            </div>

            <div>
              <label className={labelClasses}>Age *</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className={inputClasses}
                placeholder="21-45"
                min="21"
                max="45"
              />
              {errors.age && <p className={errorClasses}>{errors.age}</p>}
            </div>
          </div>

          <div>
            <label className={labelClasses}>Pronouns</label>
            <input
              type="text"
              name="pronouns"
              value={formData.pronouns}
              onChange={handleChange}
              className={inputClasses}
              placeholder="e.g., she/her, he/him, they/them"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClasses}>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="your@email.com"
              />
              {errors.email && <p className={errorClasses}>{errors.email}</p>}
            </div>

            <div>
              <label className={labelClasses}>Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClasses}
                placeholder="(555) 555-5555"
              />
              {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label className={labelClasses}>What do you do? *</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Your job, passion, or how you spend your days"
            />
            {errors.occupation && <p className={errorClasses}>{errors.occupation}</p>}
          </div>

          <div>
            <label className={labelClasses}>Why does this interest you? *</label>
            <textarea
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className={`${inputClasses} h-32 resize-none`}
              placeholder="Be honest. We're looking for genuine people."
              maxLength={500}
            />
            <div className="flex justify-between">
              {errors.interest && <p className={errorClasses}>{errors.interest}</p>}
              <p className="text-right text-sm text-white/50 ml-auto">
                {formData.interest.length}/500
              </p>
            </div>
          </div>

          <div>
            <label className={labelClasses}>Are you available for filming Feb 10-14, 2026? *</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="available"
                  value="yes"
                  checked={formData.available === 'yes'}
                  onChange={handleChange}
                  className="w-4 h-4 accent-lime"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="available"
                  value="no"
                  checked={formData.available === 'no'}
                  onChange={handleChange}
                  className="w-4 h-4 accent-lime"
                />
                <span>No</span>
              </label>
            </div>
            {errors.available && <p className={errorClasses}>{errors.available}</p>}
          </div>

          <div>
            <label className={labelClasses}>Instagram handle (optional)</label>
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className={inputClasses}
              placeholder="@yourusername"
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="btn-lime w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
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
        </motion.form>
      </div>
    </section>
  )
}
