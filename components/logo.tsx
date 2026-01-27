import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  // Extracting first letters of names (e.g., "Marzena & Wojciech" -> M & W)
  const names = siteConfig.NAME.split('&').map((s) => s.trim());
  const initial1 = names[0]?.[0] || 'M';
  const initial2 = names[1]?.[0] || 'W';

  return (
    <div
      className={cn(
        'flex items-center justify-center font-serif text-2xl tracking-tight text-primary',
        className,
      )}
    >
      <div className='flex items-baseline'>
        <span className='text-3xl font-medium'>{initial1}</span>
        <span className='font-handwritten text-5xl text-gold -mx-2 select-none -rotate-12 translate-y-1'>
          &
        </span>
        <span className='text-3xl font-medium'>{initial2}</span>
      </div>
    </div>
  );
}
