import { constructMetadata } from '@/lib/seo'
import { ContentPage } from '@/components/ContentPage'
import { CheckCircle2, Clock, Sparkles } from 'lucide-react'

export const metadata = constructMetadata({
  title: 'Public Roadmap & Vision',
  description: 'Upcoming features and development milestones for BlinkQuest: ambient lux adaptation, wearable integration, and desktop picture-in-picture.',
  path: '/roadmap',
})

const roadmapItems = [
  {
    phase: 'V1.0 · Current Release',
    status: 'completed',
    items: [
      'Full-featured real-time blink detection with MediaPipe Face Mesh',
      'Continuous Eye Battery stamina scoring algorithm',
      'Floating Picture-in-Picture HUD for seamless multitasking',
      'Three interactive ocular motility routines (Bloom, Focus, Palming)',
      '100% on-device SQLite database with one-click data wipe',
      'Physical spring-based squircle interface with zero false medical claims',
    ],
  },
  {
    phase: 'V1.2 · Q4 2026',
    status: 'in-progress',
    items: [
      'Ambient lighting lux detection via front light sensor to warn against glare',
      'Corneal distance estimation (alerts when holding phone too close <30cm)',
      'Custom soundscapes and singing bowl tones for 20-20-20 breaks',
      'Wearable haptic sync for Wear OS smartwatches',
    ],
  },
  {
    phase: 'V2.0 · 2027 Horizon',
    status: 'planned',
    items: [
      'Cross-platform desktop companion app (macOS / Windows / Linux) with floating menu bar HUD',
      'Encrypted local peer-to-peer sync between phone and workstation over Setu protocol',
      'Circadian screen temperature and sleep-readiness recommendations',
    ],
  },
]

export default function RoadmapPage() {
  return (
    <ContentPage
      badge="Public Roadmap"
      title="Where BlinkQuest is heading."
      subtitle="Transparent development priorities driven by community feedback and ergonomics research."
    >
      <div className="space-y-8">
        {roadmapItems.map((phase, idx) => (
          <div
            key={idx}
            className="p-8 rounded-[32px] bg-[#FFFFFF] border border-[var(--border)] shadow-xs space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-[#262624]">{phase.phase}</h3>
              <span
                className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                  phase.status === 'completed'
                    ? 'bg-[#4E7A4C]/10 text-[#4E7A4C]'
                    : phase.status === 'in-progress'
                    ? 'bg-[#DA7756]/10 text-[#DA7756]'
                    : 'bg-[#F0EEE6] text-[#736E68]'
                }`}
              >
                {phase.status === 'completed' ? 'Live' : phase.status === 'in-progress' ? 'Building' : 'Planned'}
              </span>
            </div>

            <ul className="space-y-2.5 pt-2">
              {phase.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#5F5B56]">
                  <CheckCircle2
                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                      phase.status === 'completed' ? 'text-[#4E7A4C]' : 'text-[#736E68]'
                    }`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ContentPage>
  )
}
