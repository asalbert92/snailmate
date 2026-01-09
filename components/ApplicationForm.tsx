'use client'

import { useState } from 'react'
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
      <div className="min-h-screen flex items-center justify-center px-6 bg-cream">
        <div className="max-w-md text-center">
          <div className="text-6xl mb-8">✉️</div>
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-burgundy">Got it.</h2>
          <p className="text-ink-light">
            We&apos;ll be in touch within 48 hours if you&apos;re moving forward.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-6 bg-cream">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-[clamp(2rem,5vw,3rem)] text-ink mb-4">
            Apply to Snail Mate
          </h1>
          <p className="text-ink-light">
            Takes 2 minutes. We&apos;ll be in touch within a week if you&apos;re selected.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-[0.1em] text-dusty-rose mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-ink/20 pb-2 text-ink focus:border-burgundy transition-colors"
                placeholder="Your name"
              />
              {errors.name && <p className="text-burgundy text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Age */}
            <div>
              <label className="block text-xs uppercase tracking-[0.1em] text-dusty-rose mb-2">
                Age *
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-ink/20 pb-2 text-ink focus:border-burgundy transition-colors"
                placeholder="21-45"
                min="21"
                max="45"
              />
              {errors.age && <p className="text-burgundy text-sm mt-1">{errors.age}</p>}
            </div>
          </div>

          {/* Pronouns */}
          <div>
            <label className="block text-xs uppercase tracking-[0.1em] text-dusty-rose mb-2">
              Pronouns
            </label>
            <input
              type="text"
              name="pronouns"
              value={formData.pronouns}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-ink/20 pb-2 text-ink focus:border-burgundy transition-colors"
              placeholder="e.g., she/her, he/him, they/them"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-[0.1em] text-dusty-rose mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-ink/20 pb-2 text-ink focus:border-burgundy transition-colors"
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-burgundy text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs uppercase tracking-[0.1em] text-dusty-rose mb-2">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-ink/20 pb-2 text-ink focus:border-burgundy transition-colors"
                placeholder="(555) 555-5555"
              />
              {errors.phone && <p className="text-burgundy text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Occupation */}
          <div>
            <label className="block text-xs uppercase tracking-[0.1em] text-dusty-rose mb-2">
              What do you do? *
            </label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-ink/20 pb-2 text-ink focus:border-burgundy transition-colors"
              placeholder="Your job, passion, or how you spend your days"
            />
            {errors.occupation && <p className="text-burgundy text-sm mt-1">{errors.occupation}</p>}
          </div>

          {/* Interest */}
          <div>
            <label className="block text-xs uppercase tracking-[0.1em] text-dusty-rose mb-2">
              Why does this interest you? *
            </label>
            <textarea
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-ink/20 pb-2 text-ink focus:border-burgundy transition-colors resize-none h-28"
              placeholder="Be honest. We're looking for genuine people."
              maxLength={500}
            />
            <div className="flex justify-between mt-1">
              {errors.interest && <p className="text-burgundy text-sm">{errors.interest}</p>}
              <p className="text-sm text-dusty-rose ml-auto">
                {formData.interest.length}/500
              </p>
            </div>
          </div>

          {/* Availability */}
          <div>
            <label className="block text-xs uppercase tracking-[0.1em] text-dusty-rose mb-3">
              Are you available for filming Feb 10-14, 2026? *
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="available"
                  value="yes"
                  checked={formData.available === 'yes'}
                  onChange={handleChange}
                  className="w-4 h-4 accent-burgundy"
                />
                <span className="text-ink">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="available"
                  value="no"
                  checked={formData.available === 'no'}
                  onChange={handleChange}
                  className="w-4 h-4 accent-burgundy"
                />
                <span className="text-ink">No</span>
              </label>
            </div>
            {errors.available && <p className="text-burgundy text-sm mt-1">{errors.available}</p>}
          </div>

          {/* Instagram */}
          <div>
            <label className="block text-xs uppercase tracking-[0.1em] text-dusty-rose mb-2">
              Instagram handle (optional)
            </label>
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-ink/20 pb-2 text-ink focus:border-burgundy transition-colors"
              placeholder="@yourusername"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-8 bg-burgundy text-cream font-body text-sm uppercase tracking-[0.1em] hover:bg-burgundy-deep transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
