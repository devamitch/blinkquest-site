'use client'

import { useState, useEffect } from 'react'
import { Play, RotateCcw, Check, Eye, Compass, Bell, Volume2, VolumeX } from 'lucide-react'

export function OcularSimulator() {
  const [active, setActive] = useState(false)
  const [seconds, setSeconds] = useState(20)
  const [completed, setCompleted] = useState(false)
  const [blinksSimulated, setBlinksSimulated] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(true)

  const playChime = (freq = 528) => {
    if (!soundEnabled) return
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext
      if (!AudioCtx) return
      const ctx = new AudioCtx()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, ctx.currentTime)
      gain.gain.setValueAtTime(0.10, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 1.2)
    } catch {}
  }

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
      playChime(660)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [active, seconds, soundEnabled])

  const handleReset = () => {
    setActive(false)
    setSeconds(20)
    setCompleted(false)
    setBlinksSimulated(0)
  }

  const toggle = () => {
    if (completed) handleReset()
    if (!active) {
      playChime(440)
    }
    setActive(!active)
  }

  const progress = ((20 - seconds) / 20) * 100
  const breathState = seconds % 6 >= 3 ? 'Exhale slowly...' : 'Inhale deeply...'

  return (
    <section className="py-24 md:py-32 bg-[var(--surface2)]/40 border-y border-[var(--border)]">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <div className="p-8 sm:p-12 rounded-2xl bg-[var(--surface)] border border-[var(--border)] text-center space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--terracotta-strong)]">
              Interactive 20-20-20 Routine
            </span>

            <button
              type="button"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-lg bg-[var(--surface2)] text-[var(--ink-secondary)] hover:text-[var(--ink)] transition-colors cursor-pointer"
              title={soundEnabled ? 'Mute chimes' : 'Enable chimes'}
              aria-label={soundEnabled ? 'Mute sound' : 'Enable sound'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[var(--terracotta)]" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--ink)] leading-tight">
            Rest your ciliary eye muscles right now.
          </h2>

          <p className="text-base text-[var(--ink-secondary)] max-w-xl mx-auto leading-relaxed">
            Look away from this monitor. Focus on any object at least 20 feet away for 20 seconds. Relax your brow, lower your shoulders, and blink gently.
          </p>

          {/* Minimalist SVG Gauge */}
          <div className="py-4 flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="82"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  className="text-[var(--surface2)]"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="82"
                  stroke="var(--terracotta)"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={515}
                  strokeDashoffset={515 - (515 * progress) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-linear"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {completed ? (
                  <div className="w-12 h-12 rounded-full bg-[var(--sage)] text-white flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                ) : (
                  <>
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-[var(--ink)]">
                      {seconds}
                      <span className="text-xl font-normal text-[var(--ink-muted)]">s</span>
                    </span>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[var(--terracotta-strong)] mt-1">
                      {active ? 'Gazing Afar' : 'Tap Start'}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Breathing Prompt */}
            {active && !completed ? (
              <div className="mt-3 px-3.5 py-1 rounded-full bg-[var(--surface2)] text-xs font-semibold text-[var(--ink-secondary)]">
                {breathState}
              </div>
            ) : null}

            {/* Status Feedback */}
            <div className="mt-4 text-sm font-semibold text-[var(--ink)]">
              {completed
                ? '✨ Break complete! Tear film replenished and eye muscles eased.'
                : active
                ? 'Keep your gaze relaxed across the room... blinking naturally'
                : 'Click Start, then look out a window or down a long hallway.'}
            </div>

            {/* Live Stats */}
            {active || completed ? (
              <div className="mt-3 flex items-center gap-6 text-xs text-[var(--ink-muted)]">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[var(--sage)]" />
                  {blinksSimulated} Mindful Blinks
                </span>
                <span className="flex items-center gap-1.5">
                  <Bell className="w-3.5 h-3.5 text-[var(--terracotta)]" />
                  Ciliary Muscle Relaxed
                </span>
              </div>
            ) : null}

            {/* Controls */}
            <div className="mt-6 flex items-center gap-3">
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
                  <span>Pause</span>
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
