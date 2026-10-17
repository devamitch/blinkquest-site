import { PhoneFrame } from '@/components/PhoneFrame'
import { Sparkles, Activity, Eye, Compass, Moon } from 'lucide-react'

const screens = [
  {
    src: '/assets/app/home.webp',
    title: 'The Home Dashboard',
    tag: 'Battery & Streaks',
    icon: Sparkles,
    body: 'Live Eye Battery status, current fatigue level, daily streaks, and customized recommended activities.',
  },
  {
    src: '/assets/app/activities.webp',
    title: 'Exercise Sanctuary',
    tag: '8 Modalities',
    icon: Activity,
    body: 'Categorized quick activities designed specifically for eye muscle relaxation, near/far focus, and tracking.',
  },
  {
    src: '/assets/app/orbit-follow.webp',
    title: 'Gaze Games',
    tag: 'Ocular Control',
    icon: Eye,
    body: 'Follow, pop and trace targets purely with pupil movement. Anti-cheat ignores head tilts to ensure genuine ocular exercise.',
  },
  {
    src: '/assets/app/near-far.webp',
    title: 'Verified Breaks',
    tag: '20-20-20 Rule',
    icon: Compass,
    body: 'Near/far focus cycles where front camera computer vision ensures you look away and complete real blinks.',
  },
  {
    src: '/assets/app/focus-point.webp',
    title: 'Focus Point',
    tag: 'Gentle Gaze',
    icon: Moon,
    body: 'Thirty seconds of calming, soft visual fixation paired with rhythmic breath cadence to ease strain.',
  },
]

export function ScreensShowcase() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[var(--surface2)]/40 via-[var(--surface2)]/70 to-[var(--bg)] border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface)] text-[var(--terracotta-strong)] text-xs font-semibold uppercase tracking-wider border border-[var(--border)] shadow-xs">
            Authentic Device Renders
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--ink)]">
            Crafted for human eyes.
          </h2>
          <p className="mt-4 text-lg text-[var(--ink-secondary)] leading-relaxed">
            Every view is captured straight from real Android release builds. No mockups, no false promises.
          </p>
        </div>
      </div>

      <div className="mt-14 max-w-7xl mx-auto">
        <ul className="flex md:grid md:grid-cols-5 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-5 sm:scroll-px-6 px-5 sm:px-6 pb-6 [scrollbar-width:none]">
          {screens.map((s) => {
            const Icon = s.icon
            return (
              <li
                key={s.title}
                className="snap-start shrink-0 w-[72vw] max-w-[280px] md:w-auto md:max-w-none flex flex-col group"
              >
                <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  <PhoneFrame src={s.src} alt={`BlinkQuest ${s.title} screen`} />
                </div>
                <div className="mt-6 flex-1 flex flex-col justify-between p-4 rounded-2xl bg-[var(--surface)]/60 border border-[var(--border)] shadow-xs group-hover:bg-[var(--surface)] group-hover:shadow-md transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[var(--terracotta-strong)] uppercase tracking-wider">
                      <span>{s.tag}</span>
                      <Icon className="w-4 h-4 text-[var(--terracotta)]" />
                    </div>
                    <h3 className="mt-2 text-base font-bold text-[var(--ink)]">{s.title}</h3>
                    <p className="mt-1.5 text-xs text-[var(--ink-secondary)] leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
