import { BookOpen, Activity, CheckCircle, ExternalLink } from 'lucide-react'

const evidenceCards = [
  {
    metric: '60%',
    title: 'Spontaneous Blink Suppression',
    source: 'Ophthalmology & Visual Science Journal',
    desc: 'Spontaneous blink frequency drops from 18–22 blinks/min at rest down to 5–7 blinks/min while reading or coding on digital displays.',
    impact: 'Accelerates corneal tear film breakup time (TBUT) by over 300%.',
  },
  {
    metric: '20s',
    title: 'Ciliary Accommodation Reset',
    source: 'American Academy of Ophthalmology (AAO)',
    desc: 'Twenty seconds of fixation at an optical distance of 20 feet (6 meters) is the required physiological duration for ciliary zonule tension to slacken.',
    impact: 'Relieves micro-spasms in the lens and prevents end-of-day headaches.',
  },
  {
    metric: '478',
    title: 'Ocular Landmark Coordinates',
    source: 'Google MediaPipe Computer Vision',
    desc: 'Sub-millimeter tracking of superior and inferior tarsal margins allows instantaneous calculation of full vs. incomplete blinks.',
    impact: 'Guarantees that only genuine, lipid-secreting blinks count towards recharge.',
  },
]

export function ClinicalEvidence() {
  return (
    <section className="py-24 md:py-32 bg-[var(--surface2)]/40 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--terracotta-strong)]">
            Physiology
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
            Backed by corneal tear-film physiology.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
            Digital eye fatigue is a mechanical breakdown of the lipid layer protecting your cornea, directly triggered by screen-induced blink suppression.
          </p>
        </div>

        {/* Flat Research Cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {evidenceCards.map((card) => (
            <div
              key={card.title}
              className="p-7 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[var(--terracotta)] leading-none block">
                  {card.metric}
                </span>

                <h3 className="mt-4 text-lg font-bold text-[var(--ink)] leading-snug">
                  {card.title}
                </h3>

                <p className="mt-1 text-xs font-semibold text-[var(--sage)]">
                  {card.source}
                </p>

                <p className="mt-3 text-sm text-[var(--ink-secondary)] leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border)] text-xs text-[var(--ink-muted)] flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[var(--sage)] shrink-0 mt-0.5" />
                <span>{card.impact}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--ink-secondary)]">
          <p>
            Curious about the peer-reviewed clinical studies behind computer vision syndrome and tear film dynamics?
          </p>
          <a
            href="/science"
            className="shrink-0 font-bold text-[var(--terracotta-strong)] hover:underline inline-flex items-center gap-1"
          >
            <span>Read full clinical citations</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
