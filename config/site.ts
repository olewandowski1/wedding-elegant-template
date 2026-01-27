export const siteConfig = {
  NAME: 'Marzena & Wojciech',
  SLUG: 'marzena-wojciech-wedding',
  HANDLE: '@marzena_wojciech',
  LOCALE: 'pl',
  FIXED_THEME: 'light' as 'light' | 'dark' | null,

  URL: 'https://marzena-wojciech.vercel.app/',
  REPO_URL: 'https://github.com/olewandowski1/marzena-wojciech-wedding/',

  OG_IMAGE_URL: '/og-image.svg',

  DESCRIPTION:
    'Zapraszamy na nasz ślub! 20 czerwca 2028, Gdańsk.',
  SHORT_DESCRIPTION: 'Marzena & Wojciech - Strona Ślubna',

  AUTHORS: [
    {
      NAME: 'Marzena & Wojciech',
      URL: '#',
      TWITTER: '@marzena_wojciech',
    },
  ],

  CREATOR: '@marzena_wojciech',

  KEYWORDS: [
    'Ślub',
    'Wesele',
    'Marzena i Wojciech',
    'Gdańsk',
    'RSVP',
  ],

  NAV_ROUTES: [
    { name: 'Start', href: '#hero' },
    { name: 'Nasza Historia', href: '#story' },
    { name: 'Szczegóły', href: '#details' },
    { name: 'Informacje', href: '#info' },
    { name: 'RSVP', href: '#rsvp' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
