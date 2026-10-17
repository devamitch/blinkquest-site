# BlinkQuest Official Website

The official marketing, documentation, and web portal for **BlinkQuest: Mindful Blink & Vision Wellness for Android**.

Deployed to Cloudflare Workers / Global CDN via Wrangler.

- **Live URL**: [https://blinkquest.devamit.co.in](https://blinkquest.devamit.co.in)
- **Cloudflare Worker**: [https://blinkquest-site.amit98ch.workers.dev](https://blinkquest-site.amit98ch.workers.dev)
- **App Repo**: [https://github.com/devamitch/blinkquest](https://github.com/devamitch/blinkquest)
- **Creator**: [Amit Chakraborty](https://amitchakraborty.dev) (@devamitch)

## Architecture

- **Next.js 16 (Turbopack)** with static export (`output: 'export'`)
- **Tailwind CSS v4** + organic terracotta and sage color tokens
- **Lenis** smooth scrolling
- **Ultra SEO & AEO**: Full JSON-LD structured schemas (`MobileApplication`, `SoftwareApplication`, `WebSite`, `MedicalWebPage`), OpenGraph, Twitter Cards, `sitemap.xml`, `robots.txt`
- **Cloudflare Workers Assets**: Instant global edge delivery with `wrangler.jsonc`

## Development

```bash
pnpm install
pnpm run dev
```

## Build & Deploy to Cloudflare

```bash
pnpm run build
npx wrangler deploy
```

## License

MIT © Amit Chakraborty
