import Link from 'next/link'
import { constructMetadata } from '@/lib/seo'
import { ContentPage } from '@/components/ContentPage'
import { siteConfig } from '@/lib/site'
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Users,
  Smartphone,
  ShieldCheck,
  AlertCircle,
  Sparkles,
} from 'lucide-react'

export const metadata = constructMetadata({
  title: 'Get the Android Beta · Three Steps',
  description:
    'Join the official BlinkQuest Android closed beta on Google Play in three simple steps. Part of the Setu family ecosystem.',
  path: '/beta',
})

const STEPS = [
  {
    step: '1',
    title: 'Join the Google Testers Group',
    description:
      'Google requires all closed testing participants to belong to an authorized Google Group. Tap below to join our unified testers community.',
    hint: 'Important: Use the exact same Gmail address that is logged into your phone’s Google Play Store.',
    action: 'Join Google Group',
    href: siteConfig.googleGroupUrl,
    icon: Users,
  },
  {
    step: '2',
    title: 'Accept the Google Play Invite',
    description:
      'Open the official Google Play opt-in page and tap “Become a tester”. You will see a green confirmation badge once activated.',
    hint: 'If it says “not invited”, ensure you completed Step 1 with the same Gmail account.',
    action: 'Accept Invite on Google Play',
    href: siteConfig.playStoreBetaUrl,
    icon: CheckCircle2,
  },
  {
    step: '3',
    title: 'Install BlinkQuest',
    description:
      'Open the Google Play Store on your Android device and tap “Install”. Updates will stream automatically to your phone.',
    hint: 'Seeing “Item not found”? Wait 2 minutes for Google’s access token to propagate, then tap again.',
    action: 'Open in Google Play Store',
    href: siteConfig.playStoreUrl,
    icon: Smartphone,
  },
]

const TROUBLESHOOTING = [
  {
    title: 'Play Store shows “Item not found” or “We are sorry”',
    body: 'This happens if your Play Store app is signed in with a different Gmail than the one you used to join the Google Group. Open the Play Store, tap your avatar at top right, switch to the Gmail you used in Step 1, and retry Step 3.',
  },
  {
    title: 'Chrome opened the invite in a different account',
    body: 'If Chrome has a work or secondary account active, the testing invite opens in that account. Copy the link in Step 2, paste it into Chrome, tap your profile avatar on the Google page, and switch to your primary Play Store Gmail.',
  },
  {
    title: 'Access propagation delay',
    body: 'Google Play’s closed-track authorization can take 5 to 15 minutes to register across worldwide regional edge servers. If Step 3 is not ready immediately, wait a few minutes, close the Play Store app, and tap Step 3 again.',
  },
]

export default function BetaPage() {
  return (
    <ContentPage
      badge="Google Play Closed Beta"
      title="Three steps. One Gmail."
      subtitle="BlinkQuest is in active closed testing on Google Play. Follow these three steps on your Android device using the Gmail associated with your Play Store account."
    >
      {/* Setu Family Ecosystem Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[var(--surface2)]/70 border border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--terracotta-subtle)] flex items-center justify-center text-[var(--terracotta)] shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-[var(--ink)]">
              Part of the Setu Local-First Family
            </p>
            <p className="text-[11px] text-[var(--ink-secondary)]">
              Already a member of the Setu Beta Testers group? You are pre-approved! You can skip Step 1 and proceed straight to Step 2.
            </p>
          </div>
        </div>
        <a
          href={siteConfig.setuUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--surface)] text-[var(--ink)] hover:bg-[var(--surface3)] border border-[var(--border)] transition-colors shrink-0"
        >
          <span>Visit Setu</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* The 3 Steps Cards */}
      <div className="space-y-4 my-8">
        {STEPS.map((step) => {
          const Icon = step.icon
          return (
            <div
              key={step.step}
              className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xs transition-all hover:shadow-md hover:border-[var(--border-strong)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="w-9 h-9 rounded-2xl bg-[var(--terracotta)] text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                    {step.step}
                  </span>
                  <div className="space-y-1 max-w-xl">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[var(--ink)]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-xs text-[var(--ink-muted)] pt-1">
                      💡 {step.hint}
                    </p>
                  </div>
                </div>

                <div className="sm:shrink-0 pt-2 sm:pt-0">
                  <a
                    href={step.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[var(--ink)] hover:bg-black text-white text-xs font-semibold shadow-xs hover:shadow-sm transition-all"
                  >
                    <span>{step.action}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Direct Play Store Link Card */}
      <div className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border-strong)] shadow-sm text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--terracotta-strong)]">
            Official Google Play Package
          </span>
          <h3 className="mt-1 font-serif text-xl font-bold text-[var(--ink)]">
            {siteConfig.appPackage}
          </h3>
          <p className="mt-1 text-xs text-[var(--ink-muted)]">
            Compatible with Android 7.0+ · Monotonic Version 3 · Zero Cloud Telemetry
          </p>
        </div>

        <a
          href={siteConfig.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--terracotta)] hover:bg-[var(--terracotta-hover)] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
        >
          <span>Direct Play Store Link</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Troubleshooting Section */}
      <div className="mt-12 pt-8 border-t border-[var(--border)]">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-5 h-5 text-[var(--amber)]" />
          <h2 className="font-serif text-xl font-bold text-[var(--ink)]">
            Troubleshooting Common Play Store Issues
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {TROUBLESHOOTING.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-2 text-left"
            >
              <h4 className="text-xs font-bold text-[var(--ink)]">
                {item.title}
              </h4>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ContentPage>
  )
}
