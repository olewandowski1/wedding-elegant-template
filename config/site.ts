export const siteConfig = {
  NAME: 'Landing Template',
  SLUG: 'landing-template',
  HANDLE: '@landing_template',
  LOCALE: 'en',
  FIXED_THEME: 'light' as 'light' | 'dark' | null,

  URL: 'https://landing-template.vercel.app/',
  REPO_URL: 'https://github.com/olewandowski1/landing-template/',

  OG_IMAGE_URL: '/og-image.png',

  DESCRIPTION:
    'A modern landing page starter built for speed, SEO, and conversions.',
  SHORT_DESCRIPTION: 'Modern landing page starter for Next.js.',

  AUTHORS: [
    {
      NAME: 'Oliver',
      URL: 'https://olewandowski1.vercel.app/',
      TWITTER: '@oleelewandowski',
    },
  ],

  CREATOR: '@oleelewandowski',

  KEYWORDS: [
    'Landing Template',
    'Next.js',
    'Landing Page',
    'Marketing Site',
    'SEO',
  ],

  NAV_ROUTES: [],
} as const;

export type SiteConfig = typeof siteConfig;
