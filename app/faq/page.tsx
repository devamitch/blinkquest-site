import { constructMetadata } from '@/lib/seo'
import { ContentPage } from '@/components/ContentPage'

export const metadata = constructMetadata({
  title: 'Frequently Asked Questions (FAQ)',
  description: 'Common questions about BlinkQuest: battery life, privacy guarantees, accuracy with glasses, and clinical status.',
  path: '/faq',
})

const faqs = [
  {
    q: 'Does keeping the camera open drain my phone battery?',
    a: 'BlinkQuest is heavily optimized for energy efficiency. The camera preview operates in a low-power YUV buffer mode with no rendering overhead, and inference runs through quantized MediaPipe models that consume less than 3-5% battery per hour of continuous tracking. For all-day use, we recommend using the intermittent 20-20-20 check-in mode.',
  },
  {
    q: 'Does BlinkQuest work if I wear prescription glasses or contacts?',
    a: 'Yes. MediaPipe Face Mesh identifies corneal landmarks and eyelid margins through standard optical glass, anti-reflective coatings, and clear contact lenses. Heavily tinted sunglasses or extreme mirror lenses will impede optical landmark detection.',
  },
  {
    q: 'Are any pictures or videos saved or sent to a server?',
    a: 'Never. BlinkQuest does not possess internet permission for camera feeds. Video frames are held in temporary memory for under 15 milliseconds while computing the Eye Aspect Ratio float, and then immediately freed by Android’s memory manager.',
  },
  {
    q: 'Is BlinkQuest a medical diagnosis tool?',
    a: 'No. BlinkQuest is an ergonomic habit and wellness awareness companion. It does not diagnose dry eye disease, blepharitis, glaucoma, or refractive errors. If you suffer persistent pain or vision changes, please visit an optometrist or ophthalmologist.',
  },
  {
    q: 'Can I export my wellness trends and blink data?',
    a: 'Yes. All history stored in the local SQLite database can be exported as a clean JSON file at any time from Settings, or deleted permanently with one tap.',
  },
]

export default function FaqPage() {
  return (
    <ContentPage
      badge="Questions & Clarifications"
      title="Frequently Asked Questions."
      subtitle="Everything you need to know about privacy, accuracy, and everyday use."
    >
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="p-8 rounded-[32px] bg-[#FFFFFF] border border-[var(--border)] shadow-xs space-y-3"
          >
            <h3 className="font-serif text-xl font-bold text-[#262624]">{faq.q}</h3>
            <p className="text-sm text-[#5F5B56] leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </ContentPage>
  )
}
