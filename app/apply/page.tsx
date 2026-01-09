'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ApplyRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/#apply')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-white/50">Redirecting to application...</p>
    </div>
  )
}
