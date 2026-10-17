import { siteConfig } from './site'

export const ogImage = {
  url: '/assets/design/blinkquest-hero-banner.jpg',
  width: 1200,
  height: 675,
  alt: 'BlinkQuest: Mindful Blink & Vision Wellness for Android',
}

export function constructMetadata({
  title,
  description,
  path = '',
  image = ogImage.url,
}: {
  title?: string
  description?: string
  path?: string
  image?: string
} = {}) {
  const fullTitle = title ? `${title} · ${siteConfig.name}` : `${siteConfig.name}: Mindful Blink & Vision Wellness`
  const metaDescription = description || siteConfig.description
  const url = `${siteConfig.url}${path}`

  return {
    title: fullTitle,
    description: metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      title: fullTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: image.startsWith('http') ? image : `${siteConfig.url}${image}`,
          width: 1200,
          height: 675,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: metaDescription,
      creator: '@devamitch',
      images: [image.startsWith('http') ? image : `${siteConfig.url}${image}`],
    },
  }
}
