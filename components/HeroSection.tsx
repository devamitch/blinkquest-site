import Link from 'next/link'
import { PhoneFrame } from '@/components/PhoneFrame'
import { getAppHref, getAppLabel, siteConfig } from '@/lib/site'
import { ArrowRight, ShieldCheck, Sparkles, Check } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-36">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Editorial Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface2)] text-xs font-medium text-[var(--ink-secondary)] border border-[var(--border)]">
            <span className="w-2 h-2 rounded-full bg-[var(--sage)] inline-block" />
            <span>{siteConfig.playStoreLive ? 'Live on Google Play' : 'Closed Testing Active'}</span>
            <span className="text-[var(--ink-muted)]">· Build 27 · Android 7.0+</span>
          </div>

          <h1 className="mt-8 font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--ink)] leading-[1.08]">
            Eye breaks you’ll{' '}
            <span className="italic font-normal text-[var(--terracotta)]">actually</span>{' '}
            take.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[var(--ink-secondary)] leading-relaxed max-w-2xl mx-auto">
            When you focus on a screen, your spontaneous blink rate plummets from eighteen blinks a minute down to fewer than six. BlinkQuest restores natural tear film with thirty-second gaze games, camera-verified pauses, and an on-device Eye Battery.
          </p>

          {/* Action Row */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href={getAppHref} className="btn-primary">
              <span>{getAppLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/how-it-works" className="btn-secondary">
              How MediaPipe works
            </Link>
          </div>

          {/* Quiet Trust Signals */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-[var(--ink-muted)]">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[var(--sage)]" />
              100% on-device vision
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[var(--sage)]" />
              No video ever recorded or uploaded
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[var(--sage)]" />
              Free and open-source
            </span>
          </div>
        </div>

        {/* Device Stage: Calm, authentic, un-rotated, 100% unclipped presentation */}
        <div className="mt-16 md:mt-20 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {/* Left Companion Screen */}
            <div className="hidden md:flex flex-col items-center">
              <div className="w-[88%] transform transition-transform duration-300 hover:-translate-y-2">
                <PhoneFrame
                  src="/assets/app/orb-pop.webp"
                  alt="Orb Pop gaze game in BlinkQuest"
                />
              </div>
              <p className="mt-4 text-xs font-semibold text-[var(--ink-secondary)] text-center">
                Orb Pop · Gaze game
              </p>
            </div>

            {/* Center Focal Screen */}
            <div className="flex flex-col items-center">
              <div className="w-[92%] sm:w-[85%] md:w-full transform transition-transform duration-300 hover:-translate-y-2">
                <PhoneFrame
                  src="/assets/app/home.webp"
                  alt="BlinkQuest home screen with Eye Battery"
                  priority
                />
              </div>
              <p className="mt-4 text-xs font-semibold text-[var(--terracotta-strong)] text-center">
                The Eye Battery Dashboard
              </p>
            </div>

            {/* Right Companion Screen */}
            <div className="hidden md:flex flex-col items-center">
              <div className="w-[88%] transform transition-transform duration-300 hover:-translate-y-2">
                <PhoneFrame
                  src="/assets/app/near-far.webp"
                  alt="Camera-verified 20-20-20 break in BlinkQuest"
                />
              </div>
              <p className="mt-4 text-xs font-semibold text-[var(--ink-secondary)] text-center">
                Near / Far · Verified break
              </p>
            </div>
          </div>
        </div>

        {/* Minimalist Editorial Stat Strip */}
        <div className="mt-20 pt-10 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[var(--ink)]">18 → 6</p>
            <p className="mt-1 text-xs text-[var(--ink-secondary)] leading-relaxed">
              Blinks per minute drop by over 60% when reading or coding on screens.
            </p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[var(--terracotta)]">30 sec</p>
            <p className="mt-1 text-xs text-[var(--ink-secondary)] leading-relaxed">
              Quick interactive gaze games that loosen locked ciliary eye muscles.
            </p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[var(--sage)]">0 frames</p>
            <p className="mt-1 text-xs text-[var(--ink-secondary)] leading-relaxed">
              Camera frames exist in RAM only. Nothing is saved to disk or network.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
