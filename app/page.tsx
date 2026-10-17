import { SiteHeader } from '@/components/SiteHeader'
import { HeroSection } from '@/components/HeroSection'
import { EyeStrainCalculator } from '@/components/EyeStrainCalculator'
import { ComparisonSection } from '@/components/ComparisonSection'
import { VisionArchitecture } from '@/components/VisionArchitecture'
import { FeatureBento } from '@/components/FeatureBento'
import { OcularSimulator } from '@/components/OcularSimulator'
import { ClinicalEvidence } from '@/components/ClinicalEvidence'
import { FaqSection } from '@/components/FaqSection'
import { DownloadCta } from '@/components/DownloadCta'
import { SiteFooter } from '@/components/SiteFooter'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <EyeStrainCalculator />
        <ComparisonSection />
        <VisionArchitecture />
        <FeatureBento />
        <OcularSimulator />
        <ClinicalEvidence />
        <FaqSection />
        <DownloadCta />
      </main>
      <SiteFooter />
    </div>
  )
}
