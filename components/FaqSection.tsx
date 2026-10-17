'use client'

import { useState } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'
import { faqs } from '@/lib/faqData'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--terracotta-strong)]">
            Questions & Answers
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
            Frequently asked questions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
            Transparent answers about privacy, on-device machine learning, and ocular ergonomics.
          </p>
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="rounded-xl bg-[var(--surface)] border border-[var(--border)] transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[var(--surface2)] text-[var(--ink-muted)]">
                      {faq.category}
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[var(--ink)]">
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={`w-7 h-7 rounded-full bg-[var(--surface2)] flex items-center justify-center shrink-0 text-[var(--ink-secondary)] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[var(--terracotta-strong)]' : ''
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </span>
                </button>

                {isOpen ? (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[var(--ink-secondary)] leading-relaxed border-t border-[var(--border)] animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>

        {/* Quiet support block */}
        <div className="mt-10 p-5 rounded-xl bg-[var(--surface2)]/60 border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--ink-secondary)]">
          <p>
            Have a question about on-device ML or optometric safety? We reply to every inquiry.
          </p>
          <a
            href="mailto:amit@devamit.co.in?subject=BlinkQuest%20Inquiry"
            className="btn-secondary !text-xs !py-2 !px-4 shrink-0"
          >
            Email Developer
          </a>
        </div>
      </div>
    </section>
  )
}
