import { getAppHref, getAppLabel, siteConfig } from '@/lib/site'
import { ArrowRight, ShieldCheck, Download, Sparkles } from 'lucide-react'

export function DownloadCta() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="relative overflow-hidden rounded-[38px] bg-gradient-to-br from-[#1C1B19] via-[#242320] to-[#121110] p-9 sm:p-16 text-white shadow-2xl border border-white/10">
          {/* Subtle radial ambient light */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-[var(--terracotta)]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-[var(--sage)]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#E58A6B] text-xs font-bold uppercase tracking-wider border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              {siteConfig.playStoreLive ? 'Free on Google Play' : 'Closed Testing Active'}
            </div>

            <h2 className="mt-6 font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
              Give your eyes a break that actually counts.
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed">
              {siteConfig.playStoreLive
                ? 'Download BlinkQuest today and start recharging your Eye Battery. Works offline with zero battery drain.'
                : 'BlinkQuest is actively validating closed-testing builds with Google Play testers. Join our test cohort and experience AI vision wellness on your phone.'}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href={getAppHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white font-bold text-base shadow-[0_10px_30px_-5px_rgba(217,107,67,0.5)] transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                <span>{getAppLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${siteConfig.contactEmail}?subject=BlinkQuest%20Direct%20Inquiry`}
                className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all"
              >
                Contact Developer
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-white/60 font-medium">
              <div>
                <p className="text-white font-bold text-sm">Free Forever</p>
                <p>No paywalls or ad interruptions</p>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Android 7.0+</p>
                <p>Universal arm64 & x86 binaries</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-white font-bold text-sm">Privacy Guaranteed</p>
                <p>Zero frames leave your device</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
