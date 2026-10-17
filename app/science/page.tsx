import { constructMetadata } from '@/lib/seo'
import { ContentPage } from '@/components/ContentPage'
import { AlertCircle, BookOpen, HeartHandshake, ShieldAlert } from 'lucide-react'

export const metadata = constructMetadata({
  title: 'Science & Medical Triage Guidelines',
  description: 'The ocular ergonomics science behind BlinkQuest: Computer Vision Syndrome (CVS), tear film dynamics, and honest symptom triage.',
  path: '/science',
})

export default function SciencePage() {
  return (
    <ContentPage
      badge="Clinical Evidence & Triage"
      title="The science of digital eye strain."
      subtitle="Understanding tear film breakup, the 20-20-20 rule, and knowing when to see an optometrist."
    >
      <div className="space-y-8">
        {/* Medical disclaimer alert */}
        <div className="p-6 rounded-2xl bg-[#DA7756]/10 border border-[#DA7756]/30 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-[#DA7756] shrink-0 mt-0.5" />
          <div className="space-y-1 text-sm text-[#262624]">
            <p className="font-bold">Not a Diagnostic Medical Device</p>
            <p className="text-[#5F5B56] leading-relaxed">
              BlinkQuest is designed solely for ergonomic education, screen-habit mindfulness, and blink frequency tracking. It does not inspect the retina, lens, optic nerve, or intraocular pressure. It cannot diagnose or treat glaucoma, macular degeneration, cataracts, or retinal detachment.
            </p>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#262624]">Computer Vision Syndrome (CVS)</h2>
          <p>
            The American Optometric Association (AOA) defines Computer Vision Syndrome (also termed Digital Eye Strain) as a group of eye and vision-related problems that result from prolonged computer, tablet, and smartphone use.
          </p>
          <p>
            Research demonstrates that when reading digital text, our spontaneous blink rate drops from <strong>18 blinks/min to roughly 6 blinks/min</strong>. Furthermore, up to 60% of blinks during intensive cognitive focus fail to achieve full contact between the upper and lower eyelid margins.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#262624]">Tear Film Breakup Time (TBUT)</h2>
          <p>
            The precorneal tear film is a delicate, three-layer fluid structure: an inner mucin layer, a middle aqueous layer, and an outer lipid layer secreted by the meibomian glands along the rim of the eyelids.
          </p>
          <p>
            A complete blink compresses the meibomian glands, squeezing a fresh layer of protective oil across the ocular surface. When blinking is suppressed, the tear film breaks up within 5 to 10 seconds, exposing sensitive corneal nerve endings directly to ambient air and evaporation.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#262624]">Red-Flag Symptoms Requiring Prompt Care</h2>
          <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[var(--border)] shadow-xs space-y-3 text-sm text-[#262624]">
            <p className="font-semibold text-[#BE3434] flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" /> Seek immediate clinical care if you experience:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-[#5F5B56]">
              <li>Sudden loss or blacking out of vision in one or both eyes</li>
              <li>A sudden shower of new floaters accompanied by flashes of light (retinal risk)</li>
              <li>Severe, deep ocular pain or pain accompanied by nausea/vomiting</li>
              <li>Halos or rainbow rings around streetlights or indoor light sources</li>
              <li>Chemical exposure or foreign body sensation that does not rinse away</li>
            </ul>
          </div>
        </section>
      </div>
    </ContentPage>
  )
}
