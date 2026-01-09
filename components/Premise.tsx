export default function Premise() {
  return (
    <section className="py-24 md:py-32 px-6 bg-burgundy text-cream">
      <div className="max-w-[600px] mx-auto text-center">
        {/* Main heading */}
        <h2 className="font-display text-[clamp(1.8rem,5vw,2.5rem)] font-normal leading-[1.4] mb-6">
          You&apos;ll know if they&apos;re funny before you know if they&apos;re hot.
        </h2>

        {/* Follow-up line */}
        <p className="font-display text-[clamp(1.2rem,3vw,1.5rem)] italic text-gold mb-10">
          Honestly? That might be better.
        </p>

        {/* Explainer paragraph */}
        <p className="font-body text-[1.05rem] opacity-85 leading-relaxed mb-12">
          We&apos;re matching two strangers to write letters for ten days. Then we&apos;re filming what happens when they finally meet.
        </p>

        {/* Gold divider */}
        <div className="w-[60px] h-px bg-gold mx-auto opacity-50" />
      </div>
    </section>
  )
}
