import { SITE_URL } from '@/lib/site';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import { Metadata } from 'next';
import Head from 'next/head';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';
import PerformancesSection from '@/app/components/PerformancesSection';
import BookingExperienceSection from '@/app/components/BookingExperienceSection';
import ExperienceCreatorSection from '@/app/components/ExperienceCreatorSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import FAQSection from '@/app/components/FAQSection';
import BottomContactSection from '@/app/components/BottomContactSection';
import ClientQuoteForm from '../../components/ClientQuoteForm';
import NewYorkPerformancesSection from '@/app/components/NewYorkPerformancesSection';
import NewYorkTestimonialsSection from '@/app/components/NewYorkTestimonialsSection';
import NewYorkFAQSection from '@/app/components/NewYorkFAQSection';

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  title: 'New York Magician Near Me | Corporate Events & Private Parties | James Kenyon Magic',
  description: "Looking for a New York magician near me? James Kenyon Magic is your top choice for corporate events, private parties, and trade shows in New York. Professional magician available for hire.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${siteUrl}/cities/new-york-magician`,
  },
};

export default function NewYorkMagicianPage() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/images/hero.webp" type="image/webp" />
      </Head>
      <main className="min-h-screen text-white">
        <CityHero cityName="New York" heroImage="/images/hero.webp" />
        <ClientQuoteForm city="New York" />
        
        {/* New York-Specific Intro Section */}
        <section className="w-full bg-black py-8 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              James has performed for corporate groups at the Javits Center, 
              events at Madison Square Garden, and private functions throughout New York. 
              From Wall Street financial firms to Broadway premieres, 
              James brings world-class entertainment to every NYC event.
            </p>
          </div>
        </section>
        
        <NewYorkPerformancesSection />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <NewYorkTestimonialsSection />
        <NewYorkFAQSection />
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
              Also performing in <Link href="/cities/chicago-magician" className="text-blue-400 hover:text-blue-300">Chicago corporate magician</Link> and <Link href="/trade-show" className="text-blue-400 hover:text-blue-300">Boston trade show entertainer</Link> events.
            </p>
          </div>
        </section>
        
        <CityFooter city="New York" />
      </main>
    </>
  );
} 