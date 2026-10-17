import { constructMetadata } from '@/lib/seo'
import { Card, ContentPage } from '@/components/ContentPage'

export const metadata = constructMetadata({
  title: 'Roadmap',
  description: 'What is in BlinkQuest today and what is coming next.',
  path: '/roadmap',
})

const phases = [
  {
    label: 'In the app',
    items: [
      'Eight camera-checked eye games and breaks',
      'On-device blink scanner with floating preview',
      'Eye Battery, alerts and history charts',
      'Sign in with Google or Setu',
    ],
  },
  {
    label: 'Next',
    items: ['Public Play Store launch', 'Reminders on a schedule you set', 'More eye games'],
  },
  {
    label: 'Later',
    items: ['Optional backup of progress to your own account', 'Tablet layouts'],
  },
]

export default function RoadmapPage() {
  return (
    <ContentPage badge="Roadmap" title="What's here, and what's next." subtitle="Plans change with feedback. Tell us what you'd like to see.">
      <div className="grid gap-3">
        {phases.map((p) => (
          <Card key={p.label}>
            <h2 className="font-serif text-xl font-semibold text-[var(--ink)]">{p.label}</h2>
            <ul className="mt-2 space-y-1.5 list-disc pl-5 text-[var(--ink-secondary)]">
              {p.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </ContentPage>
  )
}
