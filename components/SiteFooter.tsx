import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/SocialIcons'
import { getAppHref, getAppLabel, siteConfig } from '@/lib/site'
import { ShieldCheck, Heart, Sparkles } from 'lucide-react'

const columns = [
  {
    title: 'Product',
    links: [
      { href: '/beta', label: 'Join Google Play Beta' },
      { href: '/features', label: 'Feature Directory' },
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/science', label: 'Clinical Research' },
      { href: '/roadmap', label: 'Release Roadmap' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/faq', label: 'FAQ & Support' },
      { href: '/download', label: 'Install Instructions' },
      { href: '/contact', label: 'Direct Contact' },
      { href: '/about', label: 'About Project' },
    ],
  },
  {
    title: 'Governance',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Use' },
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
    <footer className="bg-[var(--surface2)]/70 border-t border-[var(--border)] pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          {/* Brand & Mission column */}
          <div>
            <div className="flex items-center gap-3">
              <span className="relative w-9 h-9 rounded-xl overflow-hidden border border-[var(--border)]">
                <Image src="/assets/brand/app-icon.png" alt="" fill className="object-cover" />
              </span>
              <div>
                <span className="font-serif font-bold text-xl text-[var(--ink)] block">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--terracotta)]">
                  On-Device Wellness
                </span>
              </div>
            </div>

            <p className="mt-5 text-sm text-[var(--ink-secondary)] max-w-sm leading-relaxed">
              BlinkQuest helps digital professionals, developers, and gamers eliminate digital eye fatigue with micro-habit games and camera-verified breaks.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={getAppHref}
                className="btn-primary text-xs !py-2.5 !px-5"
              >
                {getAppLabel}
              </a>
              <a
                href={siteConfig.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs !py-2.5 !px-4"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">{col.title}</h4>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[var(--ink-secondary)] hover:text-[var(--terracotta)] transition-colors duration-150"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Medical disclaimer badge */}
        <div className="mt-14 p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--ink-muted)] leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[var(--sage)] shrink-0 mt-0.5" />
          <p>
            <strong>Wellness Disclaimer:</strong> BlinkQuest is an eye-habit wellness application. It is not an FDA/CE-registered medical diagnostic device and does not diagnose, treat, cure, or prevent any ocular condition. For sudden vision impairment, pain, or flashes of light, seek professional optometric evaluation immediately.
          </p>
        </div>

        {/* Setu Family Ecosystem Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[var(--ink-secondary)]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--terracotta)] animate-pulse" />
            <span>
              <strong>Setu Family Ecosystem:</strong> From the creators of{' '}
              <a
                href={siteConfig.setuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--ink)] underline hover:text-[var(--terracotta)]"
              >
                Setu
              </a>{' '}
              — offline nearby file sharing for Android. Both apps share our unified Google testing group and local-first philosophy.
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={siteConfig.setuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--terracotta-strong)] hover:underline inline-flex items-center gap-1"
            >
              <span>Visit Setu</span>
              <span className="text-xs">↗</span>
            </a>
            <span className="text-[var(--border)]">|</span>
            <a
              href={siteConfig.googleGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--ink)] hover:text-[var(--terracotta)]"
            >
              Join Google Group
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--ink-muted)]">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} BlinkQuest · Engineered by{' '}
            <a
              href={siteConfig.authorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--ink)] hover:text-[var(--terracotta)] transition-colors"
            >
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
                className="p-2.5 rounded-full bg-[var(--surface)] hover:bg-[var(--surface3)] text-[var(--ink-secondary)] hover:text-[var(--ink)] border border-[var(--border)] transition-colors shadow-2xs"
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
