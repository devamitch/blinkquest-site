import { constructMetadata } from '@/lib/seo'
import { Block, Card, ContentPage } from '@/components/ContentPage'

export const metadata = constructMetadata({
  title: 'Features',
  description:
    'Eight camera-checked eye games and breaks, an on-device blink scanner, the Eye Battery and gentle eye alerts.',
  path: '/features',
})

const games = [
  ['Orb Pop', '30 s', 'Look at each orb until it pops, then back to the centre.'],
  ['Slider Chase', '30 s', 'Follow an orb sliding left and right with your eyes.'],
  ['Orbit Follow', '30 s', 'Trace an orb circling the screen.'],
  ['Direction Trail', '30 s', 'Look where each arrow points.'],
]

const breaks = [
  ['Near / Far Break', '60 s', 'Switch focus between the screen and something 6 m away. Far time only counts while you look away.'],
  ['Blink Bloom', '60 s', 'Slow, full blinks grow a flower. Every petal is a blink the camera saw.'],
  ['Focus Garden', '25 s', 'Soft gaze, eyes closed, look far, three blinks, relax. Each step is checked.'],
  ['Focus Point', '30 s', 'Rest your eyes on a dot and breathe with the ring.'],
]

function List({ items }: { items: string[][] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {items.map(([name, time, body]) => (
        <Card key={name}>
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-semibold text-[var(--ink)]">{name}</h3>
            <span className="text-xs text-[var(--ink-muted)]">{time}</span>
          </div>
          <p className="text-sm">{body}</p>
        </Card>
      ))}
    </div>
  )
}

export default function FeaturesPage() {
  return (
    <ContentPage
      badge="Features"
      title="Small breaks, checked by the camera."
      subtitle="Every activity uses the front camera to make sure you're really doing it: your eyes move, look away, close or blink when asked. The timer waits when they don't."
    >
      <Block title="Eye games">
        <p>Played with your eyes, not your thumbs. Each run starts with a five-second check that sets your own range and proves your eyes are doing the work. Turning your head doesn&apos;t score.</p>
        <List items={games} />
      </Block>

      <Block title="Guided breaks">
        <List items={breaks} />
      </Block>

      <Block title="Blink scanner">
        <p>Start a scan and BlinkQuest finds your face and eyes with Google MediaPipe, counts blinks, notices long closures and estimates how close you hold the phone. You can keep it running in a small floating window while you use the rest of the app.</p>
      </Block>

      <Block title="Eye Battery and alerts">
        <p>The Eye Battery starts full each morning. Scans drain it when you hold the phone too close, blink rarely or keep your eyes half closed; breaks top it up. Optional alerts tell you when you&apos;re too close, have barely blinked, or are due a 20-20-20 break.</p>
      </Block>

      <Block title="Your history">
        <p>Charts by hour, day, week and month for blink rate, eye closure and face position, plus a list of every scan and activity. Optional sleep and screen-time check-ins are kept separate from what the camera measures.</p>
      </Block>

      <Block title="What it isn't">
        <p>BlinkQuest doesn&apos;t test your eyesight, measure your prescription or detect eye disease. A symptoms guide points out signs worth showing an eye care professional, but it can&apos;t examine your eyes.</p>
      </Block>
    </ContentPage>
  )
}
