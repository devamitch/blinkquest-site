import Image from 'next/image'

/** A plain device frame around a real BlinkQuest screenshot (captured on a Moto G71). */
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
      className={`relative aspect-[9/19] rounded-[2.4rem] bg-[#1C1B19] p-[7px] shadow-[0_30px_60px_-20px_rgba(38,38,36,0.35)] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-[var(--bg)]">
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 70vw, 320px" className="object-cover object-top" priority={priority} />
      </div>
    </div>
  )
}
