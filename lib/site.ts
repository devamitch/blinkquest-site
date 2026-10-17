export const siteConfig = {
  name: 'BlinkQuest',
  productName: 'BlinkQuest: Mindful Blink & Vision Wellness',
  tagline: 'Eye breaks you will actually take.',
  secondaryTagline: 'Games you play with your eyes, short camera-checked breaks and a blink scanner that runs entirely on your phone.',
  description: 'BlinkQuest is an eye-wellness app for Android. Short games and breaks keep your eyes blinking, moving and rested, and an on-device scanner counts your blinks. Camera frames never leave your phone.',
  url: 'https://blinkquest.devamit.co.in',
  appPackage: 'com.amit.blinkquest',
  appScheme: 'blinkquest://',
  appIntentUrl: 'intent://#Intent;package=com.amit.blinkquest;scheme=blinkquest;end',
  // Not live yet — BlinkQuest is in closed testing. Flip this once the Play
  // Store listing is actually public; until then nothing on the site should
  // link here (it currently 404s for anyone who isn't an approved tester).
  playStoreLive: false,
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.amit.blinkquest',
  playStoreMarketUrl: 'market://details?id=com.amit.blinkquest',
  playStoreBetaUrl: 'https://play.google.com/apps/testing/com.amit.blinkquest',
  minAndroidVersion: '7.0 (API 24)',
  contactEmail: 'amit@devamit.co.in',
  author: 'Amit Chakraborty',
  authorHandle: 'devamitch',
  authorRole: 'Lead Mobile App Dev · React Native DApp Engineer',
  authorUrl: 'https://amitchakraborty.dev',
  subdomainUrl: 'https://devamit.co.in',
  githubUrl: 'https://github.com/devamitch',
  githubRepoUrl: 'https://github.com/devamitch/blinkquest',
  linkedinUrl: 'https://linkedin.com/in/devamitch',
  xUrl: 'https://x.com/devamitch',
  authorSignature: '/assets/brand/devamitch-signature.png',
}

export const navItems = [
  { href: '/features', label: 'Features' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/science', label: 'Science' },
  { href: '/faq', label: 'FAQ' },
]

/** Where every "get the app" button goes: the Play listing once live, a beta request until then. */
export const getAppHref = siteConfig.playStoreLive
  ? siteConfig.playStoreUrl
  : `mailto:${siteConfig.contactEmail}?subject=BlinkQuest%20beta%20access`
export const getAppLabel = siteConfig.playStoreLive ? 'Get it on Google Play' : 'Request beta access'

export const routes = [
  '/',
  '/about',
  '/features',
  '/how-it-works',
  '/science',
  '/download',
  '/roadmap',
  '/faq',
  '/contact',
  '/privacy',
  '/terms',
]
