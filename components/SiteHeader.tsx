'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'
import { navItems, siteConfig } from '@/lib/site'

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 glass-nav transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-[14px] overflow-hidden shadow-sm border border-[var(--border)] group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/assets/brand/app-icon.png"
              alt="BlinkQuest icon"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold text-lg tracking-tight text-[#262624]">
                {siteConfig.name}
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold px-1.5 py-0.5 rounded-full bg-[#DA7756]/10 text-[#DA7756]">
                Android
              </span>
            </div>
            <p className="text-xs text-[#736E68] hidden sm:block">Mindful Vision Care</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 rounded-full text-sm font-medium text-[#5F5B56] hover:text-[#262624] hover:bg-[#F0EEE6] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/download"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DA7756] hover:bg-[#C86747] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
          >
            <span>Get App</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-[#262624] hover:bg-[#F0EEE6] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F5] border-b border-[var(--border)] px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-2xl text-base font-medium text-[#262624] hover:bg-[#F0EEE6] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/download"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-[#DA7756] text-white font-semibold text-center"
            >
              <span>Download BlinkQuest</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
