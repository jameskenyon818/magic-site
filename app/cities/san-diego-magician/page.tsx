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
  title: 'Hire a Magician in San Diego — Corporate Events, Private Parties & More',
  description: 'Looking to hire a magician in San Diego? James Kenyon performs at corporate events, private parties, weddings, and more. Book top entertainment now.'
};

export default function SanDiegoMagicianPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="San Diego" heroImage="/images/hero.webp" />
        <ClientQuoteForm city="San Diego" />
        <PerformancesSection city="San Diego" />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <TestimonialsSection />
        <FAQSection />
        <BottomContactSection />
        <CityFooter city="San Diego" />
      </main>
    </>
  );
} 