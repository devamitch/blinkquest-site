import Link from 'next/link'
import { BatteryCharging, Eye, ScanFace, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Eye,
    title: 'Games played with your eyes',
    body: 'Orb Pop, Slider Chase, Orbit Follow and Direction Trail are steered by where you look. A five-second eye check sets your range first, and turning your head instead of your eyes doesn’t score.',
    wide: true,
  },
  {
    icon: ScanFace,
    title: 'Breaks the camera checks',
    body: 'Near / Far, Focus Garden, Focus Point and Blink Bloom only count time while the camera sees you do the step: looking away, eyes closed, real blinks.',
  },
  {
    icon: BatteryCharging,
    title: 'Eye Battery',
    body: 'Starts full each morning. Scans drain it when you hold the phone too close or stop blinking; breaks top it back up.',
  },
  {
    icon: ShieldCheck,
    title: 'Private by design',
    body: 'Face landmarks are found on the phone with Google MediaPipe. Camera frames are never saved or uploaded. Only small summaries like blink counts are stored, and you can delete them any time.',
    wide: true,
  },
]

export function FeatureBento() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--ink)]">
            Built around one habit: look up, blink, move your eyes.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, title, body, wide }) => (
            <div
              key={title}
              className={`rounded-[28px] bg-[var(--surface)] p-7 sm:p-8 ${wide ? 'md:col-span-2' : ''}`}
            >
              <span className="inline-flex w-11 h-11 items-center justify-center rounded-2xl bg-[var(--terracotta-subtle)] text-[var(--terracotta-strong)]">
                <Icon className="w-5 h-5" />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-[var(--ink)]">{title}</h3>
              <p className="mt-3 text-[var(--ink-secondary)] leading-relaxed max-w-xl">{body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-[var(--ink-muted)]">
          BlinkQuest is a wellness app, not a medical device. It doesn’t test your vision or diagnose
          anything. <Link href="/science" className="underline underline-offset-2 hover:text-[var(--ink)]">What the research says</Link>
        </p>
      </div>
    </section>
  )
}
