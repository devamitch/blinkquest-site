import { constructMetadata } from '@/lib/seo'
import { ContentPage } from '@/components/ContentPage'
import { siteConfig } from '@/lib/site'

export const metadata = constructMetadata({
  title: 'Terms of Service & Health Disclaimer',
  description: 'Terms of service and non-clinical health agreement for BlinkQuest users.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <ContentPage
      badge="Terms & Disclaimer"
      title="Terms of Service & Non-Clinical Disclaimer."
      subtitle="Simple, honest terms governing the use of the BlinkQuest application and website."
    >
      <div className="space-y-6 text-sm text-[#5F5B56] leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#262624]">1. Acceptance of Terms</h2>
          <p>
            By installing or using BlinkQuest, you agree to these Terms. If you do not agree, please uninstall the app.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#262624]">2. Medical Disclaimer</h2>
          <p>
            BlinkQuest is provided for wellness awareness, ergonomics habits, and informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always consult an ophthalmologist, optometrist, or qualified physician for any questions regarding an ocular condition.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#262624]">3. Open Source & License</h2>
          <p>
            BlinkQuest code is published under permissive open-source terms. You are free to inspect, audit, and build the source repository on GitHub.
          </p>
        </section>
      </div>
    </ContentPage>
  )
}
