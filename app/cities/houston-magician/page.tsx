import { SITE_URL } from '@/lib/site';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';
import HoustonPerformancesSection from '@/app/components/HoustonPerformancesSection';
import BookingExperienceSection from '@/app/components/BookingExperienceSection';
import ExperienceCreatorSection from '@/app/components/ExperienceCreatorSection';
import HoustonTestimonialsSection from '@/app/components/HoustonTestimonialsSection';
import HoustonFAQSection from '@/app/components/HoustonFAQSection';
import BottomContactSection from '@/app/components/BottomContactSection';
import ClientQuoteForm from '../../components/ClientQuoteForm';

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  title: 'Houston Magician Near Me | Corporate Events & Private Parties | James Kenyon Magic',
  description: "Looking for a Houston magician near me? James Kenyon Magic is your top choice for corporate events, private parties, and trade shows in Houston. Professional magician available for hire.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${siteUrl}/cities/houston-magician`,
  },
};

export default function HoustonMagicianPage() {
  return (
    <>
      <main className="min-h-screen text-white">
        <CityHero cityName="Houston" heroImage="/images/hero.webp" />
        <ClientQuoteForm city="Houston" />
        
        {/* Houston-Specific Intro Section */}
        <section className="w-full bg-black py-8 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              James has performed for corporate groups at the George R. Brown Convention Center, 
              events at NRG Stadium, and private functions throughout Houston. 
              From energy industry conferences to medical center events, 
              James brings world-class entertainment to every Houston event.
            </p>
          </div>
        </section>
        
        <HoustonPerformancesSection />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <HoustonTestimonialsSection />
        <HoustonFAQSection />
        <BottomContactSection />
        
        {/* Video Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <video
              src="/videos/websitie - Made with Clipchamp.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              preload="auto"
              className="w-full h-full rounded-lg shadow-lg"
              style={{ 
                objectFit: 'cover',
                minHeight: '300px'
              }}
            >
              <source src="/videos/websitie - Made with Clipchamp.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
        
        {/* Nearby Cities Section */}
        <section className="w-full bg-gray-900 py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 text-lg">
              Also performing in <Link href="/cities/dallas-magician" className="text-blue-400 hover:text-blue-300">Dallas corporate magician</Link> and <Link href="/cities/austin-magician" className="text-blue-400 hover:text-blue-300">Austin trade show entertainer</Link> events.
            </p>
          </div>
        </section>
        
        <CityFooter city="Houston" />
      </main>
    </>
  );
} 