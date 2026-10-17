import { constructMetadata } from '@/lib/seo'
import { Block, Card, ContentPage } from '@/components/ContentPage'
import { getAppHref, getAppLabel, siteConfig } from '@/lib/site'

export const metadata = constructMetadata({
  title: 'Install',
  description: 'How to get BlinkQuest on your Android phone.',
  path: '/download',
})

export default function DownloadPage() {
  return (
    <ContentPage
      badge="Install"
      title={siteConfig.playStoreLive ? 'Get BlinkQuest on Google Play.' : 'Join the BlinkQuest beta.'}
      subtitle={
        siteConfig.playStoreLive
          ? 'Free on Google Play for Android phones.'
          : "BlinkQuest is in closed testing before its public launch. Email the Google account you use on your phone and we'll add you as a tester."
      }
    >
      <a
        href={getAppHref}
        className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white font-semibold transition-colors"
      >
        {getAppLabel}
      </a>

      {siteConfig.playStoreLive ? null : (
        <Block title="What happens next">
          <p>Google emails you a tester invite, usually within a day or two. Accept it, then install BlinkQuest from the Play Store link in that email.</p>
        </Block>
      )}

      <div className="grid sm:grid-cols-3 gap-3">
        <Card>
          <p className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wide">Android</p>
          <p className="font-semibold text-[var(--ink)]">{siteConfig.minAndroidVersion} or newer</p>
        </Card>
        <Card>
          <p className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wide">Needs</p>
          <p className="font-semibold text-[var(--ink)]">Front camera</p>
        </Card>
        <Card>
          <p className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wide">Account</p>
          <p className="font-semibold text-[var(--ink)]">Google or Setu</p>
        </Card>
      </div>

      <p className="text-sm text-[var(--ink-muted)]">Package name: {siteConfig.appPackage}</p>
    </ContentPage>
  )
}
