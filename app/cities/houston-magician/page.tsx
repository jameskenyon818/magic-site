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
  title: 'Hire a Magician in Houston — Corporate Events, Private Parties & More',
  description: 'Looking to hire a magician in Houston? James Kenyon performs at corporate events, private parties, weddings, and more. Book top entertainment now.'
};

export default function HoustonMagicianPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Houston" heroImage="/images/hero.webp" />
        <ClientQuoteForm city="Houston" />
        <PerformancesSection city="Houston" />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <TestimonialsSection />
        <FAQSection />
        <BottomContactSection />
        <CityFooter city="Houston" />
      </main>
    </>
  );
} 