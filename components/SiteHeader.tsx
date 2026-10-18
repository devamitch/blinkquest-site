'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight } from 'lucide-react'
import { getAppHref, getAppLabel, navItems, siteConfig } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-18 flex items-center justify-between gap-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-[var(--border)]">
            <Image src="/assets/brand/app-icon.png" alt="BlinkQuest app icon" fill className="object-cover" priority />
          </div>
          <div>
            <span className="font-serif font-bold text-lg tracking-tight text-[var(--ink)] block leading-tight">
              {siteConfig.name}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--terracotta-strong)] block">
              Vision Wellness
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-[var(--surface2)]/60 border border-[var(--border)]" aria-label="Main Navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--ink-secondary)] hover:text-[var(--ink)] hover:bg-[var(--surface)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action */}
        <div className="flex items-center gap-2.5">
          <a
            href={siteConfig.setuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold text-[var(--ink-secondary)] hover:text-[var(--ink)] bg-[var(--surface)] border border-[var(--border)] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--terracotta)]" />
            <span>Setu Ecosystem</span>
          </a>

          <a
            href={getAppHref}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--ink)] text-white text-xs font-semibold transition-colors hover:bg-black"
          >
            <span>{getAppLabel}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-xl bg-[var(--surface2)] text-[var(--ink)] hover:bg-[var(--surface3)] transition-colors cursor-pointer"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open ? (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--surface)] px-6 pt-4 pb-8 space-y-4 animate-in fade-in duration-150">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 px-3 rounded-lg text-sm font-semibold text-[var(--ink)] hover:bg-[var(--surface2)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-[var(--border)]">
            <a
              href={getAppHref}
              className="btn-primary w-full text-center"
            >
              <span>{getAppLabel}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
