export default function WhoSection() {
  return (
    <section className="py-24 md:py-28 px-6 bg-gradient-to-b from-cream-dark to-cream">
      <div className="max-w-[540px] mx-auto text-center">
        {/* Title */}
        <h2 className="font-display text-[clamp(1.6rem,4vw,2rem)] font-normal text-ink mb-10">
          Who We&apos;re Looking For
        </h2>

        {/* Requirements list */}
        <div className="flex flex-col gap-4 mb-8">
          <p className="font-display text-[1.15rem] text-ink-light leading-relaxed">
            Single. NYC-based. 21–40ish.
          </p>
          <p className="font-display text-[1.15rem] text-ink-light leading-relaxed">
            Willing to be on camera.
          </p>
          <p className="font-display text-[1.15rem] text-ink-light leading-relaxed">
            Brave enough to try something different.
          </p>
        </div>

        {/* Aside */}
        <p className="text-[0.9rem] text-dusty-rose italic mt-6">
          Romantics who&apos;ve been burned by apps welcome.
        </p>
      </div>
    </section>
  )
}
