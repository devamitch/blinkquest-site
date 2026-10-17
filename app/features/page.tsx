import { constructMetadata } from '@/lib/seo'
import { ContentPage } from '@/components/ContentPage'
import { Eye, BatteryCharging, Smartphone, HeartHandshake, Shield, Sparkles, Activity, Layers } from 'lucide-react'

export const metadata = constructMetadata({
  title: 'Features & Capabilities',
  description: 'Explore the full suite of ocular ergonomics tools in BlinkQuest: real-time blink detection, eye battery, floating PiP, and mindful routines.',
  path: '/features',
})

const featuresList = [
  {
    icon: Eye,
    title: 'Real-Time Eye Aspect Ratio (EAR) Scanner',
    description: 'Tracks 478 3D facial landmarks at 30 fps to compute real-time eyelid aperture. Distinguishes full blinks from micro-twitches and incomplete closures.',
    badge: 'Core Vision Engine',
  },
  {
    icon: BatteryCharging,
    title: 'Holistic Eye Battery Gauge',
    description: 'A dynamic 0-100% stamina gauge reflecting visual stamina. Depletes during rapid continuous screen gaze and recovers during breaks and restful sleep.',
    badge: 'Ergonomic Indicator',
  },
  {
    icon: Smartphone,
    title: 'Floating PiP HUD Multitasking',
    description: 'Runs as an overlay picture-in-picture window over your terminal, browser, or streaming player so you never have to choose between work and eye comfort.',
    badge: 'Android Native PiP',
  },
  {
    icon: Activity,
    title: 'Smart 20-20-20 Rule Automations',
    description: 'Calculates active screen time and alerts you every 20 minutes to gaze 20 feet away for 20 seconds with soft, non-disruptive haptic pulses.',
    badge: 'Evidence-Based Habit',
  },
  {
    icon: HeartHandshake,
    title: 'Interactive Mindful Exercises',
    description: 'Three targeted ocular motility routines (Blink Bloom, Focus Shift, Guided Palming) designed to relax the ciliary muscle and stimulate meibum flow.',
    badge: 'Ocular Motility',
  },
  {
    icon: Shield,
    title: 'Zero-Cloud Offline SQLite Vault',
    description: 'Your sessions, blink statistics, and self-reported symptoms are preserved locally on your phone storage. Wipe your entire history in one tap anytime.',
    badge: 'Privacy Architecture',
  },
]

export default function FeaturesPage() {
  return (
    <ContentPage
      badge="Features & Capabilities"
      title="Purpose-built for visual relief."
      subtitle="BlinkQuest pairs on-device computer vision with gentle wellness mechanics to help you maintain healthy vision habits effortlessly."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {featuresList.map((f, i) => {
          const IconComponent = f.icon
          return (
            <div
              key={i}
              className="p-8 rounded-[32px] bg-[#FFFFFF] border border-[var(--border)] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#DA7756]/15 text-[#DA7756] flex items-center justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#736E68] bg-[#F0EEE6] px-2.5 py-1 rounded-full">
                    {f.badge}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#262624]">
                  {f.title}
                </h3>
                <p className="text-sm text-[#5F5B56] leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </ContentPage>
  )
}
