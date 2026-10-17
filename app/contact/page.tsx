import { constructMetadata } from '@/lib/seo'
import { Block, Card, ContentPage } from '@/components/ContentPage'
import { siteConfig } from '@/lib/site'

export const metadata = constructMetadata({
  title: 'Contact',
  description: 'Get in touch about BlinkQuest: support, beta access and feedback.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <ContentPage badge="Contact" title="Get in touch." subtitle="Support, beta access, ideas. Every email is read.">
      <a href={`mailto:${siteConfig.contactEmail}`} className="block">
        <Card>
          <p className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wide">Email</p>
          <p className="text-lg font-semibold text-[var(--ink)]">{siteConfig.contactEmail}</p>
        </Card>
      </a>
      <Block title="Asking for beta access">
        <p>Send the Google account email you use on your Android phone. You&apos;ll get a Play Store tester invite.</p>
      </Block>
      <Block title="Reporting a problem">
        <p>Tell us your phone model, Android version and what you were doing. A screenshot helps.</p>
      </Block>
      <Block title="Elsewhere">
        <p>
          <a href={siteConfig.xUrl} className="underline underline-offset-2 text-[var(--ink)]" target="_blank" rel="noopener noreferrer">X</a>
          {' · '}
          <a href={siteConfig.linkedinUrl} className="underline underline-offset-2 text-[var(--ink)]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {' · '}
          <a href={siteConfig.authorUrl} className="underline underline-offset-2 text-[var(--ink)]" target="_blank" rel="noopener noreferrer">{siteConfig.author}</a>
        </p>
      </Block>
    </ContentPage>
  )
}
