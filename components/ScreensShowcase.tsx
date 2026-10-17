'use client'

import { useState } from 'react'
import { PhoneFrame } from '@/components/PhoneFrame'
import { Sparkles, Activity, Eye, Compass, Moon, ArrowRight } from 'lucide-react'

const screens = [
  {
    id: 'battery',
    title: 'The Eye Battery',
    label: 'Daily Fatigue Model',
    icon: Sparkles,
    src: '/assets/app/home.webp',
    description:
      'Starts fully charged at 100% every morning. As prolonged screen focus suppresses your blink rate, the battery drains into amber and coral. Completing verified breaks recharges it back to green.',
  },
  {
    id: 'exercises',
    title: 'Exercise Sanctuary',
    label: '8 Targeted Modalities',
    icon: Activity,
    src: '/assets/app/activities.webp',
    description:
      'A curated collection of thirty-second ocular routines: pupil tracking, ciliary accommodation resets, and tear film lubrication exercises organized by immediate fatigue symptoms.',
  },
  {
    id: 'gaze',
    title: 'Gaze-Driven Games',
    label: 'Pupil Tracking',
    icon: Eye,
    src: '/assets/app/orbit-follow.webp',
    description:
      'Pop moving orbs and trace orbits purely with eye movements. MediaPipe filters out head tilts so your six extraocular eye muscles do the genuine physical work.',
  },
  {
    id: 'breaks',
    title: 'Verified 20-20-20 Breaks',
    label: 'Computer Vision Check',
    icon: Compass,
    src: '/assets/app/near-far.webp',
    description:
      'Most eye break apps are immediately dismissed. BlinkQuest checks your gaze through the front camera—if you do not look twenty feet away and complete real blinks, the timer waits.',
  },
  {
    id: 'focus',
    title: 'Focus Point & Breath',
    label: 'Ciliary Relaxation',
    icon: Moon,
    src: '/assets/app/focus-point.webp',
    description:
      'Thirty seconds of calming, gentle visual fixation paired with rhythmic breathing prompts to loosen tight brow muscles and ease ocular tension headaches.',
  },
]

export function ScreensShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeScreen = screens[activeIndex]

  return (
    <section className="py-24 md:py-32 bg-[var(--surface2)]/50 border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--terracotta-strong)]">
            Inside the App
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
            Designed for calm, focused minds.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
            Every screen captured directly from Android release builds. No mockups, no artificial marketing renders.
          </p>
        </div>

        {/* Interactive Walkthrough Grid */}
        <div className="mt-14 grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Dimension Tabs */}
          <div className="md:col-span-6 space-y-3">
            {screens.map((s, index) => {
              const Icon = s.icon
              const isSelected = activeIndex === index
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--surface)] border border-[var(--border)] shadow-xs'
                      : 'hover:bg-[var(--surface)]/50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--terracotta-strong)]">
                      {s.label}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[var(--terracotta)]' : 'text-[var(--ink-muted)]'}`} />
                  </div>
                  <h3 className="mt-1.5 text-lg font-bold text-[var(--ink)]">
                    {s.title}
                  </h3>
                  {isSelected ? (
                    <p className="mt-2 text-sm text-[var(--ink-secondary)] leading-relaxed animate-in fade-in duration-200">
                      {s.description}
                    </p>
                  ) : null}
                </button>
              )
            })}
          </div>

          {/* Right: Phone Presentation */}
          <div className="md:col-span-6 flex justify-center">
            <div className="w-full max-w-[320px] sm:max-w-[340px]">
              <PhoneFrame
                key={activeScreen.id}
                src={activeScreen.src}
                alt={`BlinkQuest screen: ${activeScreen.title}`}
                priority
              />
              <div className="mt-4 text-center">
                <span className="text-xs text-[var(--ink-muted)]">
                  Captured on Motorola Moto G71 (Android 12)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
