export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 relative bg-gradient-to-b from-cream to-cream-dark">
      {/* Top decorative line */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-20 bg-burgundy opacity-30" />

      {/* Overline */}
      <span className="font-body text-xs tracking-[0.2em] uppercase text-burgundy mb-10 animate-fade-up-delay-1">
        A Valentine&apos;s Day Experiment
      </span>

      {/* Headline */}
      <h1 className="font-display text-[clamp(2.5rem,8vw,4.5rem)] font-normal leading-[1.1] text-ink mb-8 animate-fade-up-delay-2">
        What if you couldn&apos;t <em className="italic text-burgundy">swipe?</em>
      </h1>

      {/* Tagline */}
      <p className="font-display text-[clamp(1.1rem,3vw,1.35rem)] font-normal text-ink-light max-w-[480px] mx-auto mb-12 leading-[1.7] animate-fade-up-delay-3">
        Two strangers in NYC. Ten days of handwritten letters.
        No texting. No social media. No seeing each other.
        <br /><br />
        Then they meet—on Valentine&apos;s Day.
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
