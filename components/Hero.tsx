export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 relative bg-gradient-to-b from-cream to-cream-dark">
      {/* Top decorative line */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-20 bg-burgundy opacity-30" />

      {/* Headline */}
      <h1 className="font-display text-[clamp(2.5rem,8vw,4.5rem)] font-normal leading-[1.1] text-ink mb-6 animate-fade-up-delay-1">
        Could you fall for someone you&apos;ve never seen?
      </h1>

      {/* Subtitle */}
      <p className="font-display text-[clamp(1.4rem,4vw,1.8rem)] font-normal text-burgundy mb-8 animate-fade-up-delay-2">
        Two strangers. Ten days. Only letters.
      </p>

      {/* Tagline */}
      <p className="font-body text-[clamp(1rem,2.5vw,1.15rem)] text-ink-light max-w-[500px] mx-auto mb-12 leading-[1.7] animate-fade-up-delay-3">
        No texting. No social media. No photos. Then they meet—on Valentine&apos;s Day. On camera.
      </p>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up-delay-4">
        <span className="text-[0.7rem] tracking-[0.15em] uppercase text-burgundy opacity-60">
          The experiment
        </span>
        <div className="w-px h-10 bg-burgundy opacity-40 animate-[scrollPulse_2s_ease-in-out_infinite]" />
      </div>
    </section>
  )
}
