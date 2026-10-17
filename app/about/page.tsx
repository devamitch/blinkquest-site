import { constructMetadata } from '@/lib/seo'
import { Block, ContentPage } from '@/components/ContentPage'
import { siteConfig } from '@/lib/site'

export const metadata = constructMetadata({
  title: 'About',
  description: 'Why BlinkQuest exists and who makes it.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <ContentPage
      badge="About"
      title="Made for people who live on screens."
      subtitle="BlinkQuest started from a simple observation: break reminders get dismissed. Breaks you play don't."
    >
      <Block title="The idea">
        <p>
          Most eye-break apps are timers. You tap &quot;done&quot; and keep scrolling. BlinkQuest makes the break
          something you do with your eyes and uses the camera on your phone to check it happened, so the habit is
          real and the progress means something.
        </p>
      </Block>
      <Block title="Principles">
        <p>Your face stays on your phone. Short beats long. No streak guilt, no ads, no medical promises.</p>
      </Block>
      <Block title="Who makes it">
        <p>
          BlinkQuest is designed and built by{' '}
          <a href={siteConfig.authorUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-[var(--ink)]">
            {siteConfig.author}
          </a>
          , a mobile developer in Kolkata.
        </p>
      </Block>
    </ContentPage>
  )
}
