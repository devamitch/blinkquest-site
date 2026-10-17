'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getAppHref, getAppLabel, siteConfig } from '@/lib/site'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Check,
  Sparkles,
  Eye,
  Compass,
  Activity,
  Moon,
  BatteryCharging,
} from 'lucide-react'

export interface ScreenSlide {
  id: string
  title: string
  subtitle: string
  tag: string
  badge: string
  src: string
  icon: typeof Sparkles
  description: string
}

const slides: ScreenSlide[] = [
  {
    id: 'home',
    title: 'The Eye Battery',
    subtitle: 'Daily Fatigue Model',
    tag: 'Battery & Streaks',
    badge: '99% Charged · Steady',
    src: '/assets/app/home.webp',
    icon: BatteryCharging,
    description:
      'Starts at 100% every morning. Staring without blinking depletes it; 30-second gaze games and camera-checked pauses restore it back to green.',
  },
  {
    id: 'orb-pop',
    title: 'Orb Pop Gaze Game',
    subtitle: 'Ocular Control Exercise',
    tag: '30-Second Game',
    badge: '478 Landmarks · 30 FPS',
    src: '/assets/app/orb-pop.webp',
    icon: Eye,
    description:
      'Pop moving targets across your screen purely with pupil movements. Anti-cheat ignores head turns so your extraocular eye muscles do the genuine work.',
  },
  {
    id: 'near-far',
    title: 'Near / Far 20-20-20 Break',
    subtitle: 'Camera-Verified Distance Shift',
    tag: 'Verified Break',
    badge: '20-20-20 Rule · Verified',
    src: '/assets/app/near-far.webp',
    icon: Compass,
    description:
      'The front camera ensures you actually look 20 feet away and complete real blinks. If you stay glued to the screen, the timer pauses until you comply.',
  },
  {
    id: 'orbit-follow',
    title: 'Orbit Follow',
    subtitle: 'Smooth Pursuit Eye Tracking',
    tag: 'Muscle Tracking',
    badge: 'Full Orbital Range',
    src: '/assets/app/orbit-follow.webp',
    icon: Activity,
    description:
      'Trace smooth circular trajectories to relieve ciliary muscle spasms and stimulate tear production across dry spots on your cornea.',
  },
  {
    id: 'activities',
    title: 'Exercise Sanctuary',
    subtitle: '8 Targeted Ocular Modalities',
    tag: '8 Modalities',
    badge: 'Targeted Visual Therapy',
    src: '/assets/app/activities.webp',
    icon: Sparkles,
    description:
      'A structured sanctuary of quick activities designed for screen fatigue, near-point stress, horizontal saccades, and dry-eye lubrication.',
  },
  {
    id: 'focus-point',
    title: 'Focus Point & Breath',
    subtitle: 'Ciliary Relaxation & Paced Breath',
    tag: 'Calm Fixation',
    badge: 'Vagal Resonant Breath',
    src: '/assets/app/focus-point.webp',
    icon: Moon,
    description:
      'Thirty seconds of gentle, soft visual fixation paired with rhythmic breathing prompts to loosen brow tension and ease screen headaches.',
  },
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)

  const activeSlide = slides[currentIndex]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // Auto-play optional cycle (pauses on user interaction)
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, nextSlide])

  // Touch Swipe Handlers for mobile card swiper
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  const prevIndex = (currentIndex - 1 + slides.length) % slides.length
  const nextIndex = (currentIndex + 1) % slides.length

  return (
    <section className="relative pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Unified Two-Column Hero: Content on Left, Interactive Card Swiper on Right */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Hero Editorial & Live Feature Context */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface2)] text-xs font-semibold text-[var(--ink-secondary)] border border-[var(--border)]">
              <span className="w-2 h-2 rounded-full bg-[var(--sage)] inline-block animate-pulse" />
              <span>{siteConfig.playStoreLive ? 'Live on Google Play' : 'Closed Testing Active'}</span>
              <span className="text-[var(--ink-muted)]">· Build 27 · Android 7.0+</span>
            </div>

            <h1 className="mt-6 font-serif text-4xl sm:text-6xl lg:text-6.5xl font-bold tracking-tight text-[var(--ink)] leading-[1.06]">
              Eye breaks you’ll{' '}
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

            <p className="mt-6 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed max-w-xl mx-auto lg:mx-0">
              When focusing on a screen, your spontaneous blink rate plummets by over 60%. BlinkQuest restores natural tear film with 30-second gaze games, camera-verified pauses, and an on-device Eye Battery.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
              <a href={getAppHref} className="btn-primary">
                <span>{getAppLabel}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
              <Link href="/how-it-works" className="btn-secondary">
                How MediaPipe works
              </Link>
            </div>

            {/* Quiet Trust Signals */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-[var(--ink-muted)] font-medium">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[var(--sage)] shrink-0" />
                100% on-device vision
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[var(--sage)] shrink-0" />
                No video recorded or uploaded
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[var(--sage)] shrink-0" />
                Free & open-source
              </span>
            </div>

            {/* Interactive Screen Selector Drawer */}
            <div className="mt-10 pt-6 border-t border-[var(--border)] hidden sm:block">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink-muted)] mb-3">
                Tap to explore authentic app screens:
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {slides.map((s, index) => {
                  const isSelected = currentIndex === index
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => {
                        setIsAutoPlaying(false)
                        setCurrentIndex(index)
                      }}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[var(--terracotta)] text-white shadow-xs'
                          : 'bg-[var(--surface2)] text-[var(--ink-secondary)] hover:bg-[var(--surface3)]'
                      }`}
                    >
                      {s.tag}
                    </button>
                  )
                })}
              </div>

              {/* Dynamic contextual description of active screen */}
              <div className="mt-4 p-3.5 rounded-xl bg-[var(--surface2)]/60 border border-[var(--border)] text-left">
                <div className="flex items-center justify-between text-xs font-bold text-[var(--terracotta-strong)]">
                  <span>{activeSlide.title}</span>
                  <span className="text-[10px] uppercase font-mono text-[var(--ink-muted)]">
                    Screen {currentIndex + 1} of {slides.length}
                  </span>
                </div>
                <p className="mt-1 text-xs text-[var(--ink-secondary)] leading-relaxed">
                  {activeSlide.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: World-Class Mobile Card Swiper */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* Swiper Stage */}
            <div
              className="relative w-full max-w-[420px] flex items-center justify-center select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Peek Left Card (Previous Screen Preview on large screens) */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label={`Previous screen: ${slides[prevIndex].title}`}
                className="hidden sm:block absolute -left-12 lg:-left-16 w-[180px] aspect-[720/1520] rounded-[2rem] bg-[#1E1D1B] p-1 border border-black/10 scale-[0.82] opacity-35 hover:opacity-75 transition-all duration-300 z-10 cursor-pointer overflow-hidden shadow-xs"
              >
                <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-[#FAF9F5]">
                  <Image
                    src={slides[prevIndex].src}
                    alt=""
                    fill
                    sizes="180px"
                    className="object-cover object-top pointer-events-none"
                  />
                </div>
              </button>

              {/* Center Active Mobile Device */}
              <div className="relative z-20 w-[270px] sm:w-[290px] md:w-[310px]">
                {/* Floating Live Telemetry Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 px-3.5 py-1 rounded-full bg-[var(--surface)] text-[11px] font-bold text-[var(--ink)] border border-[var(--border)] shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-[var(--sage)] animate-pulse" />
                  <span>{activeSlide.badge}</span>
                </div>

                {/* The Mobile Frame */}
                <div className="relative aspect-[720/1520] w-full rounded-[2.2rem] bg-[#1E1D1B] p-[6px] sm:p-[7px] border border-black/15 shadow-md">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-[#FAF9F5]">
                    <Image
                      key={activeSlide.id}
                      src={activeSlide.src}
                      alt={`BlinkQuest screen: ${activeSlide.title}`}
                      fill
                      sizes="(max-width: 768px) 85vw, 320px"
                      className="object-cover object-top transition-opacity duration-300"
                      priority
                    />
                  </div>
                </div>

                {/* Floating Navigation Controls (Previous / Next Floating Pills) */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous screen"
                  className="absolute -left-4 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[var(--surface)] text-[var(--ink)] border border-[var(--border)] shadow-md flex items-center justify-center hover:bg-[var(--surface2)] transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next screen"
                  className="absolute -right-4 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[var(--surface)] text-[var(--ink)] border border-[var(--border)] shadow-md flex items-center justify-center hover:bg-[var(--surface2)] transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Peek Right Card (Next Screen Preview on large screens) */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label={`Next screen: ${slides[nextIndex].title}`}
                className="hidden sm:block absolute -right-12 lg:-right-16 w-[180px] aspect-[720/1520] rounded-[2rem] bg-[#1E1D1B] p-1 border border-black/10 scale-[0.82] opacity-35 hover:opacity-75 transition-all duration-300 z-10 cursor-pointer overflow-hidden shadow-xs"
              >
                <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-[#FAF9F5]">
                  <Image
                    src={slides[nextIndex].src}
                    alt=""
                    fill
                    sizes="180px"
                    className="object-cover object-top pointer-events-none"
                  />
                </div>
              </button>
            </div>

            {/* Mobile / Compact Screen Title & Indicators */}
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-1.5">
                {slides.map((s, index) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === index
                        ? 'w-6 bg-[var(--terracotta)]'
                        : 'w-2 bg-[var(--border-strong)] hover:bg-[var(--ink-muted)]'
                    }`}
                  />
                ))}
              </div>

              <div className="mt-2 text-xs font-semibold text-[var(--ink)]">
                <span>{activeSlide.title}</span>
                <span className="text-[var(--ink-muted)] font-normal"> · {activeSlide.subtitle}</span>
              </div>
              <p className="text-[11px] text-[var(--ink-muted)] sm:hidden mt-1 px-4 leading-relaxed">
                Swipe left or right to inspect the release screens
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
