import { SITE_URL } from '@/lib/site';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import DallasStructuredData from '../../components/DallasStructuredData';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';
import DallasPerformancesSection from '@/app/components/DallasPerformancesSection';
import BookingExperienceSection from '@/app/components/BookingExperienceSection';
import ExperienceCreatorSection from '@/app/components/ExperienceCreatorSection';
import DallasTestimonialsSection from '@/app/components/DallasTestimonialsSection';
import DallasFAQSection from '@/app/components/DallasFAQSection';
import BottomContactSection from '@/app/components/BottomContactSection';

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  title: 'Dallas Magician Near Me | Corporate Events & Private Parties | James Kenyon Magic',
  description: "Looking for a Dallas magician near me? James Kenyon Magic is your top choice for corporate events, private parties, and trade shows in Dallas. Professional magician available for hire.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${siteUrl}/cities/dallas-magician`,
  },
};

export default function DallasMagicianPage() {
  return (
    <>
      <DallasStructuredData />
      <main className="min-h-screen text-white">
        <CityHero cityName="Dallas" heroImage="/images/hero.webp" />
        <QuoteForm city="Dallas" />
        
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
        
        {/* Dallas-Specific Intro */}
        <section className="w-full bg-black py-8 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              James has performed for corporate groups at the Kay Bailey Hutchison Convention Center, 
              events at the Dallas Arts District, and private functions throughout Uptown Dallas. 
              From Fortune 500 companies in the Dallas-Fort Worth metroplex to intimate gatherings 
              in Deep Ellum, James brings world-class entertainment to every Dallas event.
            </p>
          </div>
        </section>

        <DallasPerformancesSection />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <DallasTestimonialsSection />
        <DallasFAQSection />
        <BottomContactSection />
        
        {/* Nearby Cities Section */}
        <section className="w-full bg-gray-900 py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 text-lg">
              Also performing in <Link href="/cities/houston-magician" className="text-blue-400 hover:text-blue-300">Houston trade show magician</Link> and <Link href="/cities/austin-magician" className="text-blue-400 hover:text-blue-300">Austin corporate entertainer</Link> events.
            </p>
          </div>
        </section>
        
        <CityFooter city="Dallas" />
      </main>
    </>
  );
} 