import { SITE_URL } from '@/lib/site';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Head from 'next/head';
import LogoCarousel from '../../components/LogoCarousel';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';
import ClientQuoteForm from '@/app/components/ClientQuoteForm';
import PerformancesSection from '@/app/components/PerformancesSection';
import BookingExperienceSection from '@/app/components/BookingExperienceSection';
import ExperienceCreatorSection from '@/app/components/ExperienceCreatorSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import FAQSection from '@/app/components/FAQSection';
import BottomContactSection from '@/app/components/BottomContactSection';

// Removed dynamic import of QuoteForm
// const QuoteForm = dynamic(() => import('../../components/QuoteForm'), { ssr: false });

const AtlantaStructuredData = dynamic(() => import('../../components/AtlantaStructuredData'));

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  title: 'Atlanta Magician Near Me | Corporate Events & Private Parties | James Kenyon Magic',
  description: "Looking for an Atlanta magician near me? James Kenyon Magic is your top choice for corporate events, private parties, and trade shows in Atlanta. Professional magician available for hire throughout Metro Atlanta.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${siteUrl}/cities/atlanta-magician`,
  },
};

export default function AtlantaMagicianPage() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/images/hero.webp" type="image/webp" />
      </Head>
      <AtlantaStructuredData />
      <main className="min-h-screen text-white">
        <CityHero cityName="Atlanta" heroImage="/images/hero.webp" />
        <ClientQuoteForm city="Atlanta" />
        
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
        
        {/* Atlanta-Specific Intro Section */}
        <section className="w-full bg-black py-8 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              James has performed for corporate groups at the Georgia World Congress Center, 
              events at State Farm Arena, and private functions throughout Atlanta. 
              From Fortune 500 headquarters in Buckhead to tech startups in Midtown, 
              James brings world-class entertainment to every Atlanta event.
            </p>
          </div>
        </section>
        
        <PerformancesSection city="Atlanta" />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <TestimonialsSection />
        <FAQSection />
        <BottomContactSection />
        
        {/* Nearby Cities Section */}
        <section className="w-full bg-gray-900 py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 text-lg">
              Also performing in <Link href="/cities/miami-magician" className="text-blue-400 hover:text-blue-300">Miami corporate magician</Link> and <Link href="/cities/orlando-magician" className="text-blue-400 hover:text-blue-300">Orlando trade show entertainer</Link> events.
            </p>
          </div>
        </section>
        
        <CityFooter city="Atlanta" />
      </main>
    </>
  );
} 