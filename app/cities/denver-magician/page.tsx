import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Head from 'next/head';
import LogoCarousel from '../../components/LogoCarousel';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';
import PerformancesSection from '@/app/components/PerformancesSection';
import BookingExperienceSection from '@/app/components/BookingExperienceSection';
import ExperienceCreatorSection from '@/app/components/ExperienceCreatorSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import FAQSection from '@/app/components/FAQSection';
import BottomContactSection from '@/app/components/BottomContactSection';
import ClientQuoteForm from '@/app/components/ClientQuoteForm';

// Dynamically import components that are not needed for initial render
const QuoteForm = dynamic(() => import('../../components/QuoteForm'), {
  loading: () => <div className="min-h-[400px] bg-black" />
});

const DenverStructuredData = dynamic(() => import('../../components/DenverStructuredData'));

export const metadata: Metadata = {
  title: 'Hire a Magician in Denver — Corporate Events, Private Parties & More',
  description: 'Looking to hire a magician in Denver? James Kenyon performs at corporate events, private parties, weddings, and more. Book top entertainment now.'
};

export default function DenverMagicianPage() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/images/hero.webp" type="image/webp" />
      </Head>
      <DenverStructuredData />
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Denver" heroImage="/images/hero.webp" />
        <ClientQuoteForm city="Denver" />
        <PerformancesSection city="Denver" />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <TestimonialsSection />
        <FAQSection />
        <BottomContactSection />
        <CityFooter city="Denver" />
      </main>
    </>
  );
} 