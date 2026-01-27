'use client';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { motion, useScroll } from 'motion/react';
import Link from 'next/link';
import * as React from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('hero');
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  React.useEffect(() => {
    return scrollY.on('change', (latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setActiveSection(id);
      window.history.replaceState(null, '', href);
    }
  };

  React.useEffect(() => {
    // Set initial active section from hash if present
    const hash = window.location.hash.replace('#', '');
    if (
      hash &&
      siteConfig.NAV_ROUTES.some((route) => route.href === `#${hash}`)
    ) {
      setActiveSection(hash);
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            // Update URL hash without jumping
            const newHash = `#${id}`;
            if (window.location.hash !== newHash) {
              window.history.replaceState(null, '', newHash);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '-45% 0px -45% 0px' },
    );

    siteConfig.NAV_ROUTES.forEach((route) => {
      const id = route.href.replace('#', '');
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-700',
        scrolled
          ? 'bg-background/90 backdrop-blur-md py-4 sm:py-6 shadow-sm'
          : 'bg-transparent py-6 sm:py-10 md:py-16.5',
      )}
    >
      <div className='container mx-auto flex items-center justify-between sm:justify-center px-6 md:px-12'>
        {/* Mobile-only spacing fix */}
        <div className='flex-1 md:hidden' />

        {/* Desktop Nav - Centered & Refined */}
        <div className='hidden items-center space-x-12 lg:space-x-16 lg:flex'>
          {siteConfig.NAV_ROUTES.map((route) => {
            const isActive = activeSection === route.href.replace('#', '');
            return (
              <Link
                key={route.href}
                href={route.href}
                onClick={(e) => scrollToSection(e, route.href)}
                className={cn(
                  'relative text-[10px] font-medium uppercase tracking-[0.5em] transition-all duration-500',
                  scrolled
                    ? isActive
                      ? 'text-foreground'
                      : 'text-foreground/60 hover:text-foreground'
                    : isActive
                      ? 'text-white'
                      : 'text-white/70 hover:text-white',
                )}
              >
                {route.name}
                {isActive && (
                  <motion.span
                    layoutId='activeNav'
                    className={cn(
                      'absolute -bottom-2 left-0 h-[1px] w-full',
                      scrolled ? 'bg-foreground' : 'bg-white',
                    )}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button - Positioned right with flex-1 for balance */}
        <div className='flex flex-1 justify-end lg:hidden'>
          <button
            className='p-2'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
          >
            <div className='flex flex-col space-y-1.5'>
              <span
                className={cn(
                  'h-[1px] w-6 transition-all',
                  scrolled || isOpen ? 'bg-foreground' : 'bg-white',
                  isOpen && 'translate-y-2 rotate-45',
                )}
              />
              <span
                className={cn(
                  'h-[1px] w-6 transition-all',
                  scrolled || isOpen ? 'bg-foreground' : 'bg-white',
                  isOpen && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'h-[1px] w-6 transition-all',
                  scrolled || isOpen ? 'bg-foreground' : 'bg-white',
                  isOpen && '-translate-y-2 -rotate-45',
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={
          isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }
        }
        className='overflow-hidden bg-background md:hidden'
      >
        <div className='flex flex-col space-y-6 px-6 py-12'>
          {siteConfig.NAV_ROUTES.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={(e) => scrollToSection(e, route.href)}
              className='font-serif text-2xl tracking-widest text-foreground hover:opacity-50 transition-all'
            >
              {route.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
