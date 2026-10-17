import { Cpu, ShieldCheck, Zap, Database, Lock, Eye } from 'lucide-react'

const pipelineSteps = [
  {
    step: '01',
    title: 'In-RAM Camera Frame',
    tech: 'Android CameraX · 30 FPS',
    body: 'Frames stream directly into volatile Android OS memory buffers. Frames are never written to internal storage, flash cache, or external disk.',
    icon: Eye,
  },
  {
    step: '02',
    title: 'MediaPipe 478-Point Mesh',
    tech: 'TFLite NPU / GPU Delegate',
    body: 'Extracts 3D coordinates for ocular perimeters, iris centers, and eyelid contours in under 12 milliseconds using local hardware neural delegates.',
    icon: Cpu,
  },
  {
    step: '03',
    title: 'Eye Aspect Ratio (EAR)',
    tech: 'Sub-Millisecond Heuristic',
    body: 'Computes real-time eyelid aperture: EAR = (||p2-p6|| + ||p3-p5||) / (2·||p1-p4||) to reliably register genuine full-closure blinks versus half-twitches.',
    icon: Zap,
  },
  {
    step: '04',
    title: 'Zero Network Transmission',
    tech: '100% Offline Cryptographic Vault',
    body: 'Raw frames are immediately recycled from memory after vector extraction. Only aggregated daily statistics persist locally in encrypted SQLite.',
    icon: ShieldCheck,
  },
]

export function VisionArchitecture() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--terracotta-strong)]">
            Engineering & Privacy
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
            How MediaPipe tracks your eyes without recording a single frame.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
            Privacy is not a toggle in BlinkQuest—it is our mathematical architecture. Here is the exact on-device pipeline executed on your smartphone processor.
          </p>
        </div>

        {/* Flat Editorial Pipeline Grid */}
        <div className="mt-14 grid md:grid-cols-4 gap-6">
          {pipelineSteps.map(({ step, title, tech, body, icon: Icon }) => (
            <div
              key={step}
              className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[var(--terracotta-strong)]">
                    {step}
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-[var(--surface2)] flex items-center justify-center text-[var(--ink-secondary)]">
                    <Icon className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="mt-4 text-base font-bold text-[var(--ink)] leading-snug">
                  {title}
                </h3>

                <p className="mt-1 text-xs font-mono text-[var(--sage)] font-semibold">
                  {tech}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
                  {body}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[var(--border)] text-[11px] font-medium text-[var(--ink-muted)] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)]" />
                <span>On-device RAM only</span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Proof Note */}
        <div className="mt-8 p-5 rounded-xl bg-[var(--surface2)]/60 border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--ink-secondary)]">
          <p>
            Inspect our open manifest or Android network profiler: BlinkQuest issues zero outbound HTTP requests during gaze sessions.
          </p>
          <div className="font-mono font-semibold text-[var(--terracotta-strong)] shrink-0">
            EAR &lt; 0.21 = Full Blink
          </div>
        </div>
      </div>
    </section>
  )
}
