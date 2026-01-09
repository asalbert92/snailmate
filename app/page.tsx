import Hero from '@/components/Hero'
import Premise from '@/components/Premise'
import Timeline from '@/components/Timeline'
import Rules from '@/components/Rules'
import TheMatch from '@/components/TheMatch'
import WhoSection from '@/components/WhoSection'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import StickyHeader from '@/components/StickyHeader'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <StickyHeader />
      <main>
        <Hero />
        <ScrollReveal>
          <Premise />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Timeline />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Rules />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <TheMatch />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <WhoSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <CTA />
        </ScrollReveal>
        <Footer />
      </main>
    </>
  )
}
