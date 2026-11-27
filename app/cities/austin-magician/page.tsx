import { SITE_URL } from '@/lib/site';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';
import AustinPerformancesSection from '@/app/components/AustinPerformancesSection';
import BookingExperienceSection from '@/app/components/BookingExperienceSection';
import ExperienceCreatorSection from '@/app/components/ExperienceCreatorSection';
import AustinTestimonialsSection from '@/app/components/AustinTestimonialsSection';
import AustinFAQSection from '@/app/components/AustinFAQSection';
import BottomContactSection from '@/app/components/BottomContactSection';
import ClientQuoteForm from '../../components/ClientQuoteForm';

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  title: 'Austin Corporate Magician & Trade Show Entertainment | James Kenyon',
  description: "Book James Kenyon, an Austin corporate magician for conferences, trade shows, company parties and private events. Interactive close-up magic and stage shows in Austin and Round Rock.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${siteUrl}/cities/austin-magician`,
  },
};

export default function AustinMagicianPage() {
  return (
    <>
      <main className="min-h-screen text-white">
        <CityHero cityName="Austin" heroImage="/images/hero.webp" />
        <ClientQuoteForm city="Austin" />
        
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
        
        {/* Austin-Specific Intro Section */}
        <section className="w-full bg-black py-8 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              Planning a corporate dinner, conference, trade show or client reception in Austin? 
              James Kenyon performs close-up magic for guests in small groups, stage shows for seated audiences, 
              and engaging booth presentations for exhibitors. He also serves Round Rock, Cedar Park and nearby communities. 
              Need a <Link href="/trade-show" className="text-blue-400 hover:text-blue-300 underline">trade show magician</Link> for your Austin exhibition? 
              <Link href="/corporate-magician" className="text-blue-400 hover:text-blue-300 underline"> Learn more about our corporate magic services</Link>.
            </p>
          </div>
        </section>
        
        <AustinPerformancesSection />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <AustinTestimonialsSection />
        <AustinFAQSection />
        <BottomContactSection />
        
        {/* Nearby Cities Section */}
        <section className="w-full bg-gray-900 py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 text-lg">
              Also performing in <Link href="/cities/dallas-magician" className="text-blue-400 hover:text-blue-300">Dallas corporate magician</Link> and <Link href="/cities/houston-magician" className="text-blue-400 hover:text-blue-300">Houston trade show entertainer</Link> events. 
              <Link href="/" className="text-blue-400 hover:text-blue-300"> Return to homepage</Link> or explore our <Link href="/trade-show" className="text-blue-400 hover:text-blue-300">trade show magic services</Link>.
            </p>
          </div>
        </section>
        
        <CityFooter city="Austin" />
      </main>
    </>
  );
} 