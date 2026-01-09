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
      <a
        href="https://l0tpc2x5vz2.typeform.com/snailmate"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        Apply Now
      </a>

      {/* Deadline */}
      <p className="mt-8 text-[0.8rem] tracking-[0.1em] uppercase opacity-60">
        Applications close February 1, 2026
      </p>
    </section>
  )
}
