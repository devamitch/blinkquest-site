import Link from 'next/link'
import Image from 'next/image'
import { Shield, Eye, Heart, ExternalLink } from 'lucide-react'
import { GithubIcon, TwitterIcon, LinkedinIcon } from '@/components/SocialIcons'
import { siteConfig } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-[#FAF9F5] border-t border-[var(--border)] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[var(--border)]">
          {/* Brand & mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-xl overflow-hidden border border-[var(--border)]">
                <Image
                  src="/assets/brand/app-icon.png"
                  alt="BlinkQuest"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif font-bold text-lg text-[#262624]">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-[#5F5B56] max-w-md leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#F0EEE6] hover:bg-[#E5E2D9] text-[#262624] transition-colors"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#F0EEE6] hover:bg-[#E5E2D9] text-[#262624] transition-colors"
                aria-label="X Profile"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#F0EEE6] hover:bg-[#E5E2D9] text-[#262624] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#736E68]">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-[#5F5B56] hover:text-[#262624]">
                  Features & Tools
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-[#5F5B56] hover:text-[#262624]">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/science" className="text-[#5F5B56] hover:text-[#262624]">
                  Science & Triage
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-[#5F5B56] hover:text-[#262624]">
                  Download Android APK
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-[#5F5B56] hover:text-[#262624]">
                  Public Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Author */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#736E68]">
              Trust & Creator
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-[#5F5B56] hover:text-[#262624]">
                  Privacy Policy (100% Local)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#5F5B56] hover:text-[#262624]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#5F5B56] hover:text-[#262624]">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#5F5B56] hover:text-[#262624]">
                  Contact & Support
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.authorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#DA7756] hover:underline"
                >
                  <span>Built by {siteConfig.author}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer card */}
        <div className="mt-8 p-4 rounded-2xl bg-[#F0EEE6]/70 border border-[var(--border)] text-xs text-[#736E68] leading-relaxed">
          <p className="font-semibold text-[#262624] mb-1">Non-Clinical Wellness Disclaimer</p>
          BlinkQuest is designed for ergonomic awareness, digital screen habits, and mindful eye breaks. It is not a medical device, nor does it replace professional optometrist or ophthalmologist evaluations. It does not diagnose, treat, cure, or prevent any optical or systemic disease. If you experience sudden vision changes, severe eye pain, flashes of light, or persistent discomfort, seek immediate evaluation from a licensed healthcare provider.
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#736E68]">
          <p>© {new Date().getFullYear()} BlinkQuest. Built by Amit Chakraborty. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#4E7A4C]">
              <Shield className="w-3.5 h-3.5" /> 100% On-Device Privacy
            </span>
            <span className="text-[var(--border-strong)]">•</span>
            <span>Zero Cloud Detours</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
