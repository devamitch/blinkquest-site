import { constructMetadata } from '@/lib/seo'
import { ContentPage } from '@/components/ContentPage'
import { Camera, Cpu, Eye, ShieldCheck } from 'lucide-react'

export const metadata = constructMetadata({
  title: 'How BlinkQuest Works: Technical Architecture',
  description: 'Deep dive into how BlinkQuest tracks blinks in real-time with MediaPipe Face Mesh and compute Eye Aspect Ratio completely on-device.',
  path: '/how-it-works',
})

export default function HowItWorksPage() {
  return (
    <ContentPage
      badge="Technical Architecture"
      title="How on-device blink detection works."
      subtitle="A breakdown of computer vision, Eye Aspect Ratio algorithms, and hardware memory safety."
    >
      <div className="space-y-10">
        {/* Step 1 */}
        <div className="p-8 rounded-[32px] bg-[#FFFFFF] border border-[var(--border)] shadow-xs flex flex-col md:flex-row gap-6 items-start">
          <div className="w-14 h-14 rounded-2xl bg-[#DA7756]/15 text-[#DA7756] flex items-center justify-center shrink-0">
            <Camera className="w-7 h-7" />
          </div>
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#DA7756]">Step 1 · Optical Capture</span>
            <h3 className="font-serif text-2xl font-bold text-[#262624]">Front-Camera Frame Streaming</h3>
            <p className="text-sm text-[#5F5B56] leading-relaxed">
              When the scanner or floating PiP starts, the app accesses the front-facing camera using CameraX with a low-power, preview-only buffer. Video encoding is completely bypassed—no MP4 files or recorded snippets are ever constructed or written to disk.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="p-8 rounded-[32px] bg-[#FFFFFF] border border-[var(--border)] shadow-xs flex flex-col md:flex-row gap-6 items-start">
          <div className="w-14 h-14 rounded-2xl bg-[#4E7A4C]/15 text-[#4E7A4C] flex items-center justify-center shrink-0">
            <Cpu className="w-7 h-7" />
          </div>
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#4E7A4C]">Step 2 · Local Neural Inference</span>
            <h3 className="font-serif text-2xl font-bold text-[#262624]">MediaPipe 478 Landmark Face Mesh</h3>
            <p className="text-sm text-[#5F5B56] leading-relaxed">
              Google MediaPipe runs a quantized on-device neural network targeting 478 facial coordinates. 16 landmarks specifically outline the upper and lower eyelid margins and corneal boundaries for both the left and right eyes.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="p-8 rounded-[32px] bg-[#FFFFFF] border border-[var(--border)] shadow-xs flex flex-col md:flex-row gap-6 items-start">
          <div className="w-14 h-14 rounded-2xl bg-[#DA7756]/15 text-[#DA7756] flex items-center justify-center shrink-0">
            <Eye className="w-7 h-7" />
          </div>
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#DA7756]">Step 3 · Geometric Calculus</span>
            <h3 className="font-serif text-2xl font-bold text-[#262624]">Eye Aspect Ratio (EAR) Evaluation</h3>
            <p className="text-sm text-[#5F5B56] leading-relaxed">
              The Eye Aspect Ratio (Soukupová & Čech formula) evaluates the ratio of vertical eyelid distances to horizontal eye width:
            </p>
            <div className="p-4 rounded-xl bg-[#F0EEE6] font-mono text-xs text-[#262624] overflow-x-auto">
              EAR = ( ||p2 - p6|| + ||p3 - p5|| ) / ( 2 * ||p1 - p4|| )
            </div>
            <p className="text-sm text-[#5F5B56] leading-relaxed">
              When EAR drops below your calibrated threshold (typically ~0.20) for 2 to 4 consecutive frames, a full blink event is registered. If the closure is shallow, it is logged as an incomplete blink.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="p-8 rounded-[32px] bg-[#FFFFFF] border border-[var(--border)] shadow-xs flex flex-col md:flex-row gap-6 items-start">
          <div className="w-14 h-14 rounded-2xl bg-[#4E7A4C]/15 text-[#4E7A4C] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#4E7A4C]">Step 4 · Memory Purge</span>
            <h3 className="font-serif text-2xl font-bold text-[#262624]">Immediate Frame Garbage Collection</h3>
            <p className="text-sm text-[#5F5B56] leading-relaxed">
              Once the scalar EAR float is calculated, the raw image buffer is immediately deallocated from RAM. Only aggregate numeric timestamps (e.g., &ldquo;Blink at 14:02:18&rdquo;) are retained in local SQLite.
            </p>
          </div>
        </div>
      </div>
    </ContentPage>
  )
}
