import Hero from '@/components/Hero'
import Premise from '@/components/Premise'
import Timeline from '@/components/Timeline'
import Rules from '@/components/Rules'
import TheMatch from '@/components/TheMatch'
import WhoSection from '@/components/WhoSection'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Premise />
      <Timeline />
      <Rules />
      <TheMatch />
      <WhoSection />
      <CTA />
      <Footer />
    </main>
  )
}
