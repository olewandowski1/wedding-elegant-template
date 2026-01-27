import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { Story } from '@/components/story';
import { Details } from '@/components/details';
import { InfoSection } from '@/components/info-section';
import { RSVP } from '@/components/rsvp';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-grow">
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
