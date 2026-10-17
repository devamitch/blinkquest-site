import { getAppHref, getAppLabel, siteConfig } from '@/lib/site'
import { ArrowRight, ShieldCheck, Download } from 'lucide-react'

export function DownloadCta() {
  return (
    <section className="py-24 md:py-32 bg-[var(--surface2)]/50 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--terracotta-strong)]">
          {siteConfig.playStoreLive ? 'Free on Google Play' : 'Closed Testing Active'}
        </span>

        <h2 className="mt-4 font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--ink)] leading-tight">
          Give your eyes a break that actually counts.
        </h2>

        <p className="mt-6 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed max-w-xl mx-auto">
          {siteConfig.playStoreLive
            ? 'Install BlinkQuest for Android and start recharging your Eye Battery today. Completely offline-capable with zero battery drain.'
            : 'BlinkQuest is actively validating builds with closed testers on Google Play. Request beta access to join the test cohort.'}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3.5 items-center justify-center">
          <a href={getAppHref} className="btn-primary">
            <Download className="w-4 h-4" />
            <span>{getAppLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${siteConfig.contactEmail}?subject=BlinkQuest%20Inquiry`}
            className="btn-secondary"
          >
            Contact Developer
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[var(--ink-muted)]">
          <div>
            <p className="font-bold text-sm text-[var(--ink)]">Free Forever</p>
            <p className="mt-0.5">No paywalls, no tracking ads</p>
          </div>
          <div>
            <p className="font-bold text-sm text-[var(--ink)]">Android 7.0+</p>
            <p className="mt-0.5">Universal arm64 & x86 binaries</p>
          </div>
          <div>
            <p className="font-bold text-sm text-[var(--ink)]">Local Guarantee</p>
            <p className="mt-0.5">Frames processed strictly in RAM</p>
          </div>
        </div>
      </div>
    </section>
  )
}
