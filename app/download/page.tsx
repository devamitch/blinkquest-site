import { constructMetadata } from '@/lib/seo'
import { Block, Card, ContentPage } from '@/components/ContentPage'
import { EcosystemDirectorySection } from '@/components/EcosystemDirectorySection'
import { getAppHref, getAppLabel, siteConfig } from '@/lib/site'
import { Smartphone, ArrowUpRight, ArrowDownToLine, CheckCircle2, ExternalLink } from 'lucide-react'

export const metadata = constructMetadata({
  title: 'Download BlinkQuest Android APK & Google Play Beta',
  description: 'Download BlinkQuest APK or install from Google Play closed beta track. On-device vision ergonomics and blink tracking for AnvayKosh ecosystem.',
  path: '/download',
})

export default function DownloadPage() {
  return (
    <ContentPage
      badge="AnvayKosh Ecosystem · Downloads"
      title="Get BlinkQuest for Android."
      subtitle="BlinkQuest is available on Google Play closed testing and as a standalone APK download. Camera frames are processed strictly in volatile RAM with zero cloud telemetry."
    >
      {/* Direct Play Store and APK Cards */}
      <div className="my-8 grid gap-4 sm:grid-cols-2">
        <div className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-2xl bg-[var(--terracotta-subtle)] text-[var(--terracotta-strong)] flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
                Google Play Track
              </span>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[var(--ink)]">Google Play Store</h3>
              <p className="text-xs text-[var(--ink-secondary)] mt-1 leading-relaxed">
                Automatic background updates, delta patches, and Google Play Protect verification.
              </p>
            </div>
          </div>
          <div className="pt-6 border-t border-[var(--border)] mt-6 flex flex-col gap-2">
            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-stone-900 hover:bg-black text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <span>Install from Google Play</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.playStoreBetaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-[var(--terracotta)] hover:bg-[#b05a3c] text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Join Google Play Beta</span>
            </a>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                <ArrowDownToLine className="w-5 h-5" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-amber-700">
                Direct APK
              </span>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[var(--ink)]">Direct APK Package</h3>
              <p className="text-xs text-[var(--ink-secondary)] mt-1 leading-relaxed">
                Standalone release APK sideload. No Google account required. Independent, offline installation.
              </p>
            </div>
          </div>
          <div className="pt-6 border-t border-[var(--border)] mt-6 flex flex-col gap-2">
            <a
              href="https://github.com/devamitch/blinkquest/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-[var(--ink)] text-xs font-semibold transition-colors"
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>Download APK on GitHub Releases</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="text-[11px] text-center text-[var(--ink-muted)]">
              Package: {siteConfig.appPackage}
            </span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-3 my-8">
        <Card>
          <p className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wide">Android</p>
          <p className="font-semibold text-[var(--ink)]">{siteConfig.minAndroidVersion} or newer</p>
        </Card>
        <Card>
          <p className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wide">Needs</p>
          <p className="font-semibold text-[var(--ink)]">Front camera / RAM only</p>
        </Card>
        <Card>
          <p className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wide">Ecosystem</p>
          <p className="font-semibold text-[var(--ink)]">AnvayKosh (अन्वयकोश)</p>
        </Card>
      </div>

      {/* Cross-App Ecosystem Directory */}
      <div className="mt-16 pt-12 border-t border-[var(--border)]">
        <EcosystemDirectorySection />
      </div>
    </ContentPage>
  )
}
