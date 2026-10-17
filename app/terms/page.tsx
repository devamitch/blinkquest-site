import { constructMetadata } from '@/lib/seo'
import { Block, ContentPage } from '@/components/ContentPage'
import { siteConfig } from '@/lib/site'

export const metadata = constructMetadata({
  title: 'Terms',
  description: 'Terms for using the BlinkQuest app and website.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <ContentPage badge="Terms" title="Terms of use" subtitle="Last updated 17 October 2026.">
      <Block title="Wellness, not medical care">
        <p>
          BlinkQuest helps build screen habits: blinking, looking away and resting your eyes. It is not a medical
          device and doesn&apos;t diagnose, treat, cure or prevent any condition. Its measurements are estimates and
          can be wrong. Don&apos;t rely on it in place of an eye examination.
        </p>
      </Block>
      <Block title="Using the app">
        <p>
          Use BlinkQuest in a safe place. Don&apos;t play eye games while driving, walking or operating anything.
          Stop if an activity causes discomfort, dizziness or headache.
        </p>
      </Block>
      <Block title="Accounts">
        <p>
          Sign-in uses Google or Setu. Their own terms apply to those services. You&apos;re responsible for your
          device and account.
        </p>
      </Block>
      <Block title="The software">
        <p>
          BlinkQuest is provided as is, without warranties. To the extent the law allows, the developer isn&apos;t
          liable for losses arising from its use.
        </p>
      </Block>
      <Block title="Contact">
        <p>
          <a href={`mailto:${siteConfig.contactEmail}`} className="underline underline-offset-2 text-[var(--ink)]">
            {siteConfig.contactEmail}
          </a>
        </p>
      </Block>
    </ContentPage>
  )
}
