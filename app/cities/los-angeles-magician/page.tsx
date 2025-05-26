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
  title: 'Hire a Magician in Los Angeles — Corporate Events, Private Parties & More',
  description: 'Looking to hire a magician in Los Angeles? James Kenyon performs at corporate events, private parties, weddings, and more. Book top entertainment now.'
};

export default function LosAngelesMagicianPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Los Angeles" heroImage="/images/hero.webp" />
        <QuoteForm city="Los Angeles" />
        <PerformancesSection />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <TestimonialsSection />
        <FAQSection />
        <BottomContactSection />
        <CityFooter city="Los Angeles" />
      </main>
    </>
  );
} 