import Link from 'next/link'
import Image from 'next/image'
import { Eye, Shield, Smartphone, BatteryCharging, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react'

export function FeatureBento() {
  return (
    <section className="py-20 md:py-32 bg-[#FAF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[var(--border)] text-xs font-semibold text-[#DA7756]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ergonomics & Intelligence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#262624]">
            Every feature engineered for eye relief.
          </h2>
          <p className="text-base sm:text-lg text-[#5F5B56]">
            Most timers just interrupt you. BlinkQuest understands your natural blink rhythm and guides you back into visual ease.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Eye Battery (Large 2-col) */}
          <div className="md:col-span-2 rounded-[32px] bg-[#FFFFFF] border border-[var(--border)] p-8 sm:p-10 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4 max-w-md">
              <div className="w-12 h-12 rounded-2xl bg-[#DA7756]/15 text-[#DA7756] flex items-center justify-center">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#262624]">
                The Eye Battery: your visual stamina at a glance.
              </h3>
              <p className="text-sm sm:text-base text-[#5F5B56] leading-relaxed">
                Rather than arbitrary scores, the Eye Battery models your ocular endurance using verified ergonomic variables: session duration, blink interval gaps, and rest cadence. When fatigue sets in, the app gently nudges you before dryness triggers a headache.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-wrap items-center gap-6 text-xs text-[#736E68]">
              <span className="font-semibold text-[#262624]">Cadence decay model</span>
              <span>•</span>
              <span>Automatic rest recharge</span>
              <span>•</span>
              <span>Configurable sensitivity</span>
            </div>
          </div>

          {/* Card 2: 100% Privacy */}
          <div className="rounded-[32px] bg-[#FFFFFF] border border-[var(--border)] p-8 sm:p-10 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#4E7A4C]/15 text-[#4E7A4C] flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#262624]">
                Your face never leaves your phone.
              </h3>
              <p className="text-sm text-[#5F5B56] leading-relaxed">
                Camera access runs through local Google MediaPipe on-device models. Frames exist in RAM for a fraction of a millisecond and are destroyed immediately. Zero cloud uploads, zero user accounts.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/privacy"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4E7A4C] hover:underline"
              >
                <span>Read our local privacy audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Floating PiP Multitasking */}
          <div className="rounded-[32px] bg-[#FFFFFF] border border-[var(--border)] p-8 sm:p-10 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#DA7756]/15 text-[#DA7756] flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#262624]">
                Floating PiP HUD over any workflow.
              </h3>
              <p className="text-sm text-[#5F5B56] leading-relaxed">
                Whether writing code in Termux, reading papers in Acrobat, or playing games, the floating picture-in-picture widget keeps an unobtrusive pulse on your blink health in the corner.
              </p>
            </div>

            <div className="mt-6 text-xs text-[#736E68]">
              Seamless Android Picture-in-Picture mode
            </div>
          </div>

          {/* Card 4: Mindful Eye Bloom Exercises (Large 2-col) */}
          <div className="md:col-span-2 rounded-[32px] bg-[#FFFFFF] border border-[var(--border)] p-8 sm:p-10 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4 max-w-lg">
              <div className="w-12 h-12 rounded-2xl bg-[#4E7A4C]/15 text-[#4E7A4C] flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#262624]">
                Gamified exercises that soothe, not stimulate.
              </h3>
              <p className="text-sm sm:text-base text-[#5F5B56] leading-relaxed">
                Take 60-second timeouts with Blink Bloom, Focus Point, and Palming. These are based on optometrist-recommended ocular motility patterns that stimulate the eyelid meibomian glands and restore natural tear film uniformity.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-[#736E68]">
                <span className="font-semibold text-[#262624]">Focus Point</span>
                <span>•</span>
                <span className="font-semibold text-[#262624]">Blink Bloom</span>
                <span>•</span>
                <span className="font-semibold text-[#262624]">Guided Palming</span>
              </div>
              <Link
                href="/features"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DA7756] hover:underline"
              >
                <span>Explore all exercises</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
