'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { getAppHref, getAppLabel, navItems, siteConfig } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <span className="relative w-9 h-9 rounded-[12px] overflow-hidden">
            <Image src="/assets/brand/app-icon.png" alt="" fill className="object-cover" priority />
          </span>
          <span className="font-serif font-semibold text-[19px] tracking-tight text-[var(--ink)]">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 rounded-full text-sm font-medium text-[var(--ink-secondary)] hover:text-[var(--ink)] hover:bg-[var(--surface2)] transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={getAppHref}
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-[var(--ink)] hover:bg-black text-white text-sm font-semibold whitespace-nowrap transition-colors"
          >
            {getAppLabel}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 rounded-xl text-[var(--ink)] hover:bg-[var(--surface2)]"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)] px-5 pt-2 pb-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-[var(--ink)] border-b border-[var(--border)]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={getAppHref}
            className="mt-4 flex items-center justify-center w-full py-3 rounded-full bg-[var(--ink)] text-white font-semibold"
          >
            {getAppLabel}
          </a>
        </div>
      ) : null}
    </header>
  )
}
