export const siteConfig = {
  NAME: 'Marzena & Wojciech',
  SLUG: 'marzena-wojciech-wedding',
  LOCALE: 'pl',
  FIXED_THEME: 'light' as 'light' | 'dark' | null,

  URL: 'https://wedding-elegant-template.vercel.app/',

  DESCRIPTION:
    'Dołącz do Nas w ten wyjątkowy dzień! Zapraszamy na ślub i wesele Marzeny i Wojciecha w Gdańsku. Sprawdź szczegóły, historię naszej miłości oraz szczegóły wydarzenia. Czekamy na Ciebie!',
  SHORT_DESCRIPTION: 'Marzena & Wojciech - Strona Ślubna',

  NAV_ROUTES: [
    { name: 'Start', href: '#hero' },
    { name: 'Nasza Historia', href: '#story' },
    { name: 'Szczegóły', href: '#details' },
    { name: 'Informacje', href: '#info' },
    { name: 'RSVP', href: '#rsvp' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
