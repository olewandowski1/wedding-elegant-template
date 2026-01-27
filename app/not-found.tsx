import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[100vh] px-6 text-center bg-linear-to-b from-background to-secondary/20'>
      <Logo className='mb-8 opacity-50 text-4xl' />

      <h1 className='text-6xl md:text-8xl font-serif text-primary mb-4 tracking-tighter'>
        404
      </h1>

      <h2 className='text-2xl md:text-3xl font-serif mb-4 text-foreground italic'>
        Nie znaleziono strony
      </h2>

      <p className='text-muted-foreground max-w-md mb-10 leading-relaxed font-sans'>
        Przepraszamy, ale strona, której szukasz, nie istnieje lub została
        przeniesiona. Wróć na stronę główną, aby kontynuować przeglądanie
        szczegółów naszego ślubu.
      </p>

      <Button asChild size='lg' className='rounded-full px-10 font-serif'>
        <Link href='/'>Wróć do strony głównej</Link>
      </Button>
    </div>
  );
}
