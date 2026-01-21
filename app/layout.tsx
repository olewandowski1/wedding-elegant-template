import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from '@/config/site';
import { createMetadata } from '@/lib/metadata';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = createMetadata({
  title: siteConfig.NAME,
  description: siteConfig.DESCRIPTION,
});

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang={siteConfig.LOCALE} suppressHydrationWarning>
      <body
        className={cn(
          'bg-background font-sans antialiased',
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme={
            siteConfig.FIXED_THEME ? siteConfig.FIXED_THEME : 'system'
          }
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
