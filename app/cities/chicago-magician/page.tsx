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

export const metadata: Metadata = {
  title: 'Hire a Magician in Chicago — Corporate Events, Private Parties & More',
  description: 'Looking to hire a magician in Chicago? James Kenyon performs at corporate events, private parties, weddings, and more. Book top entertainment now.'
};

export default function ChicagoMagicianPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Chicago" heroImage="/images/hero.webp" />
        <QuoteForm city="Chicago" />
        <PerformancesSection />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <TestimonialsSection />
        <FAQSection />
        <BottomContactSection />
        <CityFooter city="Chicago" />
      </main>
    </>
  );
} 