'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/site'
import {
  ArrowRight,
  Check,
  Sparkles,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Users,
} from 'lucide-react'

interface HeroCard {
  id: string
  title: string
  subtitle: string
  photo: string
  badge: string
}

const HERO_SCREENS: HeroCard[] = [
  {
    id: 'home',
    title: 'The Eye Battery',
    subtitle: 'Daily Fatigue Model',
    photo: '/assets/marketing-screenshots/06_home_eye_battery.png',
    badge: '99% Charged · Steady',
  },
  {
    id: 'orb-pop',
    title: 'Orb Pop Gaze Game',
    subtitle: '30-Second Ocular Workout',
    photo: '/assets/marketing-screenshots/03_orb_pop.png',
    badge: 'Pupil Gaze · 30 FPS',
  },
  {
    id: 'scan-ready',
    title: 'BlinkQuest Scanner',
    subtitle: '478-Point Face & Iris Mesh',
    photo: '/assets/marketing-screenshots/01_scan_ready.png',
    badge: 'On-Device MediaPipe',
  },
  {
    id: 'near-far',
    title: 'Near / Far 20-20-20',
    subtitle: 'Camera-Verified Distance Shift',
    photo: '/assets/marketing-screenshots/08_near_far_break.png',
    badge: 'Verified 20ft Focus',
  },
  {
    id: 'activities',
    title: 'Exercise Sanctuary',
    subtitle: '8 Targeted Ocular Modalities',
    photo: '/assets/marketing-screenshots/02_activities.png',
    badge: '8 Ocular Modalities',
  },
]

export function HeroSection() {
  const [centerIndex, setCenterIndex] = useState(0)

  const leftIndex = (centerIndex - 1 + HERO_SCREENS.length) % HERO_SCREENS.length
  const rightIndex = (centerIndex + 1) % HERO_SCREENS.length

  const centerCard = HERO_SCREENS[centerIndex]
  const leftCard = HERO_SCREENS[leftIndex]
  const rightCard = HERO_SCREENS[rightIndex]

  const swapToLeft = () => setCenterIndex(leftIndex)
  const swapToRight = () => setCenterIndex(rightIndex)

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10">
      {/* Setu-style subtle dual radial background glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(60%_60%_at_70%_20%,rgba(218,119,86,0.18),transparent_70%),radial-gradient(40%_40%_at_10%_10%,rgba(205,199,183,0.45),transparent_70%)]" />

      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* Left Column: Editorial Story & Beta Invitation */}
        <div className="max-w-[620px] text-center lg:text-left mx-auto lg:mx-0">
          {/* Top Beta Badge matching Setu */}
          <Link
            href="/beta"
            className="group mb-6 inline-flex items-center gap-2.5 rounded-full bg-[var(--surface)] py-1.5 pl-2 pr-4 text-[13px] font-medium text-[var(--ink-secondary)] border border-[var(--border)] shadow-[0_2px_10px_rgba(25,25,24,0.06)] transition-all hover:shadow-[0_4px_16px_rgba(25,25,24,0.1)]"
          >
            <span className="rounded-full bg-[var(--terracotta)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
              Google Play Beta
            </span>
            <span>Join testing group on Google Play</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-[var(--terracotta)]" aria-hidden="true" />
          </Link>

          {/* Headline in canonical Fraunces Serif */}
          <h1 className="text-balance font-serif text-[clamp(2.75rem,7vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.04em] text-[var(--ink)]">
            Eye breaks you’ll{' '}
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

          <p className="mt-6 text-[17px] leading-8 text-[var(--ink-secondary)] sm:text-[19px]">
            We blink up to 66% less while staring at screens. Part of the <strong>Setu local-first family</strong>, BlinkQuest restores natural tear film with 30-second gaze games, camera-verified focus breaks, and a private Eye Battery.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
            <Link
              href="/beta"
              className="inline-flex items-center justify-center gap-2 min-h-13 px-7 rounded-full bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <span>Join the Beta Program</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-13 px-6 rounded-full bg-[var(--surface)] hover:bg-[var(--surface2)] text-[var(--ink)] text-base font-semibold border border-[var(--border-strong)] transition-all active:scale-95 shadow-xs"
            >
              <span>Google Play Store</span>
              <ExternalLink className="h-4 w-4 text-[var(--ink-muted)]" aria-hidden="true" />
            </a>
          </div>

          {/* Setu Family Guarantee & Trust Bullets */}
          <ul className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5 text-sm font-medium text-[var(--ink-secondary)]">
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--terracotta-subtle)] text-[var(--terracotta-strong)]">
                <Check className="h-3 w-3" aria-hidden="true" />
              </span>
              Part of Setu Ecosystem
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--terracotta-subtle)] text-[var(--terracotta-strong)]">
                <Check className="h-3 w-3" aria-hidden="true" />
              </span>
              100% On-Device Vision
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--terracotta-subtle)] text-[var(--terracotta-strong)]">
                <Check className="h-3 w-3" aria-hidden="true" />
              </span>
              Zero frames stored or uploaded
            </li>
          </ul>

          {/* Quick Group Testing Helper */}
          <div className="mt-8 pt-5 border-t border-[var(--border)] text-xs text-[var(--ink-muted)] flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <span className="inline-flex items-center gap-1.5 text-[var(--ink-secondary)]">
              <Users className="w-3.5 h-3.5 text-[var(--terracotta)]" />
              <strong>Testing Group:</strong> {siteConfig.googleGroupName}
            </span>
            <span>·</span>
            <a
              href={siteConfig.googleGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--terracotta-strong)] underline font-medium hover:text-[var(--terracotta-hover)]"
            >
              Direct Google Group Link
            </a>
          </div>
        </div>

        {/* Right Column: Exact Setu 3-Device Cascade Showcase with Real Marketing Photography */}
        <div className="relative mx-auto h-[480px] w-full max-w-[500px] sm:h-[580px] select-none flex items-center justify-center">
          {/* Backlight Radial Glow matching Setu */}
          <div className="absolute inset-[8%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(218,119,86,0.28),transparent_65%)] blur-2xl" />

          {/* Left Tilted Device (Click to rotate to front) */}
          <button
            type="button"
            onClick={swapToLeft}
            aria-label={`Show ${leftCard.title}`}
            className="absolute left-0 top-[12%] w-[48%] -rotate-[7deg] rounded-[26px] sm:rounded-[34px] bg-[var(--surface)] p-1.5 sm:p-2 shadow-[0_35px_70px_-20px_rgba(25,25,24,0.3),0_2px_6px_rgba(25,25,24,0.06)] border border-[var(--border)] transition-all duration-500 hover:scale-105 hover:opacity-100 opacity-65 cursor-pointer z-10"
          >
            <div className="relative aspect-[941/1672] w-full rounded-[20px] sm:rounded-[28px] overflow-hidden bg-[#FAF9F5]">
              <Image
                src={leftCard.photo}
                alt={leftCard.title}
                fill
                sizes="240px"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-[var(--surface)]/95 backdrop-blur-md border border-[var(--border)] shadow-xs whitespace-nowrap hidden sm:block">
              <span className="text-[10px] font-bold text-[var(--ink)]">{leftCard.title}</span>
            </div>
          </button>

          {/* Right Tilted Device (Click to rotate to front) */}
          <button
            type="button"
            onClick={swapToRight}
            aria-label={`Show ${rightCard.title}`}
            className="absolute right-0 top-[16%] w-[48%] rotate-[7deg] rounded-[26px] sm:rounded-[34px] bg-[var(--surface)] p-1.5 sm:p-2 shadow-[0_35px_70px_-20px_rgba(25,25,24,0.3),0_2px_6px_rgba(25,25,24,0.06)] border border-[var(--border)] transition-all duration-500 hover:scale-105 hover:opacity-100 opacity-65 cursor-pointer z-10"
          >
            <div className="relative aspect-[941/1672] w-full rounded-[20px] sm:rounded-[28px] overflow-hidden bg-[#FAF9F5]">
              <Image
                src={rightCard.photo}
                alt={rightCard.title}
                fill
                sizes="240px"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-[var(--surface)]/95 backdrop-blur-md border border-[var(--border)] shadow-xs whitespace-nowrap hidden sm:block">
              <span className="text-[10px] font-bold text-[var(--ink)]">{rightCard.title}</span>
            </div>
          </button>

          {/* Center Dominant Device matching Setu's Priority PhoneCard */}
          <div className="absolute left-1/2 top-0 z-20 w-[56%] sm:w-[54%] -translate-x-1/2 rounded-[28px] sm:rounded-[36px] bg-[var(--surface)] p-1.5 sm:p-2.5 shadow-[0_45px_90px_-24px_rgba(25,25,24,0.4),0_4px_12px_rgba(25,25,24,0.08)] border border-[var(--border-strong)] transition-all duration-500">
            {/* Real Marketing Screenshot in crisp resolution */}
            <div className="relative aspect-[941/1672] w-full rounded-[22px] sm:rounded-[30px] overflow-hidden bg-[#FAF9F5]">
              <Image
                key={centerCard.id}
                src={centerCard.photo}
                alt={`BlinkQuest official Android screen: ${centerCard.title}`}
                fill
                sizes="(max-width: 768px) 85vw, 360px"
                className="object-cover object-top transition-opacity duration-300"
                priority
              />
            </div>

            {/* Floating Top Telemetry Pill */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--surface)]/95 backdrop-blur-md border border-[var(--border-strong)] shadow-md flex items-center gap-1.5 whitespace-nowrap z-30">
              <span className="w-2 h-2 rounded-full bg-[var(--sage)] animate-pulse" />
              <span className="text-[10.5px] font-bold text-[var(--ink)]">{centerCard.badge}</span>
            </div>

            {/* Floating Bottom Link to Beta */}
            <Link
              href="/beta"
              className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[var(--ink)] hover:bg-black text-white text-[10.5px] font-bold shadow-md flex items-center gap-1.5 whitespace-nowrap z-30 transition-all hover:scale-105"
            >
              <span>Get on Google Play</span>
              <ArrowRight className="w-3 h-3" />
            </Link>

            {/* Tactile Switch Arrows */}
            <button
              type="button"
              onClick={swapToLeft}
              aria-label="Previous screen"
              className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-[var(--surface)] text-[var(--ink)] border border-[var(--border)] shadow-md flex items-center justify-center hover:bg-[var(--surface2)] hover:scale-105 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={swapToRight}
              aria-label="Next screen"
              className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-[var(--surface)] text-[var(--ink)] border border-[var(--border)] shadow-md flex items-center justify-center hover:bg-[var(--surface2)] hover:scale-105 transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Panoramic Official Brand Banner Strip with Setu Family Notice */}
      <div className="mt-16 mx-auto w-full max-w-[1240px]">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[var(--border-strong)] shadow-xl bg-[var(--surface)] group">
          <div className="relative aspect-[1794/876] w-full max-h-[460px]">
            <Image
              src="/assets/brand/banner.png"
              alt="BlinkQuest official brand banner: Make eye breaks a little more fun"
              fill
              sizes="(max-width: 1240px) 100vw, 1240px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/85 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-5 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[var(--sage)] inline-block" />
                  <span className="text-[11px] font-bold tracking-widest uppercase text-white/80">
                    Setu Local-First Family · Official Google Play Beta
                  </span>
                </div>
                <p className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                  Make eye breaks a little more fun.
                </p>
                <p className="text-xs text-white/85 mt-1 max-w-lg hidden sm:block">
                  Playful activities. Healthier eye habits. Camera-verified breaks that run completely on your Android device.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/beta"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white text-xs font-bold shadow-md transition-all"
                >
                  <span>Join the Beta Program</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={siteConfig.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white text-[var(--ink)] text-xs font-bold shadow-md hover:bg-[var(--paper)] transition-all"
                >
                  <span>Google Play</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
