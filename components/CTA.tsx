import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-28 md:py-32 px-6 bg-burgundy text-cream text-center">
      {/* Title */}
      <h2 className="font-display text-[clamp(2rem,6vw,3rem)] font-normal italic mb-6">
        Think you could do it?
      </h2>

      {/* Subtitle */}
      <div className="text-base opacity-80 mb-10 max-w-[400px] mx-auto">
        <p>Worst case: a good story.</p>
        <p>Best case: we don&apos;t need to say it.</p>
      </div>

      {/* Button */}
      <Link
        href="/apply"
        className="btn-primary"
      >
        Apply Now
      </Link>

      {/* Deadline */}
      <p className="mt-8 text-[0.8rem] tracking-[0.1em] uppercase opacity-60">
        Applications close February 1, 2026
      </p>
    </section>
  )
}
