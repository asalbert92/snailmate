'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import FloatingElements from '@/components/FloatingElements'
import { submitToSheet } from '@/lib/submitToSheet'

export default function Round3() {
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [videoLink, setVideoLink] = useState('')
  const [card1, setCard1] = useState('')
  const [card2, setCard2] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file size (100MB)
      if (file.size > 100 * 1024 * 1024) {
        alert('File size must be under 100MB')
        return
      }
      setVideoFile(file)
      setVideoLink('') // Clear link if file is selected
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!videoFile && !videoLink) {
      alert('Please upload a video or provide a link')
      return
    }

    if (!card1.trim() || !card2.trim()) {
      alert('Please complete both card writing samples')
      return
    }

    setIsSubmitting(true)

    // Submit to Google Sheets
    // Note: Video files can't be sent to sheets directly, only the link/filename
    const result = await submitToSheet('Round3', {
      videoLink: videoLink || `[File Upload: ${videoFile?.name}]`,
      card1,
      card2
    })

    if (result.success) {
      setIsSubmitted(true)
    } else {
      alert('Something went wrong. Please try again.')
    }

    setIsSubmitting(false)
  }

  const inputClasses = "w-full p-4 bg-white/10 backdrop-blur-sm rounded-lg text-white placeholder-white/50 border border-white/20 focus:border-lime transition-colors"
  const labelClasses = "block text-sm font-medium text-white/80 mb-2"

  if (isSubmitted) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <FloatingElements />
        <motion.div
          className="text-center max-w-md relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.div
            className="text-6xl mb-8"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            🐌
          </motion.div>
          <h2 className="font-display text-4xl mb-4 text-pink">Done.</h2>
          <p className="text-white/70">
            We&apos;ll be making our decision within the next few days. Thank you for putting yourself out there.
          </p>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen py-20 px-4 relative">
      <FloatingElements />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-script text-5xl md:text-6xl text-pink mb-4">Final Round</h1>
          <p className="font-display text-xl text-white/90">
            Two things left: show us who you are, and show us how you write.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Part 1: Video Submission */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-display text-2xl text-lime mb-6">Part 1: Video Submission</h2>

            <div className="bg-white/5 p-6 rounded-lg mb-6">
              <p className="text-white/80 mb-4">
                Record a 60-90 second video. Pick one prompt:
              </p>
              <div className="space-y-4">
                <div className="p-4 border border-white/20 rounded-lg">
                  <span className="text-magenta font-bold">Option A:</span>
                  <p className="text-white/70 mt-1">
                    &quot;Tell us about yourself like you&apos;re talking to someone at a party you actually want to be at.&quot;
                  </p>
                </div>
                <div className="p-4 border border-white/20 rounded-lg">
                  <span className="text-magenta font-bold">Option B:</span>
                  <p className="text-white/70 mt-1">
                    &quot;Tell us about the last time you felt really connected to someone.&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* File upload */}
              <div>
                <label className={labelClasses}>Upload video (MP4, MOV - max 100MB)</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/mp4,video/quicktime,video/mov"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className={`${inputClasses} text-left flex items-center gap-3 cursor-pointer hover:border-lime/50`}
                >
                  <span className="text-2xl">📹</span>
                  {videoFile ? (
                    <span className="text-lime">{videoFile.name}</span>
                  ) : (
                    <span className="text-white/50">Click to upload video...</span>
                  )}
                </button>
              </div>

              <p className="text-center text-white/50">— or —</p>

              {/* Link input */}
              <div>
                <label className={labelClasses}>Paste a link (Google Drive, Dropbox, etc.)</label>
                <input
                  type="url"
                  value={videoLink}
                  onChange={(e) => {
                    setVideoLink(e.target.value)
                    if (e.target.value) setVideoFile(null) // Clear file if link is entered
                  }}
                  className={inputClasses}
                  placeholder="https://..."
                />
              </div>
            </div>
          </motion.section>

          {/* Part 2: Writing Samples */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="font-display text-2xl text-lime mb-6">Part 2: Writing Samples</h2>

            <div className="space-y-8">
              {/* Card 1 */}
              <div>
                <label className={labelClasses}>
                  Card 1: Write a card to a stranger you&apos;ve never met. You know nothing about them. What do you say? *
                </label>
                <div className="relative">
                  <textarea
                    value={card1}
                    onChange={(e) => setCard1(e.target.value.slice(0, 500))}
                    className={`${inputClasses} h-40 resize-none`}
                    placeholder="Dear stranger..."
                    required
                  />
                  <p className="absolute bottom-2 right-3 text-white/30 text-sm">
                    {card1.length}/500
                  </p>
                </div>

                {/* Preview */}
                {card1 && (
                  <motion.div
                    className="mt-4 card-paper p-6 transform rotate-1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <p className="font-script text-lg text-purple whitespace-pre-wrap">
                      {card1}
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Card 2 */}
              <div>
                <label className={labelClasses}>
                  Card 2: Now write a second card to the same stranger. This time, be more vulnerable than feels comfortable. *
                </label>
                <div className="relative">
                  <textarea
                    value={card2}
                    onChange={(e) => setCard2(e.target.value.slice(0, 500))}
                    className={`${inputClasses} h-40 resize-none`}
                    placeholder="Dear stranger..."
                    required
                  />
                  <p className="absolute bottom-2 right-3 text-white/30 text-sm">
                    {card2.length}/500
                  </p>
                </div>

                {/* Preview */}
                {card2 && (
                  <motion.div
                    className="mt-4 card-paper p-6 transform -rotate-1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <p className="font-script text-lg text-purple whitespace-pre-wrap">
                      {card2}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.section>

          {/* Submit */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="btn-lime text-lg px-12 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    🐌
                  </motion.span>
                  Submitting...
                </span>
              ) : (
                'Submit Final Round'
              )}
            </motion.button>
          </motion.div>
        </form>
      </div>
    </main>
  )
}
