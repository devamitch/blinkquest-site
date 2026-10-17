import { constructMetadata } from '@/lib/seo'
import { ContentPage } from '@/components/ContentPage'
import { ShieldCheck, Lock, EyeOff, ServerOff } from 'lucide-react'

export const metadata = constructMetadata({
  title: 'Privacy Policy (100% On-Device)',
  description: 'BlinkQuest privacy manifesto: zero cloud servers, zero analytics, zero video storage. All computer vision is computed locally in RAM.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <ContentPage
      badge="Zero-Cloud Privacy Policy"
      title="Your face and eyes belong to you alone."
      subtitle="Last updated: October 2026 · A plain-English privacy manifesto."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[var(--border)] shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#4E7A4C]/15 text-[#4E7A4C] flex items-center justify-center shrink-0">
              <EyeOff className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#262624]">Zero Video Storage</h3>
              <p className="text-xs text-[#5F5B56] mt-1">Frames are discarded in RAM immediately after calculating EAR scalar metrics.</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[var(--border)] shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#4E7A4C]/15 text-[#4E7A4C] flex items-center justify-center shrink-0">
              <ServerOff className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-[#262624]">Zero Cloud Servers</h3>
              <p className="text-xs text-[#5F5B56] mt-1">No remote servers, no authentication tokens, no third-party tracking SDKs.</p>
            </div>
          </div>
        </div>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#262624]">1. Camera Permission Justification</h2>
          <p className="text-sm text-[#5F5B56] leading-relaxed">
            BlinkQuest requests Android&rsquo;s <code>android.permission.CAMERA</code> permission strictly for running Google MediaPipe Face Mesh in real-time. Camera frames are processed strictly on your device&rsquo;s CPU/GPU and are never saved to disk, encoded to video files, or transmitted over the network.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#262624]">2. Local Data Storage & Full Deletion</h2>
          <p className="text-sm text-[#5F5B56] leading-relaxed">
            Aggregate session metrics (such as average blink count, session start and end times, and optional self-reported symptoms) are saved exclusively in a private SQLite database inside the app&rsquo;s sandboxed internal storage on your device. You can erase all data at any time via Settings &rarr; &ldquo;Erase All Data&rdquo;.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#262624]">3. No Analytics or Advertising Identifiers</h2>
          <p className="text-sm text-[#5F5B56] leading-relaxed">
            BlinkQuest contains zero advertising SDKs, zero user tracking pixels, and zero third-party telemetry. We do not collect Google Advertising ID (AAID) or device identifiers.
          </p>
        </section>
      </div>
    </ContentPage>
  )
}
