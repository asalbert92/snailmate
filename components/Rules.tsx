const rules = [
  'No texting',
  'No calling',
  'No social media',
  'No googling each other',
]

export default function Rules() {
  return (
    <section className="py-24 md:py-36 px-6 bg-ink text-cream text-center">
      {/* Title */}
      <h2 className="font-display text-[clamp(1.4rem,4vw,1.8rem)] font-normal tracking-[0.05em] mb-12 text-cream/70">
        The rules are simple.
      </h2>

      {/* Rules list with strikethrough - grid on desktop */}
      <div className="flex flex-col md:grid md:grid-cols-2 items-center justify-center gap-5 md:gap-x-12 md:gap-y-6 mb-12 max-w-xl mx-auto">
        {rules.map((rule, index) => (
          <span
            key={index}
            className="font-display text-[clamp(1.5rem,5vw,2.2rem)] font-normal line-through decoration-postal-red decoration-2 text-cream/80"
          >
            {rule}
          </span>
        ))}
      </div>

      {/* Final line */}
      <p className="font-display text-[clamp(1.3rem,4vw,1.6rem)] italic text-gold mt-4">
        For ten days, letters are all you get.
      </p>
    </section>
  )
}
