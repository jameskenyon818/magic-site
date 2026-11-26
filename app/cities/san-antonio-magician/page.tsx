import { SITE_URL } from '@/lib/site';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import SanAntonioStructuredData from '../../components/SanAntonioStructuredData';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';
import SanAntonioPerformancesSection from '@/app/components/SanAntonioPerformancesSection';
import BookingExperienceSection from '@/app/components/BookingExperienceSection';
import ExperienceCreatorSection from '@/app/components/ExperienceCreatorSection';
import SanAntonioTestimonialsSection from '@/app/components/SanAntonioTestimonialsSection';
import SanAntonioFAQSection from '@/app/components/SanAntonioFAQSection';
import BottomContactSection from '@/app/components/BottomContactSection';
import ClientQuoteForm from '../../components/ClientQuoteForm';

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  title: 'San Antonio Magician Near Me | Corporate Events & Private Parties | James Kenyon Magic',
  description: "Looking for a San Antonio magician near me? James Kenyon Magic is your top choice for corporate events, private parties, and trade shows in San Antonio. Professional magician available for hire.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${siteUrl}/cities/san-antonio-magician`,
  },
};

export default function SanAntonioMagicianPage() {
  return (
    <>
      <SanAntonioStructuredData />
      <main className="min-h-screen text-white">
        <CityHero cityName="San Antonio" heroImage="/images/hero.webp" />
        <ClientQuoteForm city="San Antonio" />
        
        {/* San Antonio-Specific Intro Section */}
        <section className="w-full bg-black py-8 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              James has performed for corporate groups at the Henry B. González Convention Center, 
              events at military bases, and private functions throughout San Antonio. 
              From defense contractor conferences to medical center events, 
              James brings world-class entertainment to every San Antonio event.
            </p>
          </div>
        </section>
        
        <SanAntonioPerformancesSection />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <SanAntonioTestimonialsSection />
        <SanAntonioFAQSection />
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
              Also performing in <Link href="/cities/houston-magician" className="text-blue-400 hover:text-blue-300">Houston corporate magician</Link> and <Link href="/cities/austin-magician" className="text-blue-400 hover:text-blue-300">Austin trade show entertainer</Link> events.
            </p>
          </div>
        </section>
        
        <CityFooter city="San Antonio" />
      </main>
    </>
  );
} 