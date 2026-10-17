'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react'
import { getAppHref, getAppLabel, navItems, siteConfig } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-20 flex items-center justify-between gap-6">
        {/* Brand identity */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group" onClick={() => setOpen(false)}>
          <div className="relative w-10 h-10 rounded-2xl overflow-hidden shadow-sm ring-1 ring-[var(--border-strong)] transition-transform duration-300 group-hover:scale-105">
            <Image src="/assets/brand/app-icon.png" alt="BlinkQuest app icon" fill className="object-cover" priority />
          </div>
          <div>
            <span className="font-serif font-bold text-xl tracking-tight text-[var(--ink)] block leading-tight">
              {siteConfig.name}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--terracotta)] block">
              Vision Wellness
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-[var(--surface2)]/70 border border-[var(--border)] shadow-xs" aria-label="Main Navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-full text-xs font-semibold text-[var(--ink-secondary)] hover:text-[var(--ink)] hover:bg-[var(--surface)] transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href={getAppHref}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--ink)] hover:bg-black text-white text-xs font-bold tracking-wide shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>{getAppLabel}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2.5 rounded-2xl bg-[var(--surface2)] text-[var(--ink)] hover:bg-[var(--surface3)] transition-colors"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open ? (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--surface-glass)] backdrop-blur-2xl px-6 pt-4 pb-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 px-4 rounded-xl text-base font-semibold text-[var(--ink)] hover:bg-[var(--surface2)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-[var(--border)]">
            <a
              href={getAppHref}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[var(--terracotta)] text-white font-bold text-sm shadow-md"
            >
              <span>{getAppLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
