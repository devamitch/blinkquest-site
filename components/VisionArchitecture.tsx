import { Cpu, ShieldCheck, Zap, Database, Lock, Eye } from 'lucide-react'

const pipelineSteps = [
  {
    step: '01',
    title: 'Ephemeral Camera Stream',
    tech: 'Android CameraX · 30 FPS',
    body: 'Captures frames strictly into volatile Android OS memory buffers. Frames are never written to internal flash storage, cache directories, or external drives.',
    icon: Eye,
  },
  {
    step: '02',
    title: 'MediaPipe 478-Point Mesh',
    tech: 'TFLite GPU / NPU Delegate',
    body: 'Extracts 3D coordinates for ocular perimeters, iris centers, and eyelid contours in under 12 milliseconds using hardware neural acceleration.',
    icon: Cpu,
  },
  {
    step: '03',
    title: 'Eye Aspect Ratio (EAR)',
    tech: 'Sub-Millisecond Heuristic',
    body: 'Calculates the ratio of vertical eyelid aperture to horizontal eye width: EAR = (||p2-p6|| + ||p3-p5||) / (2·||p1-p4||) to reliably register genuine full-closure blinks.',
    icon: Zap,
  },
  {
    step: '04',
    title: 'Zero-Cloud Telemetry',
    tech: '100% Offline Cryptographic Vault',
    body: 'Raw video frames are immediately recycled from RAM after vector extraction. Only aggregated blink totals and streak stats persist locally via encrypted SQLite.',
    icon: ShieldCheck,
  },
]

export function VisionArchitecture() {
  return (
    <section className="py-24 md:py-32 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface2)] text-[var(--terracotta-strong)] text-xs font-bold uppercase tracking-wider border border-[var(--border)] shadow-2xs">
            <Lock className="w-3.5 h-3.5" />
            Engineering Deep-Dive
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)] leading-tight">
            How MediaPipe tracks your eyes without recording a single frame.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">
            Privacy is not a setting in BlinkQuest—it is our core software architecture. Here is the mathematical pipeline executed directly on your smartphone processor.
          </p>
        </div>

        {/* Pipeline Cards Grid */}
        <div className="mt-14 grid md:grid-cols-4 gap-6">
          {pipelineSteps.map(({ step, title, tech, body, icon: Icon }) => (
            <div
              key={step}
              className="group relative p-7 rounded-[28px] bg-[var(--surface2)]/40 border border-[var(--border)] hover:bg-[var(--surface)] hover:border-[var(--border-strong)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-extrabold text-[var(--terracotta)] tracking-wider">
                    {step}
                  </span>
                  <span className="w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--ink)] group-hover:scale-110 group-hover:text-[var(--terracotta)] transition-all">
                    <Icon className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-[var(--ink)] leading-snug">
                  {title}
                </h3>

                <p className="mt-1 text-xs font-mono font-semibold text-[var(--sage)]">
                  {tech}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
                  {body}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center gap-1.5 text-[11px] font-semibold text-[var(--ink-muted)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)]" />
                <span>On-device only</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mathematical Proof & Privacy Callout */}
        <div className="mt-10 p-6 sm:p-8 rounded-[30px] bg-gradient-to-r from-[#1D1C1A] via-[#242320] to-[#161514] text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 justify-center md:justify-start">
              <Database className="w-4 h-4 text-[var(--sage)]" />
              Verified Zero Network Egress
            </h4>
            <p className="text-xs text-white/70 max-w-xl">
              Inspect our open manifest or Android network inspector. BlinkQuest issues zero HTTP requests during eye tracking sessions. Your face belongs to you.
            </p>
          </div>
          <div className="font-mono text-xs bg-white/10 px-4 py-2.5 rounded-xl border border-white/15 text-white/90 shrink-0">
            EAR &lt; 0.21 = Full Blink Event
          </div>
        </div>
      </div>
    </section>
  )
}
