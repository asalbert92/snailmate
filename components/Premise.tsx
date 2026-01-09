export default function Premise() {
  return (
    <section className="py-24 md:py-32 px-6 bg-burgundy text-cream">
      <div className="max-w-[600px] mx-auto text-center">
        {/* Main heading */}
        <h2 className="font-display text-[clamp(1.8rem,5vw,2.5rem)] font-normal leading-[1.4] mb-10">
          You&apos;ll know their <em className="italic text-gold">handwriting</em> before their face.
        </h2>

        {/* Supporting lines */}
        <div className="flex flex-col gap-4 mb-12">
          <p className="font-display text-[1.15rem] italic opacity-90 leading-relaxed">
            Their words before their voice.
          </p>
          <p className="font-display text-[1.15rem] italic opacity-90 leading-relaxed">
            Their heart before their name.
          </p>
        </div>

        {/* Gold divider */}
        <div className="w-[60px] h-px bg-gold mx-auto opacity-50" />
      </div>
    </section>
  )
}
