'use client'

import { useState } from 'react'
import { CheckCircle2, Monitor, Smartphone, ShieldCheck, ArrowRight } from 'lucide-react'
import { getAppHref, getAppLabel } from '@/lib/site'

interface Symptom {
  id: string
  label: string
  weight: number
}

const symptomsList: Symptom[] = [
  { id: 'dry', label: 'Dry or gritty feeling by afternoon', weight: 15 },
  { id: 'headache', label: 'Tension headaches around brows or temples', weight: 18 },
  { id: 'blur', label: 'Briefly blurred vision when looking up from screen', weight: 16 },
  { id: 'stare', label: 'Unconscious staring without blinking during code reviews', weight: 20 },
  { id: 'contacts', label: 'Wear contact lenses during work blocks', weight: 12 },
  { id: 'glare', label: 'Difficulty adjusting between dark IDEs and bright lights', weight: 10 },
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

  const baseHoursScore = Math.min(screenHours * 4.5, 45)
  const deviceMultiplier = deviceType === 'multi' ? 1.25 : deviceType === 'desktop' ? 1.1 : 1.0
  const symptomsScore = selectedSymptoms.reduce((acc, curr) => {
    const item = symptomsList.find((s) => s.id === curr)
    return acc + (item ? item.weight : 0)
  }, 0)

  const rawScore = Math.round((baseHoursScore + symptomsScore) * deviceMultiplier)
  const score = Math.min(Math.max(rawScore, 12), 99)

  let tier: { label: string; text: string; routine: string }
  if (score < 40) {
    tier = {
      label: 'Mild Tear Evaporation',
      text: 'Your blink cadence is relatively resilient, but unbroken focus blocks will slowly degrade your tear film stability.',
      routine: '1x Daily Orb Pop + a single 20-20-20 pause at midday.',
    }
  } else if (score < 70) {
    tier = {
      label: 'Moderate Digital Strain (CVS)',
      text: 'Screen concentration is actively cutting your spontaneous blinks by over 50%. Ciliary accommodation muscles are held under static tension.',
      routine: '2x Daily Gaze Games + camera-verified 20-20-20 pauses every 45 minutes.',
    }
  } else {
    tier = {
      label: 'Acute Corneal Fatigue',
      text: 'Severe tear film evaporation risk. The meibomian lipid layer is breaking down between blinks, causing chronic eye burn and headaches.',
      routine: 'Immediate hourly Blink Bloom sessions and full Eye Battery recharges.',
    }
  }

  return (
    <section id="assessment" className="py-24 md:py-32 bg-[var(--surface2)]/40 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--terracotta-strong)]">
            Self-Assessment
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
            Estimate your Digital Eye Strain index.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
            Based on clinical criteria from the American Optometric Association for Computer Vision Syndrome.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-12 gap-8 items-stretch">
          {/* Controls: Clean flat paper */}
          <div className="md:col-span-7 p-7 sm:p-9 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-7">
            {/* Screen Hours */}
            <div>
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="screen-hours" className="font-bold text-[var(--ink)]">
                  Daily Screen Exposure
                </label>
                <span className="font-mono text-xs font-bold text-[var(--terracotta-strong)]">
                  {screenHours} hours / day
                </span>
              </div>
              <input
                id="screen-hours"
                type="range"
                min="2"
                max="16"
                step="1"
                value={screenHours}
                onChange={(e) => setScreenHours(Number(e.target.value))}
                className="mt-3 w-full h-1.5 rounded-lg bg-[var(--surface2)] accent-[var(--terracotta)] cursor-pointer"
              />
              <div className="mt-1 flex justify-between text-[11px] text-[var(--ink-muted)]">
                <span>2 hrs (Light)</span>
                <span>8 hrs (Standard)</span>
                <span>16 hrs (Intensive)</span>
              </div>
            </div>

            {/* Display Setup */}
            <div>
              <span className="block text-sm font-bold text-[var(--ink)] mb-3">Primary Monitor Setup</span>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'desktop', label: 'Single Screen', icon: Monitor },
                  { id: 'multi', label: 'Dual / Ultrawide', icon: Monitor },
                  { id: 'mobile', label: 'Phone & Tablet', icon: Smartphone },
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setDeviceType(id as any)}
                    className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-2 transition-colors cursor-pointer ${
                      deviceType === id
                        ? 'bg-[var(--surface2)] border-[var(--border-strong)] text-[var(--ink)]'
                        : 'bg-transparent border-[var(--border)] text-[var(--ink-secondary)] hover:bg-[var(--surface2)]/50'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-[var(--ink-secondary)]" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Symptoms */}
            <div>
              <span className="block text-sm font-bold text-[var(--ink)] mb-3">Reported Symptoms</span>
              <div className="grid sm:grid-cols-2 gap-2">
                {symptomsList.map((symptom) => {
                  const isChecked = selectedSymptoms.includes(symptom.id)
                  return (
                    <button
                      key={symptom.id}
                      type="button"
                      onClick={() => toggleSymptom(symptom.id)}
                      className={`p-3 rounded-xl border text-left text-xs flex items-center gap-2.5 transition-colors cursor-pointer ${
                        isChecked
                          ? 'bg-[var(--surface2)] border-[var(--border-strong)] text-[var(--ink)] font-semibold'
                          : 'bg-transparent border-[var(--border)] text-[var(--ink-secondary)] hover:bg-[var(--surface2)]/40'
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                          isChecked
                            ? 'bg-[var(--terracotta)] border-[var(--terracotta)] text-white'
                            : 'border-[var(--border-strong)]'
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

          {/* Result Card: Calm, tone-on-tone natural paper */}
          <div className="md:col-span-5 p-7 sm:p-9 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-[var(--ink-muted)]">
                  Ocular Fatigue Index
                </span>
                <span className="text-xs font-bold text-[var(--terracotta-strong)]">
                  {tier.label}
                </span>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-serif text-5xl sm:text-6xl font-bold text-[var(--ink)]">
                  {score}
                </span>
                <span className="text-lg text-[var(--ink-muted)] font-normal">/ 100</span>
              </div>

              <div className="mt-3 w-full bg-[var(--surface2)] h-1.5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--terracotta)] transition-all duration-300 ease-out"
                  style={{ width: `${score}%` }}
                />
              </div>

              <p className="mt-6 text-sm text-[var(--ink-secondary)] leading-relaxed">
                {tier.text}
              </p>

              <div className="mt-6 p-4 rounded-xl bg-[var(--surface2)]/70 border border-[var(--border)]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--terracotta-strong)]">
                  Suggested Routine
                </p>
                <p className="mt-1 text-xs text-[var(--ink)] font-medium leading-relaxed">
                  {tier.routine}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border)]">
              <a href={getAppHref} className="btn-primary w-full text-center">
                <span>{getAppLabel}</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
              <p className="mt-3 text-center text-[11px] text-[var(--ink-muted)] flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--sage)]" />
                100% on-device inference · Zero cloud storage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
