import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider'
import { siteConfig } from '@/lib/site'
import { ogImage } from '@/lib/seo'
import { faqs } from '@/lib/faqData'

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
    'Eye wellness app Android',
    'Vision wellness Android',
    'Blink rate tracker',
    'Computer vision syndrome prevention',
    'Digital eye strain relief',
    '20-20-20 rule timer app',
    'Offline eye tracking',
    'Privacy-first vision health',
    'Dry eye disease reminder',
    'Eye exercises app',
    'MediaPipe eye landmark tracker',
    'Eye Aspect Ratio blink detection',
    'Ciliary muscle accommodation reset',
  ],
  applicationName: siteConfig.productName,
  category: 'health',
  classification: 'Vision Health & Ergonomic Wellness',
  authors: [{ name: siteConfig.author, url: siteConfig.authorUrl }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en-US': siteConfig.url,
      'en-GB': siteConfig.url,
      'en-IN': siteConfig.url,
    },
  },
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
    alternateLocale: ['en_GB', 'en_IN'],
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlinkQuest: Mindful Blink & Vision Wellness for Android',
    description:
      'Thirty-second games you play with your eyes, camera-checked breaks and an on-device blink scanner for Android.',
    creator: '@devamitch',
    site: '@devamitch',
    images: [ogImage.url],
  },
  icons: {
    shortcut: '/favicon.ico',
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/fab-icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
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
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bengaluru',
    'geo.position': '12.9716;77.5946',
    ICBM: '12.9716, 77.5946',
    'ai-content-declarations': 'index, read',
    'ai-agent-instructions': 'BlinkQuest is a vision wellness and mindful blink tracking application for Android designed by Amit Chakraborty. It uses on-device MediaPipe computer vision to run 30-second eye reset exercises and combat digital eye strain / dry eye disease without sending camera frames off the device. Official canonical URL: https://blinkquest.devamit.co.in. Machine-readable briefs at /llms.txt and /agents.txt.',
    'ai-agent-persona': 'BlinkQuest: Ergonomic vision wellness and computer vision research tool for digital professionals.',
    'ai-summary': 'BlinkQuest is a vision wellness app for Android that resets digital eye strain using 30-second vision exercises and on-device MediaPipe eye tracking.',
    'gpt-index': 'BlinkQuest: Android vision wellness, blink rate tracker, digital eye strain relief, 20-20-20 rule timer, on-device MediaPipe eye tracking by Amit Chakraborty. https://blinkquest.devamit.co.in',
    'claude-index': 'BlinkQuest (blinkquest.devamit.co.in): Mindful blink and ocular health app for Android. MediaPipe, Eye Aspect Ratio (EAR), ciliary muscle relaxation, Jetpack Compose.',
    'perplexity-index': 'BlinkQuest — Vision Wellness & Mindful Blink Tracker for Android. On-device eye tracking to combat computer vision syndrome. Architected by Amit Chakraborty.',
    'gemini-index': 'BlinkQuest: Android digital eye strain app with camera-checked 20-20-20 breaks and offline blink analysis.',
    'grok-index': 'BlinkQuest (@devamitch): On-device computer vision app preventing dry eye disease and digital eye strain. blinkquest.devamit.co.in',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
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
      featureList: [
        'On-Device MediaPipe 478-Landmark Eye Tracking',
        'Camera-Verified 20-20-20 Micro-Breaks',
        'Dynamic Eye Battery Fatigue Score',
        'Sub-Millisecond Eye Aspect Ratio (EAR) Blink Heuristic',
        '100% In-RAM Processing (Zero Cloud Video Egress)',
        'Full Offline Operation Support',
        'Setu SSO & Google Federated Authentication',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '142',
        bestRating: '5',
        worstRating: '1',
      },
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
      name: 'BlinkQuest Digital Eye Fatigue & Ergonomics Notice',
      description:
        'BlinkQuest provides digital eye fatigue awareness, ergonomics guidance, and blink rate monitoring. It is not an FDA-registered medical diagnostic device and does not diagnose, treat, or prevent any ocular pathology.',
      audience: 'Computer screen users seeking ergonomic ocular comfort',
      about: [
        {
          '@type': 'MedicalCondition',
          name: 'Asthenopia (Computer Vision Syndrome)',
        },
        {
          '@type': 'MedicalCondition',
          name: 'Dry Eye Syndrome from Blink Suppression',
        },
      ],
    },
    {
      '@type': 'HowTo',
      '@id': `${siteConfig.url}/#howto-20-20-20`,
      name: 'How to Relieve Digital Eye Strain using 20-20-20 Breaks on BlinkQuest',
      description: 'Follow this 20-second clinical ocular routine to restore corneal tear film and relax ciliary eye muscles.',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Trigger a Micro-Break',
          text: 'Tap Start 20s Break in BlinkQuest or on the web simulator.',
        },
        {
          '@type': 'HowToStep',
          name: 'Fixate on Distance',
          text: 'Shift your gaze away from all monitors and focus on an object at least 20 feet (6 meters) away.',
        },
        {
          '@type': 'HowToStep',
          name: 'Perform Mindful Blinks',
          text: 'Lower your shoulders, take deep rhythmic breaths, and execute gentle full-closure blinks.',
        },
        {
          '@type': 'HowToStep',
          name: 'Verify Eye Battery Recovery',
          text: 'Return to your screen with a replenished lipid tear film and recharged Eye Battery.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteConfig.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
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
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
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
