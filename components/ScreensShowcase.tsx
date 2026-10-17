'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Sparkles, Eye, Shield, Activity, Smartphone, Layers, CheckCircle2 } from 'lucide-react'

const screens = [
  {
    id: 'dashboard',
    title: 'Home Dashboard & Eye Battery',
    subtitle: 'Daily ocular wellness score, 20-20-20 countdown & quick mindful actions',
    image: '/assets/screenshots/01_home_dashboard.png',
    badge: 'Daily Command Center',
    highlights: [
      'Circular Eye Battery gauge based on blink cadence & session duration',
      'One-tap start for guided 20-second distant gaze rests',
      'Dynamic insight chips warning before eye dryness occurs',
      'Clean squircle design following physical spring touch dynamics',
    ],
  },
  {
    id: 'activities',
    title: 'Mindful Games & Eye Bloom',
    subtitle: 'Interactive ocular exercises designed to stimulate meibomian glands',
    image: '/assets/screenshots/04_mindful_games.png',
    badge: 'Gamified Wellness',
    highlights: [
      'Blink Bloom: Complete blinks blossom animated organic petals',
      'Focus Point: Near-to-far accommodation stretch to relax ciliary muscles',
      'Palming ritual: Guided warm darkness rest for optic nerve recovery',
      'Zero competitive pressure: calm, meditative wellness pacing',
    ],
  },
  {
    id: 'trends',
    title: 'Trends & Fatigue Analytics',
    subtitle: 'Longitudinal graphs of blink frequency and daily screen time fatigue',
    image: '/assets/screenshots/05_wellness_trends.png',
    badge: 'Longitudinal Insights',
    highlights: [
      'Hourly blink rate bar charts comparing screen sessions to rest',
      'Incomplete blink percentage tracking to spot dry eye risk factors',
      'Weekly fatigue curves to optimize your study or coding schedule',
      'Saved strictly in local SQLite with 1-click total data wipe',
    ],
  },
  {
    id: 'privacy',
    title: '100% Offline & Private by Design',
    subtitle: 'No cloud APIs, no tracking cookies, no camera frame recording',
    image: '/assets/screenshots/06_privacy_offline.png',
    badge: 'Privacy Architecture',
    highlights: [
      'Camera frames are processed in volatile RAM by MediaPipe and dropped instantly',
      'No account creation, email sign-in, or user profiling required',
      'Works in full Airplane mode with zero internet connection',
      'Export or delete all local history in standard JSON format anytime',
    ],
  },
  {
    id: 'pip',
    title: 'Floating PiP HUD Multitasking',
    subtitle: 'Monitor eye fatigue while coding, reading, or watching videos',
    image: '/assets/screenshots/03_pip_multitasking.png',
    badge: 'Picture-in-Picture',
    highlights: [
      'Subtle non-intrusive floating indicator stays over any Android app',
      'Soft color shift from green to amber as your blink rate slows down',
      'Double tap to dismiss or expand into full wellness coaching',
      'Low CPU footprint with hardware accelerated Android PipActivity',
    ],
  },
]

export function ScreensShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const current = screens[activeTab]

  return (
    <section className="py-20 md:py-32 bg-[#F0EEE6]/50 border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[var(--border)] text-xs font-semibold text-[#DA7756]">
            <Smartphone className="w-3.5 h-3.5" />
            <span>App Interface Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#262624]">
            Crafted for tranquility and focus.
          </h2>
          <p className="text-base sm:text-lg text-[#5F5B56]">
            Every screen in BlinkQuest is built with tactile squircle surfaces, warm organic tones, and physical spring animations that soothe visual overstimulation.
          </p>
        </div>

        {/* Tab pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {screens.map((screen, idx) => (
            <button
              key={screen.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap active:scale-95 ${
                activeTab === idx
                  ? 'bg-[#262624] text-white shadow-sm'
                  : 'bg-[#FFFFFF] text-[#5F5B56] hover:bg-[#E5E2D9] border border-[var(--border)]'
              }`}
            >
              {screen.title.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Showcase presentation card */}
        <div className="rounded-[36px] bg-[#FFFFFF] border border-[var(--border-strong)] p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Details side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DA7756]/10 text-[#DA7756] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{current.badge}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#262624] leading-tight">
              {current.title}
            </h3>

            <p className="text-base text-[#5F5B56] leading-relaxed">
              {current.subtitle}
            </p>

            <div className="space-y-3 pt-2">
              {current.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4E7A4C]/15 text-[#4E7A4C] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-[#262624] font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[var(--border)] flex items-center gap-4 text-xs text-[#736E68]">
              <span className="flex items-center gap-1 font-semibold text-[#262624]">
                <Shield className="w-4 h-4 text-[#4E7A4C]" /> 100% Offline
              </span>
              <span>•</span>
              <span>Native Kotlin Squircle View</span>
              <span>•</span>
              <span>PressableScale Springs</span>
            </div>
          </div>

          {/* Device Mockup side */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[9/19.5] rounded-[44px] p-2 bg-[#262624] shadow-2xl border-4 border-[#3A3834] ring-1 ring-black/10">
              {/* Camera punch hole */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black z-20" />
              
              {/* Screen container */}
              <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#FAF9F5]">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 340px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
