import { SITE_URL } from '@/lib/site';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '../../components/HeroSection';
import PerformancesSection from '../../components/PerformancesSection';
import ClientQuoteForm from '../../components/ClientQuoteForm';
import BookingExperienceSection from '../../components/BookingExperienceSection';
import ExperienceCreatorSection from '../../components/ExperienceCreatorSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import FAQSection from '../../components/FAQSection';
import BottomContactSection from '../../components/BottomContactSection';
import CityFooter from '../../components/CityFooter';
import CityHero from '../../components/CityHero';
import MiamiPerformancesSection from '../../components/MiamiPerformancesSection';
import MiamiTestimonialsSection from '../../components/MiamiTestimonialsSection';
import MiamiFAQSection from '../../components/MiamiFAQSection';

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  title: 'Miami Magician Near Me | Corporate Events & Private Parties | James Kenyon Magic',
  description: "Looking for a Miami magician near me? James Kenyon Magic is your top choice for corporate events, private parties, and trade shows in Miami. Professional magician available for hire.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${siteUrl}/cities/miami-magician`,
  },
};

export default function MiamiMagicianPage() {
  return (
    <main className="min-h-screen text-white">
      <CityHero cityName="Miami" heroImage="/images/hero.webp" />
      <ClientQuoteForm city="Miami" />
      
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
      
      {/* Miami-Specific Intro Section */}
      <section className="w-full bg-black py-8 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-gray-300 mb-6">
            James has performed for corporate groups at the Miami Beach Convention Center, 
            events at South Beach venues, and private functions throughout Miami. 
            From luxury brand launches to international trade shows, 
            James brings world-class entertainment to every Miami event.
          </p>
        </div>
      </section>
      
      <MiamiPerformancesSection />
      <BookingExperienceSection />
      <ExperienceCreatorSection />
      <MiamiTestimonialsSection />
      <MiamiFAQSection />
        <BottomContactSection />
        
        {/* Nearby Cities Section */}
      <section className="w-full bg-gray-900 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 text-lg">
            Also performing in <Link href="/cities/orlando-magician" className="text-blue-400 hover:text-blue-300">Orlando corporate magician</Link> and <Link href="/cities/tampa-magician" className="text-blue-400 hover:text-blue-300">Tampa trade show entertainer</Link> events.
          </p>
        </div>
      </section>
      
      <CityFooter city="Miami" />
    </main>
  );
} 