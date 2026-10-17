import Link from 'next/link'
import { PhoneFrame } from '@/components/PhoneFrame'
import { getAppHref, getAppLabel, siteConfig } from '@/lib/site'

export function HeroSection() {
  return (
    <section className="overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-14 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-[1.1fr_1fr] gap-14 md:gap-10 items-center">
        <div className="text-center md:text-left">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[var(--terracotta-strong)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)]" />
            {siteConfig.playStoreLive ? 'Now on Google Play' : 'In closed testing'} · Android {siteConfig.minAndroidVersion.split(' ')[0]}+
          </p>

          <h1 className="mt-5 font-serif text-[2.6rem] leading-[1.05] sm:text-6xl font-semibold tracking-tight text-[var(--ink)]">
            Eye breaks you&apos;ll <span className="italic font-normal text-[var(--terracotta)]">actually</span> take.
          </h1>

          <p className="mt-6 text-lg text-[var(--ink-secondary)] leading-relaxed max-w-xl mx-auto md:mx-0">
            We blink far less while we stare at screens. BlinkQuest turns the fix into thirty-second
            games you play with your eyes, and a scanner that counts your blinks. All of it runs on your
            phone.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={getAppHref}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white font-semibold transition-colors"
            >
              {getAppLabel}
            </a>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[var(--surface2)] hover:bg-[var(--surface3)] text-[var(--ink)] font-semibold transition-colors"
            >
              How it works
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start text-sm text-[var(--ink-muted)]">
            <li>Camera frames stay on your phone</li>
            <li>Sign in with Google or Setu</li>
            <li>Free</li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] h-[520px] sm:h-[600px]">
          <div className="absolute right-0 top-12 w-[56%] rotate-[5deg]">
            <PhoneFrame src="/assets/app/orb-pop.webp" alt="Orb Pop: an eye-controlled game in BlinkQuest" />
          </div>
          <div className="absolute left-0 top-0 w-[62%]">
            <PhoneFrame src="/assets/app/home.webp" alt="BlinkQuest home screen with the Eye Battery" priority />
          </div>
        </div>
      </div>
    </section>
  )
}
