import { Eye, Shield, Zap, RefreshCw, Lock } from 'lucide-react'

const comparisons = [
  {
    dimension: 'Ocular Tracking Tech',
    traditional: 'Static timer popups that interrupt without checking your eyes.',
    blinkquest: 'MediaPipe 478 face mesh landmark tracking with real-time pupil vectors.',
    icon: Eye,
  },
  {
    dimension: 'Privacy & Security',
    traditional: 'Camera feeds uploaded to cloud servers or background tracking SDKs.',
    blinkquest: '100% ephemeral in-RAM processing. Zero frames stored or transmitted.',
    icon: Shield,
  },
  {
    dimension: 'Fatigue Model',
    traditional: 'Arbitrary countdowns that ignore whether you were actually staring.',
    blinkquest: 'Dynamic Eye Battery: drains when staring, recharges with verified breaks.',
    icon: Zap,
  },
  {
    dimension: 'Break Compliance',
    traditional: 'Easily clicked away and dismissed while keeping eyes on the monitor.',
    blinkquest: 'Camera verification ensures true distance gaze and complete blinks.',
    icon: RefreshCw,
  },
  {
    dimension: 'Identity & Data',
    traditional: 'Mandatory email harvesting and proprietary account lock-in.',
    blinkquest: 'Decentralized Setu SSO federation or local-only guest storage.',
    icon: Lock,
  },
]

export function ComparisonSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--terracotta-strong)]">
            Philosophy
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
            Why traditional eye reminders fail.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
            Most vision timers are uninstalled within 48 hours because passive popups interrupt flow without solving the root cause of blink suppression.
          </p>
        </div>

        {/* Minimalist Editorial Comparison Table */}
        <div className="mt-14 rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 p-6 bg-[var(--surface2)]/60 border-b border-[var(--border)] text-xs font-bold uppercase tracking-wider text-[var(--ink-muted)]">
            <div className="md:col-span-4">Principle</div>
            <div className="hidden md:block md:col-span-4">Conventional Reminder Apps</div>
            <div className="md:col-span-4 text-[var(--terracotta-strong)]">BlinkQuest Android Engine</div>
          </div>

          <div className="divide-y divide-[var(--border)]">
            {comparisons.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.dimension}
                  className="grid grid-cols-1 md:grid-cols-12 p-6 items-start gap-4 hover:bg-[var(--surface2)]/20 transition-colors"
                >
                  <div className="md:col-span-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[var(--surface2)] flex items-center justify-center text-[var(--ink-secondary)] shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[var(--ink)]">
                      {c.dimension}
                    </span>
                  </div>

                  <div className="md:col-span-4 text-xs sm:text-sm text-[var(--ink-secondary)]">
                    <span className="md:hidden block text-[11px] font-bold text-[var(--ink-muted)] uppercase mb-1">
                      Generic apps:
                    </span>
                    {c.traditional}
                  </div>

                  <div className="md:col-span-4 text-xs sm:text-sm text-[var(--ink)] font-medium">
                    <span className="md:hidden block text-[11px] font-bold text-[var(--terracotta-strong)] uppercase mb-1">
                      BlinkQuest:
                    </span>
                    {c.blinkquest}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
