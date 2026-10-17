'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Shield, Sparkles, ArrowRight, Play, CheckCircle2, Eye, BatteryCharging } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Subtle organic background mesh */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#DA7756]/08 via-[#4E7A4C]/05 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top pill badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[var(--border)] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#4E7A4C] animate-pulse" />
            <span className="text-xs font-semibold text-[#262624]">
              Local-First Vision Care for Android 10+
            </span>
            <span className="text-xs text-[#736E68]">•</span>
            <span className="text-xs text-[#DA7756] font-medium">100% On-Device AI</span>
          </div>
        </div>

        {/* Main headline in Fraunces serif */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#262624] leading-[1.08]">
            Mindful blinking for the{' '}
            <span className="italic font-normal text-[#DA7756]">screen age.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#5F5B56] leading-relaxed max-w-2xl mx-auto">
            Screen use reduces your natural blink rate by up to 66%, causing dry eyes and digital strain. BlinkQuest measures your blinks locally, restores your tear film with 20-20-20 breaks, and never sends a single frame to the cloud.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/download"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#DA7756] hover:bg-[#C86747] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              <span>Download BlinkQuest Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFFFFF] hover:bg-[#F0EEE6] text-[#262624] text-base font-semibold border border-[var(--border)] transition-colors active:scale-95"
            >
              <span>See How It Works</span>
            </Link>
          </div>

          {/* Trust bullets */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 pt-4 text-xs font-medium text-[#736E68]">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4E7A4C]" />
              Zero telemetry / No accounts
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4E7A4C]" />
              Floating PiP over any app
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#4E7A4C]" />
              Open architecture
            </span>
          </div>
        </div>

        {/* Hero Visual: Editorial Photography + Real App Mockup Frame */}
        <div className="mt-14 relative rounded-[32px] overflow-hidden border border-[var(--border-strong)] shadow-2xl bg-[#FFFFFF]">
          {/* Photography Banner */}
          <div className="relative aspect-[16/9] w-full max-h-[560px]">
            <Image
              src="/assets/design/blinkquest-hero-banner.jpg"
              alt="BlinkQuest editorial still life with spectacles and terracotta pottery"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#262624]/80 via-transparent to-black/20" />
            
            {/* Caption badge in photograph */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
              <div className="max-w-md space-y-1">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#FAF9F5]/70">
                  Mindful Eye Care Philosophy
                </span>
                <p className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Designed for quiet focus, not digital anxiety.
                </p>
                <p className="text-xs text-white/80">
                  Subtle haptic pulses remind you to blink completely without intrusive alarms.
                </p>
              </div>

              {/* Floating Live Metric Pod */}
              <div className="bg-[#FAF9F5]/95 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl text-[#262624] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#DA7756]/15 flex items-center justify-center text-[#DA7756]">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold font-serif text-[#262624]">18.4</span>
                    <span className="text-xs font-semibold text-[#4E7A4C] bg-[#4E7A4C]/10 px-1.5 py-0.5 rounded-full">Optimal</span>
                  </div>
                  <p className="text-[11px] text-[#736E68]">Blinks / min (Healthy Tear Film)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-3xl bg-[#FFFFFF] border border-[var(--border)] shadow-xs">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#736E68]">On-Device AI</span>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#262624] mt-1">478</div>
            <p className="text-xs text-[#5F5B56] mt-1">Facial landmarks tracked in real-time by MediaPipe</p>
          </div>

          <div className="p-5 rounded-3xl bg-[#FFFFFF] border border-[var(--border)] shadow-xs">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#736E68]">Cloud Uploads</span>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#4E7A4C] mt-1">0 kB</div>
            <p className="text-xs text-[#5F5B56] mt-1">Zero frames or video buffers ever leave your hardware</p>
          </div>

          <div className="p-5 rounded-3xl bg-[#FFFFFF] border border-[var(--border)] shadow-xs">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#736E68]">Break Cadence</span>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#DA7756] mt-1">20-20-20</div>
            <p className="text-xs text-[#5F5B56] mt-1">Automated 20s distant focus rest every 20 minutes</p>
          </div>

          <div className="p-5 rounded-3xl bg-[#FFFFFF] border border-[var(--border)] shadow-xs">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#736E68]">Multitasking</span>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#262624] mt-1">PiP HUD</div>
            <p className="text-xs text-[#5F5B56] mt-1">Floats over VS Code, YouTube, Chrome & Kindle</p>
          </div>
        </div>
      </div>
    </section>
  )
}
