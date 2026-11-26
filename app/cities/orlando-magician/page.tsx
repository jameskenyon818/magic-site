import { SITE_URL } from '@/lib/site';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import OrlandoStructuredData from '../../components/OrlandoStructuredData';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';
import OrlandoPerformancesSection from '@/app/components/OrlandoPerformancesSection';
import BookingExperienceSection from '@/app/components/BookingExperienceSection';
import ExperienceCreatorSection from '@/app/components/ExperienceCreatorSection';
import OrlandoTestimonialsSection from '@/app/components/OrlandoTestimonialsSection';
import OrlandoFAQSection from '@/app/components/OrlandoFAQSection';
import BottomContactSection from '@/app/components/BottomContactSection';
import ClientQuoteForm from '../../components/ClientQuoteForm';

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  title: 'Orlando Magician Near Me | Corporate Events & Private Parties | James Kenyon Magic',
  description: "Looking for an Orlando magician near me? James Kenyon Magic is your top choice for corporate events, private parties, and trade shows in Orlando. Professional magician available for hire specializing in close-up magic, stage shows, and trade show entertainment.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${siteUrl}/cities/orlando-magician`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Orlando Magician Near Me | Corporate Events & Private Parties | James Kenyon Magic',
    description: 'Looking for an Orlando magician near me? James Kenyon Magic is your top choice for corporate events, private parties, and trade shows in Orlando. Professional magician available for hire.',
    url: `${siteUrl}/cities/orlando-magician`,
    siteName: 'James Kenyon Magic',
    images: [
      {
        url: `${siteUrl}/images/hero.webp`,
        width: 1200,
        height: 630,
        alt: 'Orlando Magician James Kenyon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orlando Magician Near Me | Corporate Events & Private Parties | James Kenyon Magic',
    description: 'Looking for an Orlando magician near me? James Kenyon Magic is your top choice for corporate events, private parties, and trade shows in Orlando. Professional magician available for hire.',
    images: [`${siteUrl}/images/hero.webp`],
  },
};

export default function OrlandoMagicianPage() {
  return (
    <>
      <OrlandoStructuredData />
      <main className="min-h-screen text-white">
        <CityHero cityName="Orlando" heroImage="/images/hero.webp" />
        <ClientQuoteForm city="Orlando" />
        
        {/* Orlando-Specific Intro Section */}
        <section className="w-full bg-black py-8 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              James has performed for corporate groups at the Orange County Convention Center, 
              events at Disney resorts, and private functions throughout Orlando. 
              From theme park corporate retreats to international conventions, 
              James brings world-class entertainment to every Orlando event.
            </p>
          </div>
        </section>
        
        <OrlandoPerformancesSection />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <OrlandoTestimonialsSection />
        <OrlandoFAQSection />
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
              Also performing in <Link href="/cities/miami-magician" className="text-blue-400 hover:text-blue-300">Miami corporate magician</Link> and <Link href="/cities/tampa-magician" className="text-blue-400 hover:text-blue-300">Tampa trade show entertainer</Link> events.
            </p>
          </div>
        </section>
        
        <CityFooter city="Orlando" />
      </main>
    </>
  );
} 