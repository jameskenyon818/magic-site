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

export const metadata: Metadata = {
  title: 'Hire a Magician in Atlanta — Corporate Events, Private Parties & More',
  description: 'Looking to hire a magician in Atlanta? James Kenyon performs at corporate events, private parties, weddings, and more. Book top entertainment now.'
};

export default function AtlantaMagicianPage() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/images/hero.webp" type="image/webp" />
      </Head>
      <AtlantaStructuredData />
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Atlanta" heroImage="/images/hero.webp" />
        <ClientQuoteForm city="Atlanta" />
        <PerformancesSection city="Atlanta" />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <TestimonialsSection />
        <FAQSection />
        <BottomContactSection />
        <CityFooter city="Atlanta" />
      </main>
    </>
  );
} 