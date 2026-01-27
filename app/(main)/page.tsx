import { Details } from '@/components/details';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { InfoSection } from '@/components/info-section';
import { Navigation } from '@/components/navigation';
import { RSVP } from '@/components/rsvp';
import { Story } from '@/components/story';

export default function Page() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navigation />
      <main className='grow'>
        <Hero />
        <Story />
        <Details />
        <InfoSection />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}
