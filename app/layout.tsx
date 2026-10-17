import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider'
import { siteConfig } from '@/lib/site'
import { ogImage } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'BlinkQuest: Mindful Blink & Vision Wellness for Android',
    template: '%s · BlinkQuest',
  },
  description: siteConfig.description,
  keywords: [
    'BlinkQuest',
    'Blink quest',
    'Eye wellness app',
    'Vision wellness Android',
    'Blink rate tracker',
    'Computer vision syndrome',
    'Digital eye strain relief',
    '20-20-20 rule app',
    'Offline eye tracking',
    'Privacy-first vision health',
    'Dry eye reminder',
    'Eye exercises app',
        'MediaPipe eye landmark tracker',
  ],
  applicationName: siteConfig.productName,
  category: 'health',
  authors: [{ name: siteConfig.author, url: siteConfig.authorUrl }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: 'BlinkQuest: Mindful Blink & Vision Wellness for Android',
    description:
      'Thirty-second games you play with your eyes, camera-checked breaks and an on-device blink scanner for Android.',
    siteName: siteConfig.name,
    locale: 'en_US',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlinkQuest: Mindful Blink & Vision Wellness for Android',
    description:
      'Thirty-second games you play with your eyes, camera-checked breaks and an on-device blink scanner for Android.',
    creator: '@devamitch',
    images: [ogImage.url],
  },
  icons: {
    icon: [
      { url: '/assets/brand/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/brand/app-icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/assets/brand/app-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FAF9F5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const author = {
  '@type': 'Person',
  '@id': `${siteConfig.url}/#author`,
  name: siteConfig.author,
  url: siteConfig.authorUrl,
  sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl, siteConfig.xUrl],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MobileApplication', 'SoftwareApplication'],
      '@id': `${siteConfig.url}/#app`,
      name: siteConfig.productName,
      alternateName: siteConfig.name,
      operatingSystem: 'Android 7.0+',
      applicationCategory: 'HealthApplication',
      description: siteConfig.description,
      url: siteConfig.url,
      ...(siteConfig.playStoreLive ? { downloadUrl: siteConfig.playStoreUrl } : {}),
      installUrl: `${siteConfig.url}/download`,
      softwareVersion: '1.0.0',
      image: `${siteConfig.url}${ogImage.url}`,
      screenshot: [
        `${siteConfig.url}/assets/app/home.webp`,
        `${siteConfig.url}/assets/app/activities.webp`,
        `${siteConfig.url}/assets/app/orbit-follow.webp`,
        `${siteConfig.url}/assets/app/near-far.webp`,
        `${siteConfig.url}/assets/app/focus-point.webp`,
      ],
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      author: { '@id': `${siteConfig.url}/#author` },
    },
    author,
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: 'en',
      publisher: { '@id': `${siteConfig.url}/#author` },
    },
    {
      '@type': 'MedicalWebPage',
      '@id': `${siteConfig.url}/#wellness-notice`,
      name: 'BlinkQuest Wellness & Non-Clinical Notice',
      description:
        'BlinkQuest provides digital eye fatigue awareness, ergonomics guidance, and blink rate monitoring. It is not a medical device and does not diagnose, treat, or prevent any eye disease or ocular disorder.',
      audience: 'Computer screen users seeking ergonomic eye comfort',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          id="blinkquest-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-[#DA7756] selection:text-white bg-[#FAF9F5] text-[#262624]">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
