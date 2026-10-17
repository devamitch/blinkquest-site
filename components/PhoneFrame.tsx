import Image from 'next/image'

/**
 * Editorial, minimal device silhouette:
 * - Exact 720/1520 aspect ratio matching native Moto G71 release build screenshots 1:1.
 * - Flat, elegant chassis without gaudy 3D plastic buttons or artificial shadows.
 * - Gentle screen corner radius so headers, action icons (menu, settings, back), and text are 100% unclipped.
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
      className={`relative aspect-[720/1520] w-full rounded-[2.2rem] bg-[#1E1D1B] p-[6px] sm:p-[7px] border border-black/10 transition-transform duration-300 ease-out hover:-translate-y-1 ${className}`}
    >
      {/* Screen container: pristine 1:1 reproduction of the authentic app screenshot */}
      <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-[#FAF9F5]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 85vw, 420px"
          className="object-cover object-top"
          priority={priority}
        />
      </div>
    </div>
  )
}
