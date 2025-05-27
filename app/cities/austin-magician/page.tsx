import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
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
import ClientQuoteForm from '../../components/ClientQuoteForm';

export const metadata: Metadata = {
  title: 'Hire a Magician in Austin — Corporate Events, Private Parties & More',
  description: 'Looking to hire a magician in Austin? James Kenyon performs at corporate events, private parties, weddings, and more. Book top entertainment now.'
};

export default function AustinMagicianPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Austin" heroImage="/images/hero.webp" />
        <ClientQuoteForm city="Austin" />
        <PerformancesSection city="Austin" />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <TestimonialsSection />
        <FAQSection />
        <BottomContactSection />
        <CityFooter city="Austin" />
      </main>
    </>
  );
} 