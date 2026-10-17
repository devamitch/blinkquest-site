import Image from 'next/image'

/**
 * Ultra-premium, precision-crafted device frame with realistic bezel, speaker grill,
 * and liquid-glass drop shadow.
 */
export function PhoneFrame({
  src,
  alt,
  className = '',
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
}) {
  return (
    <div
      className={`group relative aspect-[9/19] rounded-[2.8rem] bg-gradient-to-b from-[#2D2C28] via-[#1E1D1A] to-[#121110] p-[9px] shadow-[0_25px_60px_-15px_rgba(27,26,24,0.35),0_0_0_1px_rgba(255,255,255,0.08)] ring-1 ring-black/40 transition-transform duration-500 ease-out hover:scale-[1.02] ${className}`}
    >
      {/* Front camera punch hole / speaker */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#141312] rounded-full z-20 flex items-center justify-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#0A0A09] border border-white/10" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#1F2937]/80" />
      </div>

      {/* Screen container */}
      <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-[var(--bg)]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 85vw, 360px"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          priority={priority}
        />
        {/* Subtle glass reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
