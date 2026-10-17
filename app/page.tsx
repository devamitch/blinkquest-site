import { SiteHeader } from '@/components/SiteHeader'
import { HeroSection } from '@/components/HeroSection'
import { ScreensShowcase } from '@/components/ScreensShowcase'
import { OcularSimulator } from '@/components/OcularSimulator'
import { FeatureBento } from '@/components/FeatureBento'
import { DownloadCta } from '@/components/DownloadCta'
import { SiteFooter } from '@/components/SiteFooter'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ScreensShowcase />
        <FeatureBento />
        <OcularSimulator />
        <DownloadCta />
      </main>
      <SiteFooter />
    </div>
  )
}
