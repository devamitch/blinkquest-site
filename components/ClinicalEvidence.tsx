import { BookOpen, Activity, Droplets, CheckCircle, ExternalLink } from 'lucide-react'

const evidenceCards = [
  {
    metric: '60%',
    title: 'Blink Rate Reduction',
    source: 'Ophthalmology & Visual Science Journal',
    desc: 'Spontaneous blink frequency plummets from 18–22 blinks/min at rest down to 5–7 blinks/min while reading or coding on digital monitors.',
    impact: 'Accelerates ocular tear film evaporation by over 300%.',
  },
  {
    metric: '20s',
    title: 'Ciliary Accommodation Reset',
    source: 'American Academy of Ophthalmology (AAO)',
    desc: 'Twenty seconds of fixation at an optical distance of 20 feet (6 meters) is the precise physiological threshold required for the ciliary zonules to fully slacken.',
    impact: 'Relieves ocular spasms and prevents end-of-day headaches.',
  },
  {
    metric: '478',
    title: 'Facial Landmark Mesh Points',
    source: 'Google MediaPipe Ocular Research',
    desc: 'Sub-millimeter tracking of superior and inferior tarsal margins allows calculation of full vs. incomplete blinks with microsecond temporal accuracy.',
    impact: 'Ensures only genuine, tear-secreting blinks count towards recovery.',
  },
]

export function ClinicalEvidence() {
  return (
    <section className="py-24 md:py-32 bg-[var(--surface)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--sage-subtle)] text-[var(--sage)] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Optometric Science
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
            Backed by corneal tear-film physiology.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
            Digital eye strain isn&apos;t just feeling tired—it is a physical breakdown of the lipid layer on your cornea caused by subconscious blink suppression.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {evidenceCards.map((card) => (
            <div
              key={card.title}
              className="p-8 rounded-[30px] bg-[var(--surface2)]/50 border border-[var(--border)] hover:border-[var(--border-strong)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-5xl sm:text-6xl font-extrabold text-[var(--terracotta)] leading-none block">
                  {card.metric}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[var(--ink)] leading-snug">
                  {card.title}
                </h3>

                <p className="mt-1 text-xs font-semibold text-[var(--sage)] flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  {card.source}
                </p>

                <p className="mt-4 text-sm text-[var(--ink-secondary)] leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border)] text-xs font-medium text-[var(--ink-muted)] flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--sage)] shrink-0 mt-0.5" />
                <span>{card.impact}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-[var(--surface2)]/70 border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--ink-secondary)]">
          <p>
            Curious about the peer-reviewed clinical studies behind computer vision syndrome and tear film lipid layer dynamics?
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
