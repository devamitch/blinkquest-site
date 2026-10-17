import Link from 'next/link'
import { PhoneFrame } from '@/components/PhoneFrame'
import { getAppHref, getAppLabel, siteConfig } from '@/lib/site'
import { ShieldCheck, Sparkles, ArrowRight, Eye, BatteryCharging, CheckCircle2 } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-16 md:pb-32">
      {/* Dynamic ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[var(--terracotta)]/15 via-[var(--amber)]/10 to-[var(--sage)]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-[1.12fr_1fr] gap-12 md:gap-14 items-center">
          {/* Left Hero Content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border-strong)] shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--sage)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--sage)]" />
              </span>
              <span className="text-xs font-bold tracking-wide uppercase text-[var(--ink)]">
                {siteConfig.playStoreLive ? 'Live on Google Play' : 'Closed Testing Active'}
              </span>
              <span className="text-xs text-[var(--ink-muted)]">· Build 27 · Android 7.0+</span>
            </div>

            <h1 className="mt-6 font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--ink)] leading-[1.06]">
              Eye breaks you&apos;ll{' '}
              <span className="italic font-normal text-[var(--terracotta)] relative inline-block">
                actually
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[var(--terracotta)]/40"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,8 Q50,0 100,8" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>{' '}
              take.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[var(--ink-secondary)] leading-relaxed max-w-xl mx-auto md:mx-0">
              When we focus on digital screens, our spontaneous blink rate plummets by over 60%.
              BlinkQuest restores natural ocular tear film through 30-second eye-tracking games,
              verified breaks, and an on-device Eye Battery score.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center md:justify-start">
              <a
                href={getAppHref}
                className="btn-primary group"
              >
                <span>{getAppLabel}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <Link
                href="/how-it-works"
                className="btn-secondary"
              >
                How MediaPipe Works
              </Link>
            </div>

            {/* Badges / Guarantees */}
            <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-wrap gap-y-3 gap-x-6 justify-center md:justify-start text-xs font-medium text-[var(--ink-muted)]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--sage)]" />
                100% On-Device Inference
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[var(--sage)]" />
                No Cloud Camera Video Recording
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[var(--terracotta)]" />
                Setu SSO & Google Federation
              </span>
            </div>
          </div>

          {/* Right Hero Interactive Device Stage: engineered for 100% visibility on all viewports without clipping */}
          <div className="relative mx-auto w-full max-w-[480px] h-[620px] sm:h-[700px] flex items-center justify-center pt-4 pb-8">
            {/* Background Ambient Glow beneath devices */}
            <div className="absolute inset-x-8 top-12 bottom-12 bg-gradient-to-tr from-[var(--terracotta)]/20 to-[var(--amber)]/10 rounded-full blur-[70px] pointer-events-none" />

            {/* Background Device Card (Orb Pop - Eye Tracking game) */}
            <div className="absolute right-1 sm:right-3 top-14 sm:top-18 w-[60%] sm:w-[62%] rotate-[5deg] transition-all duration-500 ease-out hover:rotate-0 hover:z-30 hover:scale-105">
              <PhoneFrame src="/assets/app/orb-pop.webp" alt="Orb Pop: an eye-controlled game in BlinkQuest" />
            </div>

            {/* Foreground Device Card (Home Dashboard with Eye Battery) */}
            <div className="absolute left-1 sm:left-3 top-6 sm:top-8 w-[66%] sm:w-[68%] -rotate-[2deg] transition-all duration-500 ease-out hover:rotate-0 hover:z-30 hover:scale-105 shadow-2xl">
              <PhoneFrame src="/assets/app/home.webp" alt="BlinkQuest home screen with the Eye Battery" priority />
            </div>

            {/* Floating Live Telemetry Chip (Top Right) */}
            <div className="absolute top-2 right-4 z-30 px-3 py-1.5 rounded-full bg-[var(--surface)]/95 backdrop-blur-md border border-[var(--border-strong)] shadow-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--sage)] animate-pulse" />
              <span className="text-[11px] font-bold text-[var(--ink)]">478-pt Mesh: Active</span>
            </div>

            {/* Floating Glass Telemetry Pill (Bottom Left) */}
            <div className="absolute bottom-2 left-2 sm:left-4 z-30 p-3.5 sm:p-4 rounded-2xl bg-[var(--surface)]/95 backdrop-blur-xl border border-[var(--border-strong)] shadow-xl flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta)] shrink-0">
                <BatteryCharging className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <p className="text-xs font-bold text-[var(--ink)]">Eye Battery: 99%</p>
                  <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded-full bg-[var(--sage-subtle)] text-[var(--sage)]">Optimal</span>
                </div>
                <p className="text-[11px] text-[var(--ink-secondary)]">Steady · Next 20s break in 18m</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
