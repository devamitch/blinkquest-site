import Link from 'next/link'
import { Eye, ScanFace, BatteryCharging, ShieldCheck, Gamepad2, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Eye,
    title: 'Gaze-Driven Exercises',
    body: 'Orb Pop, Slider Chase, Orbit Follow and Direction Trail track your exact gaze using 478 face mesh landmarks. Head turns are filtered out so your extraocular muscles do the genuine physical work.',
    tag: 'Hardware Accelerated',
  },
  {
    icon: ScanFace,
    title: 'Camera-Verified Breaks',
    body: 'Near/Far focus, Focus Garden, and Blink Bloom ensure genuine pauses. If you do not physically shift your gaze twenty feet away or complete full blinks, the timer pauses until you do.',
    tag: '20-20-20 Rule',
  },
  {
    icon: BatteryCharging,
    title: 'Dynamic Eye Battery',
    body: 'Starts fully charged at 100% every morning. Prolonged screen stares or inadequate blink rates deplete it; mindful pauses and gaze games restore it back to green.',
    tag: 'Fatigue Model',
  },
  {
    icon: ShieldCheck,
    title: '100% Ephemeral Local Vision',
    body: 'Machine learning inference runs entirely on-device via Google MediaPipe. Camera frames are processed in memory and immediately discarded. No video or biometric frames ever touch a remote server.',
    tag: 'Zero Cloud Storage',
  },
  {
    icon: Gamepad2,
    title: 'Habit Formation & Streaks',
    body: 'Earn XP, unlock milestones, maintain daily streaks, and collect badges while preventing digital eye fatigue naturally throughout your workday.',
    tag: 'Habit Architecture',
  },
  {
    icon: Sparkles,
    title: 'Setu Ecosystem Ready',
    body: 'Seamlessly sign in with Google or Setu SSO. Export or federate your progress across your personal devices with zero third-party tracking or ad profiling.',
    tag: 'Federated SSO',
  },
]

export function FeatureBento() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--terracotta-strong)]">
            Capabilities
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
            Built around one habit: look up, blink, and move your eyes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
            Every feature is backed by ergonomic ophthalmology research to reverse screen-induced blink suppression.
          </p>
        </div>

        {/* Clean Editorial Feature Grid */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, body, tag }) => (
            <div
              key={title}
              className="p-7 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-lg bg-[var(--surface2)] flex items-center justify-center text-[var(--ink)]">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--surface2)] text-[var(--ink-secondary)]">
                    {tag}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-[var(--ink)]">{title}</h3>
                <p className="mt-2 text-sm text-[var(--ink-secondary)] leading-relaxed">
                  {body}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border)] text-xs text-[var(--terracotta-strong)] font-semibold">
                Explore feature →
              </div>
            </div>
          ))}
        </div>

        {/* Medical Footnote */}
        <div className="mt-10 p-5 rounded-xl bg-[var(--surface2)]/50 border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--ink-muted)]">
          <p>
            BlinkQuest is a digital wellness application, not a medical diagnostic tool. It does not replace clinical ophthalmic examinations.
          </p>
          <Link
            href="/science"
            className="shrink-0 font-semibold text-[var(--ink)] hover:text-[var(--terracotta-strong)] underline underline-offset-4"
          >
            Review Clinical Citations →
          </Link>
        </div>
      </div>
    </section>
  )
}
