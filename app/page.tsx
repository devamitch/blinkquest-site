import { SiteHeader } from '@/components/SiteHeader'
import { HeroSection } from '@/components/HeroSection'
import { ScreensShowcase } from '@/components/ScreensShowcase'
import { OcularSimulator } from '@/components/OcularSimulator'
import { FeatureBento } from '@/components/FeatureBento'
import { DownloadCta } from '@/components/DownloadCta'
import { SiteFooter } from '@/components/SiteFooter'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#262624]">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ScreensShowcase />
        <OcularSimulator />
        <FeatureBento />
        <DownloadCta />
      </main>
      <SiteFooter />
    </div>
  )
}
