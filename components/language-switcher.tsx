'use client';

import { useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export function LanguageSwitcher({ scrolled }: { scrolled?: boolean }) {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations('LanguageSwitcher');

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale || isPending) return;

    startTransition(() => {
      // Set cookie and refresh the page to update the locale server-side
      document.cookie = `locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
      router.refresh();
    });
  };

  const languages = [
    { code: 'pl', label: 'POLSKI' },
    { code: 'en', label: 'ENGLISH' },
  ];

  return (
    <div
      className={cn(
        'flex items-center text-[10px] font-medium tracking-[0.5em] transition-colors duration-500',
        scrolled ? 'text-foreground' : 'text-white',
      )}
      role='navigation'
      aria-label={t('label')}
    >
      <div className='flex items-center gap-6'>
        {languages.map((lang, index) => (
          <div key={lang.code} className='flex items-center gap-6'>
            <button
              onClick={() => handleLocaleChange(lang.code)}
              disabled={isPending}
              className={cn(
                'group relative py-1 transition-all duration-700 focus:outline-none',
                locale === lang.code
                  ? 'opacity-100'
                  : 'opacity-30 hover:opacity-60',
              )}
              title={t(lang.code as any)}
            >
              <span className='relative z-10'>{lang.label}</span>
              {locale === lang.code && (
                <motion.div
                  layoutId='lang-active-underline'
                  className={cn(
                    'absolute bottom-0 left-0 h-px w-full origin-left',
                    scrolled ? 'bg-foreground' : 'bg-white',
                  )}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                />
              )}
            </button>
            {index < languages.length - 1 && (
              <span
                className={cn(
                  'h-3 w-[1px] opacity-10',
                  scrolled ? 'bg-foreground' : 'bg-white',
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
