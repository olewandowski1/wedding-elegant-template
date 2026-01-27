import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const t = await getTranslations('NotFound');

  return (
    <div className='flex flex-col items-center justify-center min-h-[100vh] px-6 text-center bg-linear-to-b from-background to-secondary/20'>
      <Logo className='mb-8 opacity-50 text-4xl' />

      <h1 className='text-6xl md:text-8xl font-serif text-primary mb-4 tracking-tighter'>
        404
      </h1>

      <h2 className='text-2xl md:text-3xl font-serif mb-4 text-foreground italic'>
        {t('title')}
      </h2>

      <p className='text-muted-foreground max-w-md mb-10 leading-relaxed font-sans'>
        {t('description')}
      </p>

      <Button asChild size='lg' className='rounded-full px-10 font-serif'>
        <Link href='/'>{t('backHome')}</Link>
      </Button>
    </div>
  );
}
