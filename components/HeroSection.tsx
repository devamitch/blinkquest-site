import Link from 'next/link'
import { PhoneFrame } from '@/components/PhoneFrame'
import { getAppHref, getAppLabel, siteConfig } from '@/lib/site'
import { ShieldCheck, Sparkles, ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-16 md:pb-32">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[var(--terracotta)]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-12 md:gap-14 items-center">
          {/* Left Hero Content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border-strong)] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--sage)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--sage)]" />
              </span>
              <span className="text-xs font-semibold tracking-wide uppercase text-[var(--ink-secondary)]">
                {siteConfig.playStoreLive ? 'Live on Google Play' : 'Closed Testing · Monotonic build'}
              </span>
              <span className="text-xs text-[var(--ink-muted)]">· Android {siteConfig.minAndroidVersion.split(' ')[0]}+</span>
            </div>

            <h1 className="mt-6 font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[var(--ink)] leading-[1.06]">
              Eye breaks you&apos;ll{' '}
              <span className="italic font-normal text-[var(--terracotta)] relative inline-block">
                actually
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2 text-[var(--terracotta)]/40"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,8 Q50,0 100,8" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>{' '}
              take.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[var(--ink-secondary)] leading-relaxed max-w-xl mx-auto md:mx-0">
              We blink up to 66% less while staring at screens. BlinkQuest turns optical fatigue
              relief into thirty-second eye-tracking games, camera-verified focus breaks, and an Eye Battery
              score. Completely private on your phone.
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
                Explore interactive demo
              </Link>
            </div>

            {/* Badges / Guarantees */}
            <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-wrap gap-y-3 gap-x-6 justify-center md:justify-start text-xs font-medium text-[var(--ink-muted)]">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[var(--sage)]" />
                Zero camera frames stored or uploaded
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[var(--terracotta)]" />
                MediaPipe 478 face landmarks on-device
              </span>
              <span className="inline-flex items-center gap-1.5">
                100% Free & Open Ecosystem
              </span>
            </div>
          </div>

          {/* Right Hero Interactive Device Stage */}
          <div className="relative mx-auto w-full max-w-[440px] h-[520px] sm:h-[620px] flex items-center justify-center">
            {/* Background Device Card (Orb Pop) */}
            <div className="absolute right-2 top-10 w-[58%] rotate-[6deg] transition-all duration-500 hover:rotate-0 hover:z-30 hover:scale-105">
              <PhoneFrame src="/assets/app/orb-pop.webp" alt="Orb Pop: an eye-controlled game in BlinkQuest" />
            </div>

            {/* Foreground Device Card (Home / Eye Battery) */}
            <div className="absolute left-2 top-0 w-[64%] -rotate-[3deg] transition-all duration-500 hover:rotate-0 hover:z-30 hover:scale-105">
              <PhoneFrame src="/assets/app/home.webp" alt="BlinkQuest home screen with the Eye Battery" priority />
            </div>

            {/* Floating Glass Pill: Real-time Blink Detection */}
            <div className="absolute -bottom-2 left-6 z-30 p-3.5 rounded-2xl bg-[var(--surface)]/95 backdrop-blur-xl border border-[var(--border-strong)] shadow-lg flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta)]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-[var(--ink)]">Eye Battery Active</p>
                <p className="text-[11px] text-[var(--ink-secondary)]">24 blinks/min · Relaxed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
