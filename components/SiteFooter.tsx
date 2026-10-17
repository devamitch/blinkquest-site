import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/SocialIcons'
import { getAppHref, getAppLabel, siteConfig } from '@/lib/site'

const columns = [
  {
    title: 'Product',
    links: [
      { href: '/features', label: 'Features' },
      { href: '/how-it-works', label: 'How it works' },
      { href: '/science', label: 'Science' },
      { href: '/roadmap', label: 'Roadmap' },
    ],
  },
  {
    title: 'Help',
    links: [
      { href: '/faq', label: 'FAQ' },
      { href: '/download', label: 'Install' },
      { href: '/contact', label: 'Contact' },
      { href: '/about', label: 'About' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy policy' },
      { href: '/terms', label: 'Terms' },
    ],
  },
]

const social = [
  { href: siteConfig.githubUrl, label: 'GitHub', Icon: GithubIcon },
  { href: siteConfig.xUrl, label: 'X', Icon: TwitterIcon },
  { href: siteConfig.linkedinUrl, label: 'LinkedIn', Icon: LinkedinIcon },
]

export function SiteFooter() {
  return (
    <footer className="bg-[var(--surface2)]/60 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative w-8 h-8 rounded-[10px] overflow-hidden">
                <Image src="/assets/brand/app-icon.png" alt="" fill className="object-cover" />
              </span>
              <span className="font-serif font-semibold text-lg text-[var(--ink)]">{siteConfig.name}</span>
            </div>
            <p className="mt-4 text-sm text-[var(--ink-secondary)] max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <a
              href={getAppHref}
              className="mt-5 inline-flex px-4 py-2 rounded-full bg-[var(--ink)] text-white text-sm font-semibold"
            >
              {getAppLabel}
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--ink-muted)]">{col.title}</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[var(--ink-secondary)] hover:text-[var(--ink)]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xs text-[var(--ink-muted)] leading-relaxed max-w-3xl">
          BlinkQuest is a wellness app for screen habits, not a medical device. It doesn’t test
          vision, diagnose, treat or prevent any condition. For sudden vision changes, eye pain or
          flashes of light, see an eye care professional straight away.
        </p>

        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--ink-muted)]">
          <p>
            © {new Date().getFullYear()} BlinkQuest · Made by{' '}
            <a href={siteConfig.authorUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)]">
              {siteConfig.author}
            </a>
          </p>
          <div className="flex items-center gap-2">
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full hover:bg-[var(--surface3)] text-[var(--ink-secondary)]"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
