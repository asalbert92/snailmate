const timelineItems = [
  { marker: '1', title: 'Day One', description: 'You write your first letter to a stranger.' },
  { marker: '2–9', title: 'The Exchange', description: 'Letters go back and forth. You learn them through ink and paper.' },
  { marker: '10', title: 'The Final Letter', description: 'One last message before you meet.' },
  { marker: '♥', title: "Valentine's Day", description: 'You meet for the first time. On camera. For real.', highlight: true },
]

// Envelope SVG icon
const EnvelopeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gold/50 inline-block ml-3"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6L12 13L2 6" />
  </svg>
)

export default function Timeline() {
  return (
    <section className="py-24 md:py-36 px-6 bg-cream">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="font-display text-[clamp(1.6rem,4vw,2rem)] font-normal text-ink inline-flex items-center justify-center">
          How It Works
          <EnvelopeIcon />
        </h2>
      </div>

      {/* Timeline track */}
      <div className="max-w-lg mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-6 top-0 bottom-0 w-px bg-dusty-rose opacity-50" />

        {/* Timeline items */}
        <div className="space-y-10">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item flex gap-8 relative">
              {/* Marker */}
              <div
                className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full relative z-10 ${
                  item.highlight
                    ? 'bg-burgundy border-burgundy heart-pulse'
                    : 'bg-cream border border-dusty-rose'
                }`}
              >
                <span
                  className={`font-script text-[1.1rem] ${
                    item.highlight ? 'text-cream' : 'text-burgundy'
                  }`}
                >
                  {item.marker}
                </span>
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3
                  className={`font-display text-[1.25rem] font-medium mb-1 transition-colors ${
                    item.highlight ? 'text-burgundy' : 'text-ink'
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-[0.95rem] text-ink-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
