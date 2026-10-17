'use client'

import { useState } from 'react'
import { AlertCircle, CheckCircle2, Flame, RefreshCw, Smartphone, Monitor, ShieldCheck, ArrowRight } from 'lucide-react'
import { getAppHref, getAppLabel } from '@/lib/site'

interface Symptom {
  id: string
  label: string
  weight: number
}

const symptomsList: Symptom[] = [
  { id: 'dry', label: 'Dry or gritty eyes by afternoon', weight: 15 },
  { id: 'headache', label: 'Tension headaches after long screen blocks', weight: 18 },
  { id: 'blur', label: 'Temporary blurred vision when looking up', weight: 16 },
  { id: 'stare', label: 'Staring without blinking while coding/reading', weight: 20 },
  { id: 'contacts', label: 'Wear contact lenses during work', weight: 12 },
  { id: 'glare', label: 'Eye fatigue from screen glare or low room light', weight: 10 },
]

export function EyeStrainCalculator() {
  const [screenHours, setScreenHours] = useState<number>(8)
  const [deviceType, setDeviceType] = useState<'desktop' | 'mobile' | 'multi'>('multi')
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(['dry', 'stare'])

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  // Calculate Digital Eye Strain (DES) Score (0 - 100)
  const baseHoursScore = Math.min(screenHours * 4.5, 45)
  const deviceMultiplier = deviceType === 'multi' ? 1.25 : deviceType === 'desktop' ? 1.1 : 1.0
  const symptomsScore = selectedSymptoms.reduce((acc, curr) => {
    const item = symptomsList.find((s) => s.id === curr)
    return acc + (item ? item.weight : 0)
  }, 0)

  const rawScore = Math.round((baseHoursScore + symptomsScore) * deviceMultiplier)
  const score = Math.min(Math.max(rawScore, 12), 99)

  let riskTier: { label: string; color: string; bg: string; description: string; routine: string }
  if (score < 40) {
    riskTier = {
      label: 'Mild Fatigue',
      color: 'text-[var(--sage)]',
      bg: 'bg-[var(--sage-subtle)]',
      description: 'Your eyes are managing well, but prolonged sessions can quietly reduce your spontaneous tear film refresh rate.',
      routine: '1x Daily Orb Pop + 20-20-20 Micro-break at lunchtime.',
    }
  } else if (score < 70) {
    riskTier = {
      label: 'Moderate Digital Strain',
      color: 'text-[var(--amber)]',
      bg: 'bg-[var(--amber-subtle)]',
      description: 'Frequent blink suppression detected. Ciliary muscles are locked in static accommodation, leading to dry spot formation.',
      routine: '2x Daily Gaze Games (Orbit Follow & Focus Garden) + hourly camera-checked blink reset.',
    }
  } else {
    riskTier = {
      label: 'High Digital Eye Strain (CVS)',
      color: 'text-[var(--terracotta)]',
      bg: 'bg-[var(--terracotta-subtle)]',
      description: 'Severe tear evaporation risk. Screen focus is suppressing your spontaneous blinks by over 60%, straining optic nerves.',
      routine: 'Strict 20-20-20 cycle with Blink Bloom and full Eye Battery recharge twice every work block.',
    }
  }

  return (
    <section id="eye-strain-calculator" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-[var(--bg)] via-[var(--surface2)]/40 to-[var(--bg)]">
      {/* Decorative ambient aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--terracotta)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface)] text-[var(--terracotta-strong)] text-xs font-bold uppercase tracking-wider border border-[var(--border)] shadow-2xs">
            <Flame className="w-3.5 h-3.5 text-[var(--terracotta)]" />
            Interactive Assessment
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
            Calculate your Digital Eye Strain index.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
            See how your daily screen habits affect spontaneous blink rates and meibomian gland tear film health.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <div className="md:col-span-7 p-7 sm:p-10 rounded-[32px] bg-[var(--surface)] border border-[var(--border-strong)] shadow-md space-y-8">
            {/* Slider 1: Screen Hours */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="screen-hours" className="text-sm font-bold text-[var(--ink)] flex items-center gap-2">
                  <span>Daily Screen Exposure:</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[var(--surface2)] font-mono text-xs font-bold text-[var(--terracotta-strong)]">
                    {screenHours} hours/day
                  </span>
                </label>
                <span className="text-xs text-[var(--ink-muted)]">Work + Mobile</span>
              </div>
              <input
                id="screen-hours"
                type="range"
                min="2"
                max="16"
                step="1"
                value={screenHours}
                onChange={(e) => setScreenHours(Number(e.target.value))}
                className="mt-4 w-full h-2 rounded-lg bg-[var(--surface2)] accent-[var(--terracotta)] cursor-pointer"
              />
              <div className="mt-1.5 flex justify-between text-[11px] text-[var(--ink-muted)] font-medium">
                <span>2 hrs (Light)</span>
                <span>8 hrs (Standard)</span>
                <span>16 hrs (Intensive)</span>
              </div>
            </div>

            {/* Device Environment Selection */}
            <div>
              <label className="text-sm font-bold text-[var(--ink)] block mb-3">Primary Screen Setup</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'desktop', label: 'Single Monitor', icon: Monitor },
                  { id: 'multi', label: 'Dual / Ultrawide', icon: Monitor },
                  { id: 'mobile', label: 'Phone & Tablet', icon: Smartphone },
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setDeviceType(id as any)}
                    className={`p-3.5 rounded-2xl border text-xs font-semibold flex flex-col items-center gap-2 transition-all ${
                      deviceType === id
                        ? 'bg-[var(--terracotta-subtle)] border-[var(--terracotta)] text-[var(--terracotta-strong)] shadow-xs'
                        : 'bg-[var(--surface2)]/50 border-[var(--border)] text-[var(--ink-secondary)] hover:bg-[var(--surface2)]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Symptoms Checklist */}
            <div>
              <label className="text-sm font-bold text-[var(--ink)] block mb-3">Noticeable Symptoms (Select all that apply)</label>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {symptomsList.map((symptom) => {
                  const isChecked = selectedSymptoms.includes(symptom.id)
                  return (
                    <button
                      key={symptom.id}
                      type="button"
                      onClick={() => toggleSymptom(symptom.id)}
                      className={`p-3 rounded-xl border text-left text-xs font-medium flex items-center gap-2.5 transition-all ${
                        isChecked
                          ? 'bg-[var(--surface2)] border-[var(--terracotta)] text-[var(--ink)] font-semibold shadow-xs'
                          : 'bg-transparent border-[var(--border)] text-[var(--ink-secondary)] hover:bg-[var(--surface2)]/40'
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border ${
                          isChecked
                            ? 'bg-[var(--terracotta)] border-[var(--terracotta)] text-white'
                            : 'border-[var(--ink-muted)]/40'
                        }`}
                      >
                        {isChecked ? <CheckCircle2 className="w-3.5 h-3.5" /> : null}
                      </span>
                      <span>{symptom.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Results Score Gauge Column */}
          <div className="md:col-span-5 p-7 sm:p-10 rounded-[32px] bg-gradient-to-br from-[#1E1D1B] via-[#252421] to-[#151413] text-white shadow-xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-white/60">Calculated DES Index</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${riskTier.bg} ${riskTier.color}`}>
                  {riskTier.label}
                </span>
              </div>

              {/* Dynamic Score Ring */}
              <div className="mt-8 flex items-baseline gap-3">
                <span className="font-serif text-6xl sm:text-7xl font-extrabold tracking-tight text-white leading-none">
                  {score}
                </span>
                <span className="text-xl text-white/50 font-normal">/ 100</span>
              </div>

              <div className="mt-3 w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[var(--sage)] via-[var(--amber)] to-[var(--terracotta)] transition-all duration-500 ease-out"
                  style={{ width: `${score}%` }}
                />
              </div>

              <p className="mt-6 text-sm text-white/80 leading-relaxed">
                {riskTier.description}
              </p>

              {/* Prescribed Routine Block */}
              <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-xs font-bold uppercase tracking-wider text-[#E58A6B]">Recommended Daily Routine</p>
                <p className="mt-1.5 text-xs text-white/90 font-medium leading-relaxed">
                  {riskTier.routine}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href={getAppHref}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white font-bold text-sm shadow-[0_10px_25px_-5px_rgba(217,107,67,0.5)] transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>{getAppLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="mt-3 text-center text-[11px] text-white/50 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--sage)]" />
                100% on-device blink scanner · Zero video recordings
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
