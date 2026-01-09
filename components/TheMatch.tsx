export default function TheMatch() {
  return (
    <section className="py-24 md:py-28 px-6 bg-cream">
      <div className="max-w-[560px] mx-auto text-center">
        {/* Headline */}
        <h2 className="font-display text-[clamp(1.8rem,5vw,2.5rem)] font-normal text-ink mb-8">
          This isn&apos;t random.
        </h2>

        {/* Body copy */}
        <p className="font-body text-[1.05rem] text-ink-light leading-relaxed">
          We&apos;ve partnered with a matchmaker who does this for a living. Because if we&apos;re asking two people to write letters for ten days, the least we can do is make sure they have a shot.
        </p>
      </div>
    </section>
  )
}
