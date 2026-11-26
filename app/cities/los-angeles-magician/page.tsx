import { SITE_URL } from '@/lib/site';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';
import LosAngelesPerformancesSection from '@/app/components/LosAngelesPerformancesSection';
import BookingExperienceSection from '@/app/components/BookingExperienceSection';
import ExperienceCreatorSection from '@/app/components/ExperienceCreatorSection';
import LosAngelesTestimonialsSection from '@/app/components/LosAngelesTestimonialsSection';
import LosAngelesFAQSection from '@/app/components/LosAngelesFAQSection';
import BottomContactSection from '@/app/components/BottomContactSection';
import ClientQuoteForm from '../../components/ClientQuoteForm';

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  title: 'Los Angeles Magician Near Me | Corporate Events & Private Parties | James Kenyon Magic',
  description: "Looking for a Los Angeles magician near me? James Kenyon Magic is your top choice for corporate events, private parties, and trade shows in Los Angeles. Professional magician available for hire.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${siteUrl}/cities/los-angeles-magician`,
  },
};

export default function LosAngelesMagicianPage() {
  return (
    <>
      <main className="min-h-screen text-white">
        <CityHero cityName="Los Angeles" heroImage="/images/hero.webp" />
        <ClientQuoteForm city="Los Angeles" />
        
        {/* Los Angeles-Specific Intro Section */}
        <section className="w-full bg-black py-8 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              James has performed for corporate groups at the Los Angeles Convention Center, 
              events at Hollywood venues, and private functions throughout Los Angeles. 
              From entertainment industry gatherings to tech conferences in Silicon Beach, 
              James brings world-class entertainment to every Los Angeles event.
            </p>
          </div>
        </section>
        
        <LosAngelesPerformancesSection />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <LosAngelesTestimonialsSection />
        <LosAngelesFAQSection />
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
              Also performing in <Link href="/cities/san-diego-magician" className="text-blue-400 hover:text-blue-300">San Diego corporate magician</Link> and <Link href="/cities/phoenix-magician" className="text-blue-400 hover:text-blue-300">Phoenix trade show entertainer</Link> events.
            </p>
          </div>
        </section>
        
        <CityFooter city="Los Angeles" />
      </main>
    </>
  );
} 