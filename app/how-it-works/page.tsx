import { constructMetadata } from '@/lib/seo'
import { Block, Card, ContentPage } from '@/components/ContentPage'

export const metadata = constructMetadata({
  title: 'How it works',
  description: 'How BlinkQuest uses the front camera on your phone to check eye games and breaks, without saving or uploading frames.',
  path: '/how-it-works',
})

const steps = [
  ['Sign in', 'With Google or Setu. Your account gives your progress an owner; it isn’t used to upload your scans.'],
  ['Pick a break', 'Thirty seconds to a minute. Each activity explains what you’ll do and how it’s scored before you start.'],
  ['The camera checks it', 'BlinkQuest finds 478 face landmarks per frame on the phone and works out where your eyes point, whether they’re open and when you blink.'],
  ['Only the result is kept', 'Frames are thrown away as soon as they’re read. What stays is small: a score, blink counts, how long you were tracked.'],
]

export default function HowItWorksPage() {
  return (
    <ContentPage
      badge="How it works"
      title="Your phone does all the looking."
      subtitle="The front camera, Google MediaPipe and a few rules about what counts. No server sees your face."
    >
      <div className="grid gap-3">
        {steps.map(([title, body], i) => (
          <Card key={title}>
            <p className="text-xs font-semibold text-[var(--terracotta-strong)]">Step {i + 1}</p>
            <h3 className="font-semibold text-[var(--ink)]">{title}</h3>
            <p className="text-sm">{body}</p>
          </Card>
        ))}
      </div>

      <Block title="Why the camera checks every activity">
        <p>A timer can&apos;t tell whether you looked away. The camera can. Far-focus time only counts while your eyes are off the screen, a blink only counts when the eyelids actually close, and eye games refuse to start if your eyes don&apos;t move far enough in the check.</p>
      </Block>

      <Block title="Glasses and lighting">
        <p>Most glasses work. Strong lens glare can hide the eyes; tilting the phone slightly usually fixes it. In very dim light tracking pauses rather than guessing, and the timer waits.</p>
      </Block>

      <Block title="Distance">
        <p>Phones are held much closer than laptops. BlinkQuest estimates distance from the size of your iris and only warns when you&apos;re closer than about 18 cm.</p>
      </Block>
    </ContentPage>
  )
}
