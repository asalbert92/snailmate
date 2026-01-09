import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Snail Mate | Two strangers. Ten days. Only letters. One date.',
  description: 'A Valentine\'s Day experiment: Two strangers communicate only through handwritten cards for 10 days before meeting on Valentine\'s Day.',
  keywords: ['valentine', 'dating', 'letters', 'romance', 'experiment', 'NYC'],
  openGraph: {
    title: 'Snail Mate',
    description: 'Two strangers. Ten days. Only letters. One date.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
