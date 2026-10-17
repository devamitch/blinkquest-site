import { constructMetadata } from '@/lib/seo'
import { ContentPage } from '@/components/ContentPage'
import { Download, Shield, Sparkles, CheckCircle2, Smartphone, Terminal } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export const metadata = constructMetadata({
  title: 'Download BlinkQuest for Android',
  description: 'Download BlinkQuest for Android. Free, open-source, 100% on-device vision wellness and blink rate tracking.',
  path: '/download',
})

export default function DownloadPage() {
  return (
    <ContentPage
      badge="Download & Installation"
      title="Install BlinkQuest on Android."
      subtitle="Free, privacy-preserving, and ready in seconds. No account creation required."
    >
      <div className="space-y-10">
        {/* Primary Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Option 1: Google Play */}
          <div className="p-8 rounded-[36px] bg-[#FFFFFF] border border-[var(--border)] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4E7A4C] bg-[#4E7A4C]/10 px-3 py-1 rounded-full">
                Recommended
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#262624]">
                Google Play Store
              </h3>
              <p className="text-sm text-[#5F5B56] leading-relaxed">
                Automatic updates, verified security scanning, and instant background install directly from Google Play.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={siteConfig.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#DA7756] hover:bg-[#C86747] text-white font-semibold text-sm shadow-md transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Get on Google Play</span>
              </a>
              <p className="text-center text-xs text-[#736E68]">Package: {siteConfig.appPackage}</p>
            </div>
          </div>

          {/* Option 2: Direct APK */}
          <div className="p-8 rounded-[36px] bg-[#FFFFFF] border border-[var(--border)] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#DA7756] bg-[#DA7756]/10 px-3 py-1 rounded-full">
                Direct / F-Droid Style
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#262624]">
                Standalone Release APK
              </h3>
              <p className="text-sm text-[#5F5B56] leading-relaxed">
                Download the standalone signed APK release from GitHub. Perfect for de-Googled devices, GrapheneOS, or CalyxOS.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`${siteConfig.githubRepoUrl}/releases`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#262624] hover:bg-black text-white font-semibold text-sm shadow-md transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download GitHub Release APK</span>
              </a>
              <p className="text-center text-xs text-[#736E68]">Verified with release signing certificate</p>
            </div>
          </div>
        </div>

        {/* System Requirements */}
        <div className="p-8 rounded-[32px] bg-[#F0EEE6]/60 border border-[var(--border)] space-y-4">
          <h3 className="font-serif text-xl font-bold text-[#262624]">System Requirements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-xs uppercase font-semibold text-[#736E68]">Operating System</p>
              <p className="font-medium text-[#262624] mt-0.5">Android 10.0 (API 29) or higher</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold text-[#736E68]">Required Permission</p>
              <p className="font-medium text-[#262624] mt-0.5">Front-Facing Camera (Local only)</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold text-[#736E68]">Internet</p>
              <p className="font-medium text-[#4E7A4C] mt-0.5">Not Required (100% Offline)</p>
            </div>
          </div>
        </div>
      </div>
    </ContentPage>
  )
}
