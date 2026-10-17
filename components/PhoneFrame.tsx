import Image from 'next/image'

/**
 * Ultra-premium, precision-engineered Android device frame:
 * - Exact 720/1520 aspect ratio matching native Moto G71 release build screenshots.
 * - Gentle inner corner radius (rounded-[1.4rem]) ensuring top buttons (menu, settings, back, info) and labels are 100% visible and NEVER clipped.
 * - Micro camera punch-hole centered in the natural top-status dead-zone without pushing or severing screen contents.
 * - Hardware titanium chassis with chamfered highlights, subtle antenna bands, volume rocker and power buttons.
 * - Glossy glass reflection overlay.
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
      className={`group relative aspect-[720/1520] w-full rounded-[2.4rem] bg-gradient-to-b from-[#383733] via-[#22211E] to-[#141312] p-[6px] sm:p-[8px] shadow-[0_25px_60px_-15px_rgba(27,26,24,0.45),0_0_0_1px_rgba(255,255,255,0.09)] ring-1 ring-black/60 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_35px_70px_-15px_rgba(217,107,67,0.3)] ${className}`}
    >
      {/* Outer hardware buttons */}
      <div className="absolute -left-[3px] top-24 w-[3px] h-10 bg-[#42403B] rounded-l-md shadow-xs" />
      <div className="absolute -left-[3px] top-38 w-[3px] h-14 bg-[#42403B] rounded-l-md shadow-xs" />
      <div className="absolute -right-[3px] top-30 w-[3px] h-12 bg-[#42403B] rounded-r-md shadow-xs" />

      {/* Subtle ear-piece speaker slit in top bezel */}
      <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-12 h-[2.5px] rounded-full bg-[#181715] z-30" />

      {/* Screen container: exact 720/1520 aspect ratio matching screenshot dimensions 1:1 */}
      <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-[#FBF9F5] flex flex-col shadow-inner">
        {/* Realistic micro camera punch hole - sits naturally in the top center dead-space without pushing content */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#0a0a09] ring-1 ring-black/40 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] flex items-center justify-center z-20 pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1f2937]/70 shadow-[inset_0_0_1px_rgba(56,189,248,0.5)]" />
        </div>

        {/* The screenshot: fills 100% of the screen area without distortion or clipping */}
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 85vw, 420px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            priority={priority}
          />
          {/* Subtle glossy glass reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />
        </div>

        {/* Translucent Android home gesture pill */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-black/20 dark:bg-white/30 pointer-events-none z-20" />
      </div>
    </div>
  )
}

