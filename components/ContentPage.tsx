import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'

export function ContentPage({
  title,
  subtitle,
  badge,
  children,
}: {
  title: string
  subtitle?: string
  badge?: string
  children: ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#262624]">
      <SiteHeader />
      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5F5B56] hover:text-[#262624] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="space-y-4 mb-12 border-b border-[var(--border)] pb-8">
            {badge && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DA7756]/10 text-[#DA7756] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{badge}</span>
              </div>
            )}
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#262624]">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base sm:text-lg text-[#5F5B56] leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>

          {/* Page Content */}
          <div className="prose prose-neutral max-w-none space-y-8 text-base text-[#262624] leading-relaxed">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
