import { PhoneFrame } from '@/components/PhoneFrame'

const screens = [
  {
    src: '/assets/app/home.webp',
    title: 'Home',
    body: 'Your Eye Battery, level, streak and today’s three activities.',
  },
  {
    src: '/assets/app/activities.webp',
    title: 'Activities',
    body: 'Eight short games and breaks, sorted by what they practise.',
  },
  {
    src: '/assets/app/orbit-follow.webp',
    title: 'Eye games',
    body: 'Follow, pop and trace targets with your eyes. Head turns don’t score.',
  },
  {
    src: '/assets/app/near-far.webp',
    title: 'Guided breaks',
    body: 'Near / far focus and calm routines, each step checked by the camera.',
  },
  {
    src: '/assets/app/focus-point.webp',
    title: 'Focus Point',
    body: 'Thirty seconds of soft gaze and slow breathing.',
  },
]

export function ScreensShowcase() {
  return (
    <section className="py-20 md:py-28 bg-[var(--surface2)]/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--ink)]">
            The real app, not a mockup.
          </h2>
          <p className="mt-4 text-lg text-[var(--ink-secondary)]">
            Every screen below is a screenshot from a release build on an Android phone.
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-6xl mx-auto">
        <ul className="flex md:grid md:grid-cols-5 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-5 sm:scroll-px-6 px-5 sm:px-6 pb-4 [scrollbar-width:none]">
          {screens.map((s) => (
            <li key={s.title} className="snap-start shrink-0 w-[62vw] max-w-[260px] md:w-auto md:max-w-none">
              <PhoneFrame src={s.src} alt={`BlinkQuest ${s.title} screen`} />
              <h3 className="mt-5 font-semibold text-[var(--ink)]">{s.title}</h3>
              <p className="mt-1 text-sm text-[var(--ink-secondary)] leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
