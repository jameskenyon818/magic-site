import { SITE_URL } from '@/lib/site';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';
import PhoenixPerformancesSection from '@/app/components/PhoenixPerformancesSection';
import BookingExperienceSection from '@/app/components/BookingExperienceSection';
import ExperienceCreatorSection from '@/app/components/ExperienceCreatorSection';
import PhoenixTestimonialsSection from '@/app/components/PhoenixTestimonialsSection';
import PhoenixFAQSection from '@/app/components/PhoenixFAQSection';
import BottomContactSection from '@/app/components/BottomContactSection';
import ClientQuoteForm from '../../components/ClientQuoteForm';

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  title: 'Phoenix Magician Near Me | Corporate Events & Private Parties | James Kenyon Magic',
  description: "Looking for a Phoenix magician near me? James Kenyon Magic is your top choice for corporate events, private parties, and trade shows in Phoenix. Professional magician available for hire.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${siteUrl}/cities/phoenix-magician`,
  },
};

export default function PhoenixMagicianPage() {
  return (
    <>
      <main className="min-h-screen text-white">
        <CityHero cityName="Phoenix" heroImage="/images/hero.webp" />
        <ClientQuoteForm city="Phoenix" />
        
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
        
        {/* Phoenix-Specific Intro Section */}
        <section className="w-full bg-black py-8 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              James has performed for corporate groups at the Phoenix Convention Center, 
              events at Talking Stick Resort, and private functions throughout Phoenix. 
              From tech startup conferences to healthcare industry events, 
              James brings world-class entertainment to every Phoenix event.
            </p>
          </div>
        </section>
        
        <PhoenixPerformancesSection />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <PhoenixTestimonialsSection />
        <PhoenixFAQSection />
        <BottomContactSection />
        
        {/* Nearby Cities Section */}
        <section className="w-full bg-gray-900 py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 text-lg">
              Also performing in <Link href="/cities/los-angeles-magician" className="text-blue-400 hover:text-blue-300">Los Angeles corporate magician</Link> and <Link href="/cities/denver-magician" className="text-blue-400 hover:text-blue-300">Denver trade show entertainer</Link> events.
            </p>
          </div>
        </section>
        
        <CityFooter city="Phoenix" />
      </main>
    </>
  );
} 