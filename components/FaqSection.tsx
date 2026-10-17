'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react'
import { faqs } from '@/lib/faqData'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="py-24 md:py-32 bg-[var(--surface2)]/30 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface)] text-[var(--terracotta-strong)] text-xs font-bold uppercase tracking-wider border border-[var(--border)] shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
            Everything you need to know.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
            Transparent answers about privacy, on-device machine learning, and ocular ergonomics.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] transition-all duration-200 overflow-hidden shadow-xs hover:border-[var(--border-strong)]"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[var(--surface2)] text-[var(--ink-muted)]">
                      {faq.category}
                    </span>
                    <span className="font-bold text-base sm:text-lg text-[var(--ink)]">
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={`w-8 h-8 rounded-full bg-[var(--surface2)] flex items-center justify-center shrink-0 text-[var(--ink)] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[var(--terracotta-subtle)] text-[var(--terracotta-strong)]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen ? (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed border-t border-[var(--border)]/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>

        {/* Developer contact support box */}
        <div className="mt-12 p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-[var(--terracotta-subtle)] text-[var(--terracotta)] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-[var(--ink)]">Have an optometry or engineering question?</p>
              <p className="text-xs text-[var(--ink-secondary)]">We respond to every developer inquiry within 24 hours.</p>
            </div>
          </div>
          <a
            href="mailto:amit@devamit.co.in?subject=BlinkQuest%20Inquiry"
            className="btn-secondary text-xs !py-2.5 !px-5 shrink-0"
          >
            Email Developer
          </a>
        </div>
      </div>
    </section>
  )
}
