import { constructMetadata } from '@/lib/seo'
import { Block, ContentPage } from '@/components/ContentPage'
import { siteConfig } from '@/lib/site'

export const metadata = constructMetadata({
  title: 'Privacy policy',
  description: 'What BlinkQuest collects, where it is stored, and how to delete it.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <ContentPage badge="Privacy policy" title="Your face stays on your phone." subtitle="Last updated 17 October 2026.">
      <Block title="Camera">
        <p>
          The front camera only runs during a scan or an activity you start. Frames are analysed on the phone with
          Google MediaPipe to find face and eye landmarks, then discarded. No photo, video or landmark mesh is
          saved or sent anywhere.
        </p>
      </Block>

      <Block title="What is stored on your phone">
        <p>
          Derived measurements only: about one row per second of eye and head geometry during scans (kept 7 days),
          blink and tracking events and per-minute summaries (90 days), hourly summaries (2 years), activity results,
          and check-ins you enter yourself. Android backup is turned off for the app.
        </p>
      </Block>

      <Block title="Your account">
        <p>
          You sign in with Google or with the Setu app. If you use Google, Google&apos;s sign-in service handles the
          login and BlinkQuest receives your name, email address and profile picture. If you use Setu, Setu passes
          your Setu display name and an identifier. That account information is stored on your phone. BlinkQuest has
          no server of its own and doesn&apos;t upload your scans, results or account details.
        </p>
      </Block>

      <Block title="No tracking">
        <p>BlinkQuest has no advertising or analytics SDKs and doesn&apos;t share or sell data.</p>
      </Block>

      <Block title="Deleting your data">
        <p>
          Settings → Delete data removes scans, activity results or check-ins, or everything at once. Signing out
          removes your account details from the phone. Uninstalling the app removes all of it.
        </p>
      </Block>

      <Block title="Children">
        <p>BlinkQuest isn&apos;t directed at children under 13.</p>
      </Block>

      <Block title="Contact">
        <p>
          Questions about privacy:{' '}
          <a href={`mailto:${siteConfig.contactEmail}`} className="underline underline-offset-2 text-[var(--ink)]">
            {siteConfig.contactEmail}
          </a>
        </p>
      </Block>
    </ContentPage>
  )
}
