import { constructMetadata } from '@/lib/seo'
import { ContentPage } from '@/components/ContentPage'
import { Mail, ExternalLink } from 'lucide-react'
import { GithubIcon, TwitterIcon, LinkedinIcon } from '@/components/SocialIcons'
import { siteConfig } from '@/lib/site'

export const metadata = constructMetadata({
  title: 'Contact & Support',
  description: 'Get in touch with the creator of BlinkQuest for feature requests, ergonomics research collaborations, or support.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <ContentPage
      badge="Get in Touch"
      title="Contact & Ergonomics Support."
      subtitle="Have an idea for BlinkQuest or need assistance? We respond directly to every message."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="p-6 rounded-3xl bg-[#FFFFFF] border border-[var(--border)] shadow-xs hover:border-[var(--border-strong)] transition-all flex items-start gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#DA7756]/15 text-[#DA7756] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#262624]">Direct Email</h3>
              <p className="text-sm text-[#DA7756] mt-0.5">{siteConfig.contactEmail}</p>
              <p className="text-xs text-[#736E68] mt-1">General inquiries & feedback</p>
            </div>
          </a>

          <a
            href={`${siteConfig.githubRepoUrl}/issues`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-[#FFFFFF] border border-[var(--border)] shadow-xs hover:border-[var(--border-strong)] transition-all flex items-start gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#262624]/10 text-[#262624] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#262624]">GitHub Issues</h3>
              <p className="text-sm text-[#262624] mt-0.5 flex items-center gap-1">
                <span>File a Bug or Feature</span>
                <ExternalLink className="w-3 h-3" />
              </p>
              <p className="text-xs text-[#736E68] mt-1">Open source issue tracker</p>
            </div>
          </a>
        </div>

        <div className="p-8 rounded-[32px] bg-[#FFFFFF] border border-[var(--border)] shadow-xs space-y-4">
          <h3 className="font-serif text-xl font-bold text-[#262624]">Developer Social Profiles</h3>
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
            <a
              href={siteConfig.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0EEE6] hover:bg-[#E5E2D9] text-[#262624] transition-colors"
            >
              <TwitterIcon className="w-4 h-4" />
              <span>@devamitch on X</span>
            </a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0EEE6] hover:bg-[#E5E2D9] text-[#262624] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>Amit Chakraborty on LinkedIn</span>
            </a>
            <a
              href={siteConfig.authorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0EEE6] hover:bg-[#E5E2D9] text-[#262624] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>amitchakraborty.dev</span>
            </a>
          </div>
        </div>
      </div>
    </ContentPage>
  )
}
