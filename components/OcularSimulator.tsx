'use client'

import { useState, useEffect } from 'react'
import { Play, Pause, RotateCcw, Eye, Sparkles, Check } from 'lucide-react'

export function OcularSimulator() {
  const [active, setActive] = useState(false)
  const [seconds, setSeconds] = useState(20)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (active && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((s) => s - 1)
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
  }

  const toggle = () => {
    if (completed) handleReset()
    setActive(!active)
  }

  const progress = ((20 - seconds) / 20) * 100

  return (
    <section className="py-20 bg-[#FAF9F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-[36px] bg-[#FFFFFF] border border-[var(--border)] p-8 sm:p-12 shadow-lg text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4E7A4C]/10 text-[#4E7A4C] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Web Experience</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#262624]">
            Try a 20-second 20-20-20 Eye Rest now
          </h2>

          <p className="text-base text-[#5F5B56] max-w-xl mx-auto">
            Look away from this screen and focus on an object at least 20 feet (6 meters) away for 20 seconds. Relax your brow and blink fully.
          </p>

          {/* Interactive timer ring */}
          <div className="py-6 flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 flex items-center justify-center">
              {/* SVG Ring */}
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="88"
                  cy="88"
                  r="76"
                  stroke="#F0EEE6"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="88"
                  cy="88"
                  r="76"
                  stroke="#DA7756"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={477}
                  strokeDashoffset={477 - (477 * progress) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-linear"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1">
                {completed ? (
                  <div className="w-12 h-12 rounded-full bg-[#4E7A4C] text-white flex items-center justify-center animate-bounce">
                    <Check className="w-6 h-6" />
                  </div>
                ) : (
                  <>
                    <span className="font-serif text-4xl font-bold text-[#262624]">
                      {seconds}s
                    </span>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#736E68]">
                      {active ? 'Gaze Afar' : 'Ready'}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Status instruction */}
            <div className="mt-4 h-6 text-sm font-medium text-[#262624]">
              {completed
                ? '✨ Tear film refreshed! Ciliary eye muscles relaxed.'
                : active
                ? 'Softly blink twice and breathe gently...'
                : 'Click start to begin your break'}
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={toggle}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#DA7756] hover:bg-[#C86747] text-white font-semibold text-sm shadow-md transition-all active:scale-95"
              >
                {active ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{completed ? 'Repeat Rest' : active ? 'Pause' : 'Start 20s Rest'}</span>
              </button>

              <button
                onClick={handleReset}
                className="p-3 rounded-full bg-[#F0EEE6] hover:bg-[#E5E2D9] text-[#262624] transition-colors"
                aria-label="Reset timer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
