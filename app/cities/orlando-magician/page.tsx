import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import OrlandoStructuredData from '../../components/OrlandoStructuredData';
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

export const metadata: Metadata = {
  title: 'Hire a Magician in Orlando — Corporate Events, Private Parties & More',
  description: 'Looking to hire a magician in Orlando? James Kenyon performs at corporate events, private parties, weddings, and more. Book top entertainment now.'
};

export default function OrlandoMagicianPage() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/images/hero.webp" type="image/webp" />
      </Head>
      <OrlandoStructuredData />
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Orlando" heroImage="/images/hero.webp" />
        <ClientQuoteForm city="Orlando" />
        <PerformancesSection city="Orlando" />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <TestimonialsSection />
        <FAQSection />
        <BottomContactSection />
        <CityFooter city="Orlando" />
      </main>
    </>
  );
} 