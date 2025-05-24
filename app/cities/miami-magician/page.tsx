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

// Dynamically import components that are not needed for initial render
const QuoteForm = dynamic(() => import('../../components/QuoteForm'), {
  loading: () => <div className="min-h-[400px] bg-black" />
});

const MiamiStructuredData = dynamic(() => import('../../components/MiamiStructuredData'));

export const metadata: Metadata = {
  title: 'Book a Magician Near Miami – Corporate Events',
  description: 'Hire a top-rated magician in Miami for unforgettable corporate events, parties, and trade shows.'
};

export default function MiamiMagicianPage() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/images/hero.webp" type="image/webp" />
      </Head>
      <MiamiStructuredData />
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Miami" heroImage="/images/hero.webp" />
        <QuoteForm />
        <PerformancesSection />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <TestimonialsSection />
        <FAQSection />
        <BottomContactSection />
        <CityFooter />
      </main>
    </>
  );
} 