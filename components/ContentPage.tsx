import type { ReactNode } from 'react'
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
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <header className="mb-12">
            {badge ? (
              <p className="text-xs font-semibold tracking-wide uppercase text-[var(--terracotta-strong)]">{badge}</p>
            ) : null}
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--ink)] leading-[1.1]">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-5 text-lg text-[var(--ink-secondary)] leading-relaxed">{subtitle}</p>
            ) : null}
          </header>
          <div className="space-y-10 text-[var(--ink)] leading-relaxed">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

/** One titled section of an inner page. */
export function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-2xl font-semibold text-[var(--ink)]">{title}</h2>
      <div className="mt-3 space-y-3 text-[var(--ink-secondary)]">{children}</div>
    </section>
  )
}

/** A soft card for lists of items on inner pages. */
export function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-[24px] bg-[var(--surface)] p-6 space-y-2">{children}</div>
}
