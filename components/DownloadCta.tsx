import Link from 'next/link'
import Image from 'next/image'
import { Download, Shield, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export function DownloadCta() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF9F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-[40px] bg-gradient-to-br from-[#262624] to-[#1A1815] p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle warm glow background */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#DA7756]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-[#FAF9F5]">
              <Sparkles className="w-3.5 h-3.5 text-[#DA7756]" />
              <span>Available for Android 10+</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Give your eyes the daily rest they deserve.
            </h2>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Download BlinkQuest today. Instant install, zero account sign-up, no invasive permissions, and 100% on-device vision tracking.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={siteConfig.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#DA7756] hover:bg-[#C86747] text-white font-semibold text-base shadow-lg transition-all active:scale-95"
              >
                <Download className="w-5 h-5" />
                <span>Get on Google Play</span>
              </a>

              <a
                href={`${siteConfig.githubRepoUrl}/releases`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 transition-colors"
              >
                <span>Direct APK Download</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4E7A4C]" /> 100% Free & Open
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4E7A4C]" /> Offline-first
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4E7A4C]" /> Android 10, 11, 12, 13, 14, 15+
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
