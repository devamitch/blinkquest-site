import { getAppHref, getAppLabel, siteConfig } from '@/lib/site'

export function DownloadCta() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div className="rounded-[36px] bg-[#262624] px-7 py-12 sm:p-14 text-white">
          <p className="text-xs font-semibold tracking-wide uppercase text-[#E58A6B]">
            {siteConfig.playStoreLive ? 'Free on Google Play' : 'In closed testing'}
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight leading-tight max-w-2xl">
            Give your eyes a break that counts.
          </h2>
          <p className="mt-5 text-lg text-white/75 max-w-xl leading-relaxed">
            {siteConfig.playStoreLive
              ? 'Install BlinkQuest and sign in with Google or Setu. Your scans stay on your phone.'
              : "BlinkQuest is in closed testing before its Play Store launch. Email us your Google account and we'll add you as a tester."}
          </p>
          <a
            href={getAppHref}
            className="mt-8 inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#DA7756] hover:bg-[#C86747] font-semibold transition-colors"
          >
            {getAppLabel}
          </a>
          <p className="mt-6 text-sm text-white/55">
            Free · Android {siteConfig.minAndroidVersion} and up · Front camera
          </p>
        </div>
      </div>
    </section>
  )
}
