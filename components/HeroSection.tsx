'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getAppHref, getAppLabel, siteConfig } from '@/lib/site'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  Sparkles,
  Eye,
  Compass,
  Activity,
  ShieldCheck,
  BatteryCharging,
  Maximize2,
  Play,
  RotateCcw,
  Zap,
  Layers,
  Image as ImageIcon,
} from 'lucide-react'

export interface ScreenSlide {
  id: string
  title: string
  subtitle: string
  tag: string
  badge: string
  photo: string
  screen: string
  icon: typeof Sparkles
  description: string
  metric: string
  metricLabel: string
}

const slides: ScreenSlide[] = [
  {
    id: 'battery',
    title: 'The Eye Battery',
    subtitle: 'Daily Fatigue Model',
    tag: '⚡ Eye Battery',
    badge: '99% Charged · Steady',
    photo: '/assets/marketing-screenshots/06_home_eye_battery.png',
    screen: '/assets/app/home.webp',
    icon: BatteryCharging,
    description:
      'Starts at 100% every morning. Staring without blinking steadily drains it; 30-second gaze games and camera-verified breaks restore natural tear film back to green.',
    metric: '99%',
    metricLabel: 'Tear Film Level',
  },
  {
    id: 'orb-pop',
    title: 'Orb Pop Gaze Game',
    subtitle: 'Extraocular Muscle Agility',
    tag: '🎯 Orb Pop',
    badge: 'Pupil Gaze · 30 FPS',
    photo: '/assets/marketing-screenshots/03_orb_pop.png',
    screen: '/assets/app/orb-pop.webp',
    icon: Eye,
    description:
      'Pop moving targets with rapid eye saccades while keeping your head still. Exercises the six extraocular muscles stiffened by prolonged screen staring.',
    metric: '30s',
    metricLabel: 'Quick Play Session',
  },
  {
    id: 'scanner',
    title: 'BlinkQuest Scanner',
    subtitle: '478-Point Face & Iris Mesh',
    tag: '📡 Vision Scanner',
    badge: 'On-Device MediaPipe',
    photo: '/assets/marketing-screenshots/01_scan_ready.png',
    screen: '/assets/app/home.webp',
    icon: Activity,
    description:
      'Real-time spontaneous blink cadence tracking. Calculates your blink completeness and ocular tear film recovery index without saving a single image frame.',
    metric: '478',
    metricLabel: 'Landmarks Tracked',
  },
  {
    id: 'near-far',
    title: 'Near / Far 20-20-20',
    subtitle: 'Ciliary Accommodation Reset',
    tag: '🔭 20-20-20 Break',
    badge: 'Verified Distance Shift',
    photo: '/assets/marketing-screenshots/08_near_far_break.png',
    screen: '/assets/app/near-far.webp',
    icon: Compass,
    description:
      'The front camera ensures you actually look 20 feet away and complete deliberate slow blinks. If you stay glued to the screen, the timer pauses until you comply.',
    metric: '20ft',
    metricLabel: 'Distance Rest',
  },
  {
    id: 'activities',
    title: 'Exercise Sanctuary',
    subtitle: '8 Targeted Ocular Modalities',
    tag: '🌿 Sanctuary',
    badge: '8 Ocular Modalities',
    photo: '/assets/marketing-screenshots/02_activities.png',
    screen: '/assets/app/activities.webp',
    icon: Sparkles,
    description:
      'A structured sanctuary of eight quick ocular routines designed for screen strain, dry eye lubrication, horizontal saccades, and near-point focus fatigue.',
    metric: '8',
    metricLabel: 'Therapy Routines',
  },
  {
    id: 'privacy',
    title: 'Local & Private Onboarding',
    subtitle: 'Zero Telemetry & Offline',
    tag: '🔒 Private Vision',
    badge: '100% On-Device AI',
    photo: '/assets/marketing-screenshots/04_onboarding_welcome.png',
    screen: '/assets/app/sign-in.webp',
    icon: ShieldCheck,
    description:
      'No cloud recording, no server uploads. All computer vision runs strictly in your phone’s memory with Google Sign-In or Setu decentralized identity.',
    metric: '0 kB',
    metricLabel: 'Cloud Frames',
  },
]

type PresentationMode = 'spatial-deck' | 'live-simulator' | 'studio-banner'

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeMode, setActiveMode] = useState<PresentationMode>('spatial-deck')
  const [isSimulating, setIsSimulating] = useState(false)
  const [simulatedBattery, setSimulatedBattery] = useState(84)
  const [simulatedBlinkCount, setSimulatedBlinkCount] = useState(14)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const activeSlide = slides[currentIndex]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // Touch handlers
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
    if (distance > 50) nextSlide()
    else if (distance < -50) prevSlide()
  }

  // Live simulator action
  const triggerSimulation = () => {
    if (isSimulating) return
    setIsSimulating(true)
    let step = 0
    const interval = setInterval(() => {
      step += 1
      setSimulatedBattery((prev) => Math.min(100, prev + 3))
      setSimulatedBlinkCount((prev) => prev + 1)
      if (step >= 5) {
        clearInterval(interval)
        setIsSimulating(false)
      }
    }, 400)
  }

  const resetSimulation = () => {
    setSimulatedBattery(84)
    setSimulatedBlinkCount(14)
    setIsSimulating(false)
  }

  const prevIndex = (currentIndex - 1 + slides.length) % slides.length
  const nextIndex = (currentIndex + 1) % slides.length

  return (
    <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Organic radial ambient wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 h-[850px] bg-[radial-gradient(60%_50%_at_65%_25%,rgba(218,119,86,0.15),transparent_70%),radial-gradient(40%_40%_at_15%_15%,rgba(205,199,183,0.35),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Main Two-Column Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Value Proposition */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--surface)] text-xs font-semibold text-[var(--ink-secondary)] border border-[var(--border)] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--sage)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--sage)]" />
              </span>
              <span>{siteConfig.playStoreLive ? 'Live on Google Play' : 'Closed Testing Active'}</span>
              <span className="text-[var(--ink-muted)]">· Build 27 · Android 7.0+</span>
            </div>

            {/* Editorial Title */}
            <h1 className="mt-6 font-serif text-4xl sm:text-6xl lg:text-6.5xl font-bold tracking-tight text-[var(--ink)] leading-[1.04]">
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

            <p className="mt-6 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed max-w-xl mx-auto lg:mx-0">
              When focusing on screens, spontaneous blinking drops by up to 66%. BlinkQuest restores natural tear film through 30-second eye-tracking games, camera-verified distance pauses, and a private Eye Battery score.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
              <a href={getAppHref} className="btn-primary group">
                <span>{getAppLabel}</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
              <Link href="/how-it-works" className="btn-secondary">
                Explore science & architecture
              </Link>
            </div>

            {/* Honest Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5 text-xs text-[var(--ink-muted)] font-medium">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[var(--sage)] shrink-0" />
                100% on-device vision
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[var(--sage)] shrink-0" />
                Zero camera frames stored or uploaded
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[var(--sage)] shrink-0" />
                Free & open-source
              </span>
            </div>

            {/* Interactive Screen Selector Drawer */}
            <div className="mt-9 pt-6 border-t border-[var(--border)] hidden sm:block">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink-muted)]">
                  Tap to inspect release screens:
                </p>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[var(--surface2)] text-[var(--ink-secondary)]">
                  {currentIndex + 1} / {slides.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {slides.map((s, index) => {
                  const isSelected = currentIndex === index
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
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

              {/* Dynamic contextual description card */}
              <div className="mt-4 p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xs text-left">
                <div className="flex items-center justify-between text-xs font-bold text-[var(--terracotta-strong)]">
                  <div className="flex items-center gap-2">
                    <activeSlide.icon className="w-4 h-4 text-[var(--terracotta)]" />
                    <span>{activeSlide.title}</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[var(--surface2)] text-[var(--ink-secondary)]">
                    {activeSlide.badge}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-[var(--ink-secondary)] leading-relaxed">
                  {activeSlide.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Out-of-the-Box Multi-Mode Mobile Stage */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* Out-of-the-Box Mode Switcher Tabs */}
            <div className="mb-5 inline-flex items-center p-1 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-xs">
              <button
                type="button"
                onClick={() => setActiveMode('spatial-deck')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeMode === 'spatial-deck'
                    ? 'bg-[var(--ink)] text-white shadow-xs'
                    : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>3D Spatial Deck</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveMode('live-simulator')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeMode === 'live-simulator'
                    ? 'bg-[var(--terracotta)] text-white shadow-xs'
                    : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Live Eye Lab</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveMode('studio-banner')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeMode === 'studio-banner'
                    ? 'bg-[var(--sage)] text-white shadow-xs'
                    : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Studio Banner</span>
              </button>
            </div>

            {/* STAGE VARIANT 1: 3D Spatial Deck (Setu Reference + Marketing Screenshots) */}
            {activeMode === 'spatial-deck' && (
              <div
                className="relative w-full max-w-[460px] h-[480px] sm:h-[560px] flex items-center justify-center select-none"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Diffused backlight aura */}
                <div className="absolute inset-0 max-w-[420px] max-h-[460px] m-auto rounded-full bg-[radial-gradient(circle,rgba(218,119,86,0.22),transparent_70%)] blur-2xl -z-10" />

                {/* Left Peek Device (Previous Slide) */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label={`Previous screen: ${slides[prevIndex].title}`}
                  className="hidden sm:block absolute left-0 top-[12%] w-[46%] aspect-[941/1672] -rotate-[7deg] rounded-[24px] overflow-hidden bg-[var(--surface)] p-1.5 shadow-[0_30px_60px_-18px_rgba(38,34,28,0.25),0_2px_8px_rgba(38,34,28,0.06)] border border-[var(--border)] opacity-60 hover:opacity-100 hover:scale-105 hover:-rotate-[3deg] transition-all duration-500 z-10 cursor-pointer"
                >
                  <div className="relative w-full h-full rounded-[18px] overflow-hidden">
                    <Image
                      src={slides[prevIndex].photo}
                      alt={slides[prevIndex].title}
                      fill
                      sizes="220px"
                      className="object-cover object-top"
                    />
                  </div>
                </button>

                {/* Right Peek Device (Next Slide) */}
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label={`Next screen: ${slides[nextIndex].title}`}
                  className="hidden sm:block absolute right-0 top-[15%] w-[46%] aspect-[941/1672] rotate-[7deg] rounded-[24px] overflow-hidden bg-[var(--surface)] p-1.5 shadow-[0_30px_60px_-18px_rgba(38,34,28,0.25),0_2px_8px_rgba(38,34,28,0.06)] border border-[var(--border)] opacity-60 hover:opacity-100 hover:scale-105 hover:rotate-[3deg] transition-all duration-500 z-10 cursor-pointer"
                >
                  <div className="relative w-full h-full rounded-[18px] overflow-hidden">
                    <Image
                      src={slides[nextIndex].photo}
                      alt={slides[nextIndex].title}
                      fill
                      sizes="220px"
                      className="object-cover object-top"
                    />
                  </div>
                </button>

                {/* Center Hero Device (Active Marketing Screenshot) */}
                <div className="relative z-20 w-[58%] sm:w-[56%] aspect-[941/1672] rounded-[28px] sm:rounded-[34px] bg-[var(--surface)] p-2 shadow-[0_40px_85px_-20px_rgba(38,34,28,0.32),0_4px_16px_rgba(38,34,28,0.08)] border border-[var(--border-strong)] transition-all duration-500">
                  <div className="relative w-full h-full rounded-[22px] sm:rounded-[28px] overflow-hidden bg-[#FAF9F5]">
                    <Image
                      key={activeSlide.id}
                      src={activeSlide.photo}
                      alt={`BlinkQuest official screen: ${activeSlide.title}`}
                      fill
                      sizes="(max-width: 768px) 85vw, 360px"
                      className="object-cover object-top transition-opacity duration-300"
                      priority
                    />
                  </div>

                  {/* Floating Glass Telemetry Chip: Top Right */}
                  <div className="absolute -top-3 -right-2 sm:-right-4 z-30 px-3 py-1 rounded-full bg-[var(--surface)]/95 backdrop-blur-md border border-[var(--border-strong)] shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-[var(--sage)] animate-pulse" />
                    <span className="text-[10.5px] font-bold text-[var(--ink)]">478 Mesh · 30 FPS</span>
                  </div>

                  {/* Floating Glass Telemetry Pill: Bottom Left */}
                  <div className="absolute -bottom-3 -left-2 sm:-left-4 z-30 px-3 py-1.5 rounded-xl bg-[var(--surface)]/95 backdrop-blur-md border border-[var(--border-strong)] shadow-md flex items-center gap-2 whitespace-nowrap">
                    <activeSlide.icon className="w-3.5 h-3.5 text-[var(--terracotta)]" />
                    <div>
                      <p className="text-[10px] font-bold text-[var(--ink)] leading-tight">{activeSlide.badge}</p>
                    </div>
                  </div>

                  {/* Tactile Side Navigation Buttons */}
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous screen"
                    className="absolute -left-3.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-[var(--surface)] text-[var(--ink)] border border-[var(--border)] shadow-sm flex items-center justify-center hover:bg-[var(--surface2)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next screen"
                    className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-[var(--surface)] text-[var(--ink)] border border-[var(--border)] shadow-sm flex items-center justify-center hover:bg-[var(--surface2)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STAGE VARIANT 2: Interactive Live Gaze & Battery Simulator */}
            {activeMode === 'live-simulator' && (
              <div className="relative w-full max-w-[440px] p-5 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-lg animate-in fade-in duration-300">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--terracotta)] animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                      Live Ocular Telemetry Simulation
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={resetSimulation}
                    className="text-xs text-[var(--ink-muted)] hover:text-[var(--ink)] flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                </div>

                {/* Simulated Ocular Telemetry Dashboard */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-[var(--surface2)]/80 border border-[var(--border)] text-left">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink-muted)] block">
                      Eye Battery Level
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-serif font-bold text-[var(--terracotta-strong)]">
                        {simulatedBattery}%
                      </span>
                      <span className="text-[10px] font-semibold text-[var(--sage)]">
                        {simulatedBattery >= 95 ? 'Fully Charged' : 'Active'}
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 rounded-full bg-[var(--surface3)] mt-2 overflow-hidden">
                      <div
                        className="h-full bg-[var(--terracotta)] transition-all duration-300"
                        style={{ width: `${simulatedBattery}%` }}
                      />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[var(--surface2)]/80 border border-[var(--border)] text-left">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink-muted)] block">
                      Blink Cadence
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-serif font-bold text-[var(--ink)]">
                        {simulatedBlinkCount}
                      </span>
                      <span className="text-[10px] text-[var(--ink-muted)]">blinks/min</span>
                    </div>
                    <span className="text-[10px] font-medium text-[var(--sage)] mt-1.5 block">
                      {simulatedBlinkCount >= 18 ? 'Optimal Tear Film' : 'Screen Fatigue Zone'}
                    </span>
                  </div>
                </div>

                {/* Interactive Simulator Gaze Target */}
                <div className="mt-4 p-5 rounded-2xl bg-[var(--surface2)]/50 border border-[var(--border)] relative overflow-hidden flex flex-col items-center justify-center min-h-[170px]">
                  {isSimulating ? (
                    <div className="text-center space-y-2 animate-in fade-in duration-200">
                      <div className="relative w-12 h-12 mx-auto flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--terracotta)] opacity-40" />
                        <span className="relative w-8 h-8 rounded-full bg-[var(--terracotta)] text-white flex items-center justify-center">
                          <Eye className="w-4 h-4 animate-bounce" />
                        </span>
                      </div>
                      <p className="text-xs font-bold text-[var(--ink)]">Pupil Gaze Verified · MediaPipe 478 Mesh</p>
                      <p className="text-[11px] text-[var(--ink-muted)]">
                        Spontaneous blink detected · Recharging ocular moisture
                      </p>
                    </div>
                  ) : (
                    <div className="text-center space-y-1.5">
                      <p className="text-xs font-bold text-[var(--ink)]">Ready for 5-Second Break Simulation</p>
                      <p className="text-[11px] text-[var(--ink-secondary)] max-w-xs mx-auto">
                        Tap below to simulate an on-device camera verification pulse that recharges your Eye Battery.
                      </p>
                    </div>
                  )}
                </div>

                {/* Simulator Action Button */}
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={triggerSimulation}
                    disabled={isSimulating || simulatedBattery >= 100}
                    className="w-full py-3 px-4 rounded-full bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] disabled:opacity-60 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>
                      {isSimulating
                        ? 'Simulating Eye Break Verification...'
                        : simulatedBattery >= 100
                        ? 'Eye Battery 100% Fully Restored!'
                        : 'Trigger 5-Second Blink Verification'}
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* STAGE VARIANT 3: Studio Banner (Official Editorial Asset) */}
            {activeMode === 'studio-banner' && (
              <div className="relative w-full max-w-[500px] rounded-3xl overflow-hidden bg-[var(--surface)] border border-[var(--border)] shadow-xl animate-in fade-in duration-300">
                <div className="relative aspect-[1794/876] w-full">
                  <Image
                    src="/assets/brand/banner.png"
                    alt="BlinkQuest official brand banner with phone on wooden stand and spectacles"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-4 bg-[var(--surface)] border-t border-[var(--border)] text-left flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-[var(--ink)]">BlinkQuest Official Studio Banner</h3>
                    <p className="text-[11px] text-[var(--ink-secondary)] mt-0.5">
                      Playful activities. Healthier eye habits. Real Moto G71 hardware.
                    </p>
                  </div>
                  <a
                    href="/assets/brand/banner.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[var(--surface2)] hover:bg-[var(--surface3)] text-[var(--ink-secondary)]"
                    aria-label="View full resolution banner"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}

            {/* Bottom Dots & Slide Indicator */}
            {activeMode === 'spatial-deck' && (
              <div className="mt-5 text-center flex flex-col items-center">
                <div className="flex items-center justify-center gap-1.5">
                  {slides.map((s, index) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        currentIndex === index
                          ? 'w-7 bg-[var(--terracotta)]'
                          : 'w-2 bg-[var(--border-strong)] hover:bg-[var(--ink-muted)]'
                      }`}
                    />
                  ))}
                </div>

                <div className="mt-2 text-xs font-semibold text-[var(--ink)]">
                  <span>{activeSlide.title}</span>
                  <span className="text-[var(--ink-muted)] font-normal"> · {activeSlide.subtitle}</span>
                </div>

                {/* Mobile Quick Pills */}
                <div className="sm:hidden mt-3 flex flex-wrap gap-1.5 justify-center max-w-xs">
                  {slides.map((s, index) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all ${
                        currentIndex === index
                          ? 'bg-[var(--terracotta)] text-white shadow-xs'
                          : 'bg-[var(--surface2)] text-[var(--ink-secondary)]'
                      }`}
                    >
                      {s.tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Panoramic Studio Banner Showcase Strip */}
        <div className="mt-14 pt-10 border-t border-[var(--border)]">
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[var(--border-strong)] shadow-xl bg-[var(--surface)] group">
            <div className="relative aspect-[1794/876] w-full max-h-[440px]">
              <Image
                src="/assets/brand/banner.png"
                alt="BlinkQuest official brand banner: Make eye breaks a little more fun"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-5 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                <div className="max-w-lg">
                  <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/80">
                    Official Release Showcase
                  </span>
                  <p className="font-serif text-lg sm:text-2xl font-bold text-white mt-0.5 leading-snug">
                    Designed for natural focus, not digital fatigue.
                  </p>
                  <p className="text-xs text-white/80 mt-1 max-w-md hidden sm:block">
                    Every ocular exercise runs locally with sub-second MediaPipe iris mesh tracking. Zero video buffers stored.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={getAppHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[var(--ink)] text-xs font-bold shadow-md hover:bg-[var(--paper)] transition-all"
                  >
                    <span>Download App</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
