'use client'

import { useState, useEffect } from 'react'
import { Play, RotateCcw, Check, Eye, Compass, Bell } from 'lucide-react'

export function OcularSimulator() {
  const [active, setActive] = useState(false)
  const [seconds, setSeconds] = useState(20)
  const [completed, setCompleted] = useState(false)
  const [blinksSimulated, setBlinksSimulated] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (active && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((s) => s - 1)
        if (Math.random() > 0.6) {
          setBlinksSimulated((b) => b + 1)
        }
      }, 1000)
    } else if (seconds === 0 && active) {
      setActive(false)
      setCompleted(true)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [active, seconds])

  const handleReset = () => {
    setActive(false)
    setSeconds(20)
    setCompleted(false)
    setBlinksSimulated(0)
  }

  const toggle = () => {
    if (completed) handleReset()
    setActive(!active)
  }

  const progress = ((20 - seconds) / 20) * 100

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-[var(--bg)] via-[var(--surface2)]/40 to-[var(--bg)]">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--terracotta)]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 relative">
        <div className="glass-card p-8 sm:p-14 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--sage-subtle)] text-[var(--sage)] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            Interactive 20-20-20 Micro-Break
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--ink)] leading-tight">
            Rest your ciliary muscles right now.
          </h2>

          <p className="text-base sm:text-lg text-[var(--ink-secondary)] max-w-xl mx-auto leading-relaxed">
            Look away from this screen. Target any object at least 20 feet (6 meters) away for 20 seconds. Relax your brow, lower your shoulders, and blink gently.
          </p>

          {/* Interactive Timer & SVG Ring */}
          <div className="py-4 flex flex-col items-center justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="112"
                  cy="112"
                  r="96"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="none"
                  className="text-[var(--surface2)]"
                />
                <circle
                  cx="112"
                  cy="112"
                  r="96"
                  stroke="var(--terracotta)"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={603}
                  strokeDashoffset={603 - (603 * progress) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-linear"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1">
                {completed ? (
                  <div className="w-16 h-16 rounded-full bg-[var(--sage)] text-white flex items-center justify-center animate-bounce shadow-lg">
                    <Check className="w-8 h-8" />
                  </div>
                ) : (
                  <>
                    <span className="font-serif text-5xl font-extrabold text-[var(--ink)]">
                      {seconds}
                      <span className="text-2xl font-normal text-[var(--ink-muted)]">s</span>
                    </span>
                    <span className="text-xs uppercase tracking-widest font-bold text-[var(--terracotta)]">
                      {active ? 'Gazing Afar' : 'Tap to Start'}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Status & Feedback */}
            <div className="mt-6 h-7 text-sm sm:text-base font-semibold text-[var(--ink)]">
              {completed
                ? '✨ Break complete! Tear film replenished and eye muscles eased.'
                : active
                ? 'Keep your gaze relaxed across the room... breathing gently'
                : 'Click Start, then look out a window or down a long hallway.'}
            </div>

            {/* Interactive Stats during the break */}
            {active || completed ? (
              <div className="mt-4 flex items-center gap-6 text-xs text-[var(--ink-muted)]">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-[var(--sage)]" />
                  {blinksSimulated} Mindful Blinks
                </span>
                <span className="flex items-center gap-1.5">
                  <Bell className="w-4 h-4 text-[var(--terracotta)]" />
                  Pupil Accommodation Reset
                </span>
              </div>
            ) : null}

            {/* Controls */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={toggle}
                className="btn-primary"
              >
                {completed ? (
                  <>
                    <RotateCcw className="w-4 h-4" />
                    <span>Take Another Break</span>
                  </>
                ) : active ? (
                  <>
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Start 20s Break</span>
                  </>
                )}
              </button>

              {(active || seconds < 20) && !completed ? (
                <button
                  onClick={handleReset}
                  className="btn-secondary"
                  title="Reset break timer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset</span>
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
