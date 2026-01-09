const rules = [
  'No texting',
  'No calling',
  'No social media',
  'No googling each other',
]

export default function Rules() {
  return (
    <section className="py-24 md:py-28 px-6 bg-ink text-cream text-center">
      {/* Title */}
      <h2 className="font-display text-[clamp(1.4rem,4vw,1.8rem)] font-normal tracking-[0.05em] mb-12 opacity-70">
        The rules are simple.
      </h2>

      {/* Rules list with strikethrough */}
      <div className="flex flex-col items-center gap-5 mb-12">
        {rules.map((rule, index) => (
          <span
            key={index}
            className="font-display text-[clamp(1.5rem,5vw,2.2rem)] font-normal line-through decoration-postal-red decoration-2 opacity-60"
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
