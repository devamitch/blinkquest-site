import Link from 'next/link'
import { Eye, ScanFace, BatteryCharging, ShieldCheck, Gamepad2, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Eye,
    title: 'Gaze-Driven Exercises',
    body: 'Orb Pop, Slider Chase, Orbit Follow and Direction Trail track your exact gaze via 478 face mesh landmarks. A quick calibration maps your screen space, and head turns are filtered out so your eye muscles do the actual work.',
    badge: 'Hardware Accelerated',
    wide: true,
  },
  {
    icon: ScanFace,
    title: 'Camera-Verified Breaks',
    body: 'Near/Far focus, Focus Garden, and Blink Bloom ensure genuine breaks. If you do not look away or blink, the timer pauses until you do.',
    badge: '20-20-20 Rule',
    wide: false,
  },
  {
    icon: BatteryCharging,
    title: 'Dynamic Eye Battery',
    body: 'Starts fully charged at 100% every morning. Prolonged screen stares or inadequate blink rates deplete it; mindful breaks restore it back to green.',
    badge: 'Fatigue Model',
    wide: false,
  },
  {
    icon: ShieldCheck,
    title: '100% Local & Privacy-First',
    body: 'Inference runs fully on-device using Google MediaPipe. Camera frames are processed in memory and immediately discarded. No video or biometric frames ever touch a remote server or cloud bucket.',
    badge: 'Zero Cloud Storage',
    wide: true,
  },
  {
    icon: Gamepad2,
    title: 'Gamified Habit Loops',
    body: 'Earn XP, unlock milestones, maintain streaks, and collect badges while preventing digital eye strain naturally throughout your workday.',
    badge: 'Micro-Habits',
    wide: false,
  },
  {
    icon: Sparkles,
    title: 'Setu Ecosystem Ready',
    body: 'Seamlessly sign in with Google or Setu SSO. Export or federate your progress across your personal devices with zero third-party tracking.',
    badge: 'Federated SSO',
    wide: false,
  },
]

export function FeatureBento() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface2)] text-[var(--ink-secondary)] text-xs font-semibold uppercase tracking-wider border border-[var(--border)]">
            Core Architecture
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--ink)] leading-tight">
            Built around one habit: look up, blink, and move your eyes.
          </h2>
          <p className="mt-4 text-lg text-[var(--ink-secondary)] leading-relaxed">
            Every feature is backed by ergonomic ophthalmology research to reverse screen-induced blink suppression.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, body, badge, wide }) => (
            <div
              key={title}
              className={`group glass-card p-8 sm:p-9 flex flex-col justify-between ${
                wide ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex w-12 h-12 items-center justify-center rounded-2xl bg-[var(--terracotta-subtle)] text-[var(--terracotta-strong)] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--surface2)] text-[var(--ink-secondary)] border border-[var(--border)]">
                    {badge}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl font-bold text-[var(--ink)]">{title}</h3>
                <p className="mt-3 text-[var(--ink-secondary)] leading-relaxed text-sm sm:text-base">
                  {body}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center gap-2 text-xs font-semibold text-[var(--terracotta)]">
                <span>View engineering details</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 rounded-2xl bg-[var(--surface2)]/60 border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--ink-muted)]">
          <p>
            BlinkQuest is a digital wellness application, not a medical diagnostic tool. It does not replace clinical ophthalmic examinations.
          </p>
          <Link
            href="/science"
            className="shrink-0 font-semibold text-[var(--ink)] hover:text-[var(--terracotta)] underline underline-offset-4"
          >
            Review Clinical Citations →
          </Link>
        </div>
      </div>
    </section>
  )
}
