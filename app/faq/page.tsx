import { constructMetadata } from '@/lib/seo'
import { ContentPage } from '@/components/ContentPage'

export const metadata = constructMetadata({
  title: 'FAQ',
  description: 'Common questions about BlinkQuest: privacy, glasses, battery, accounts and what it can and can’t do.',
  path: '/faq',
})

const faqs = [
  {
    q: 'Are photos or videos of my face saved?',
    a: 'No. Frames are analysed on the phone and thrown away. Only small numbers like blink counts and scores are stored, on your phone.',
  },
  {
    q: 'Why do I need to sign in?',
    a: 'Your account gives your streaks and results an owner. Sign in with Google or with the Setu app. BlinkQuest has no server, so nothing is uploaded either way.',
  },
  {
    q: 'Why does every activity need the camera?',
    a: 'So it counts only what you actually do: eyes that really look away, close or blink. Without that, a break is just a timer you can ignore.',
  },
  {
    q: 'Does it work with glasses?',
    a: 'Usually, yes. If lens glare hides your eyes, tilt the phone a little. Tracking pauses in very dim light rather than guessing.',
  },
  {
    q: 'Does the camera drain the battery?',
    a: 'Only while a scan or activity is running, and most activities last under a minute. Long scans use about as much power as a video call.',
  },
  {
    q: 'Can it check my eyesight or detect eye disease?',
    a: 'No. It can’t measure vision or prescription and can’t detect conditions like cataracts or glaucoma. If something feels wrong, see an eye care professional.',
  },
  {
    q: 'How do I delete my data?',
    a: 'Settings → Delete data. You can remove scans, activity results, check-ins or everything. Uninstalling removes it all.',
  },
  {
    q: 'Which phones are supported?',
    a: 'Android 7.0 and newer with a front camera.',
  },
]

export default function FaqPage() {
  return (
    <ContentPage badge="FAQ" title="Questions, answered.">
      <div className="divide-y divide-[var(--border)]">
        {faqs.map((f) => (
          <div key={f.q} className="py-6 first:pt-0">
            <h2 className="font-semibold text-lg text-[var(--ink)]">{f.q}</h2>
            <p className="mt-2 text-[var(--ink-secondary)]">{f.a}</p>
          </div>
        ))}
      </div>
    </ContentPage>
  )
}
