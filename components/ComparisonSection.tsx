import { Eye, Shield, Cpu, RefreshCw, Zap, Lock } from 'lucide-react'

const comparisons = [
  {
    feature: 'Ocular Tracking Tech',
    traditional: 'Dumb 20-minute desktop popups',
    blinkquest: 'MediaPipe 478 face landmark mesh with pupil vector tracking',
    icon: Eye,
  },
  {
    feature: 'Privacy & Security',
    traditional: 'Camera feeds sent to cloud or background trackers',
    blinkquest: '100% ephemeral in-RAM processing. Zero frames stored or transmitted',
    icon: Shield,
  },
  {
    feature: 'Fatigue Model',
    traditional: 'Static countdown timers that ignore your blink rate',
    blinkquest: 'Dynamic Eye Battery: drains when staring, recharges with verified breaks',
    icon: Zap,
  },
  {
    feature: 'Break Compliance',
    traditional: 'Users click "Dismiss" without ever looking away',
    blinkquest: 'Camera verification ensures gaze shift and true blinks before completing',
    icon: RefreshCw,
  },
  {
    feature: 'Authentication & Ecosystem',
    traditional: 'Proprietary lock-in with mandatory email harvesting',
    blinkquest: 'Open decentralized federation with Setu SSO or Google',
    icon: Lock,
  },
]

export function ComparisonSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--surface2)]/40 border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface)] text-[var(--terracotta-strong)] text-xs font-bold uppercase tracking-wider border border-[var(--border)] shadow-2xs">
            Architecture Contrast
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)]">
            Why traditional eye reminders fail.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)]">
            Most vision timers are ignored within 48 hours. BlinkQuest replaces passive nagging with genuine computer-vision interaction.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[32px] bg-[var(--surface)] border border-[var(--border-strong)] shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 p-5 sm:p-7 bg-[var(--surface2)]/80 border-b border-[var(--border)] text-xs font-bold uppercase tracking-wider text-[var(--ink-muted)]">
            <div className="hidden md:block">Dimension</div>
            <div className="text-red-700/80 dark:text-red-400">Generic Reminder Apps</div>
            <div className="text-[var(--terracotta-strong)] font-extrabold flex items-center gap-1.5">
              <span>BlinkQuest Android Engine</span>
              <span className="w-2 h-2 rounded-full bg-[var(--sage)] inline-block" />
            </div>
          </div>

          <div className="divide-y divide-[var(--border)]">
            {comparisons.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.feature}
                  className="grid grid-cols-1 md:grid-cols-3 p-5 sm:p-7 items-center gap-4 hover:bg-[var(--surface2)]/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[var(--surface2)] flex items-center justify-center text-[var(--ink)]">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[var(--ink)]">{c.feature}</span>
                  </div>

                  <div className="text-xs sm:text-sm text-[var(--ink-muted)] line-through decoration-red-400/40">
                    <span className="md:hidden font-semibold block text-[11px] text-red-600/70 uppercase">Legacy:</span>
                    {c.traditional}
                  </div>

                  <div className="text-xs sm:text-sm font-semibold text-[var(--ink)] bg-[var(--terracotta-subtle)] p-3 rounded-xl border border-[var(--terracotta)]/20">
                    <span className="md:hidden font-semibold block text-[11px] text-[var(--terracotta-strong)] uppercase">BlinkQuest:</span>
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
