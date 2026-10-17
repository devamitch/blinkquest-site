import { constructMetadata } from '@/lib/seo'
import { ContentPage } from '@/components/ContentPage'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/site'

export const metadata = constructMetadata({
  title: 'About BlinkQuest & Creator',
  description: 'The story behind BlinkQuest: combating digital eye strain and computer vision syndrome with 100% on-device local intelligence.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <ContentPage
      badge="Origin Story & Philosophy"
      title="Restoring human rhythm in a hyper-focused screen age."
      subtitle="How a simple biological reflex—blinking—became the most overlooked wellness metric in modern digital life."
    >
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#262624]">The Hidden Cost of Screen Focus</h2>
        <p>
          Under normal circumstances, human beings blink approximately <strong>15 to 20 times per minute</strong>. Each blink spreads an essential 3-layer tear film (lipid, aqueous, mucin) across the cornea, cleansing the surface, providing oxygen, and maintaining optical clarity.
        </p>
        <p>
          When staring intently at smartphones, monitors, or code editors, cognitive engagement suppresses the spontaneous blinking reflex by up to <strong>66%</strong>. Worse, more than half of the blinks made during screen sessions are <em>incomplete</em>, leaving the lower cornea exposed to air. The result is dry eye syndrome, burning sensations, blurred vision, tension headaches, and chronic evening fatigue.
        </p>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="font-serif text-2xl font-bold text-[#262624]">The Privacy-First Imperative</h2>
        <p>
          Existing eye tracking solutions frequently rely on cloud computer vision APIs, capturing facial video feeds and uploading them to remote servers. We fundamentally reject this paradigm.
        </p>
        <p>
          Your face, your biometric expressions, and your living environment belong to you. BlinkQuest was engineered from the very first commit to execute <strong>100% locally on Android hardware</strong> using Google MediaPipe Face Mesh. Video frames never touch persistent storage; they are evaluated in volatile RAM in under 12 milliseconds and discarded forever.
        </p>
      </section>

      <section className="space-y-4 pt-4">
        <h2 className="font-serif text-2xl font-bold text-[#262624]">About the Creator</h2>
        <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[var(--border)] shadow-xs flex flex-col sm:flex-row items-center gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-serif text-xl font-bold text-[#262624]">{siteConfig.author}</h3>
            <p className="text-sm text-[#DA7756] font-medium">{siteConfig.authorRole}</p>
            <p className="text-sm text-[#5F5B56] leading-relaxed">
              Creator of Setu, BlinkQuest, and privacy-preserving open-source mobile tools. Specializes in offline-first decentralized architecture, native mobile optimization, and human-centric ergonomics.
            </p>
            <div className="pt-2 flex items-center justify-center sm:justify-start gap-4 text-xs font-semibold">
              <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#262624] hover:text-[#DA7756]">GitHub</a>
              <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#262624] hover:text-[#DA7756]">LinkedIn</a>
              <a href={siteConfig.xUrl} target="_blank" rel="noopener noreferrer" className="text-[#262624] hover:text-[#DA7756]">X (Twitter)</a>
              <a href={siteConfig.authorUrl} target="_blank" rel="noopener noreferrer" className="text-[#DA7756] hover:underline">Portfolio</a>
            </div>
          </div>
        </div>
      </section>
    </ContentPage>
  )
}
