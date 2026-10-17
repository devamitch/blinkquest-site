import { constructMetadata } from '@/lib/seo'
import { Block, ContentPage } from '@/components/ContentPage'

export const metadata = constructMetadata({
  title: 'Science',
  description: 'What research says about blinking and screens, what BlinkQuest measures, and when to see an eye care professional.',
  path: '/science',
})

export default function SciencePage() {
  return (
    <ContentPage
      badge="Science"
      title="Why blinking matters on screens."
      subtitle="What the research says, what BlinkQuest measures, and what it can't tell you."
    >
      <Block title="We blink less while we focus on screens">
        <p>
          Studies of people reading or working at displays have found spontaneous blink rates drop sharply
          compared with relaxed conversation, often to around a third, and a larger share of blinks are
          incomplete. Less blinking lets the tear film thin, which is one reason eyes feel dry and tired after
          long screen sessions. The American Optometric Association groups these symptoms as digital eye strain.
        </p>
      </Block>

      <Block title="Looking away helps">
        <p>
          Focusing near for long periods keeps the focusing muscles working. The common 20-20-20 habit (every 20
          minutes, look at something 20 feet away for 20 seconds) gives them a rest. BlinkQuest&apos;s Near / Far
          Break and alerts are built on that idea.
        </p>
      </Block>

      <Block title="What BlinkQuest measures">
        <p>
          Blink count and rate, how long eyes stay closed, an eye-aperture ratio, rough distance from the screen,
          head position and how much of the time your face was tracked. These are habit indicators. They are not
          comparable with clinical tests and are best compared only with your own earlier scans.
        </p>
      </Block>

      <Block title="What it can't tell you">
        <p>
          A front camera can&apos;t see inside the eye. BlinkQuest doesn&apos;t measure eyesight or prescription
          and can&apos;t detect cataracts, glaucoma, macular degeneration or any other condition.
        </p>
      </Block>

      <section className="rounded-[24px] bg-[var(--surface)] p-6">
        <h2 className="font-serif text-xl font-semibold text-[#9B2C2C]">See a professional promptly if you notice</h2>
        <ul className="mt-3 space-y-1.5 text-[var(--ink-secondary)] list-disc pl-5">
          <li>Sudden loss or dimming of vision in one or both eyes</li>
          <li>A sudden shower of floaters or flashes of light</li>
          <li>Severe eye pain, or eye pain with headache and nausea</li>
          <li>Halos around lights or a red, painful eye</li>
          <li>A chemical splash or something in the eye that won&apos;t rinse out</li>
        </ul>
      </section>
    </ContentPage>
  )
}
