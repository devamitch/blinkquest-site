import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Applebot', 'Google-Extended'],
        allow: '/',
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
