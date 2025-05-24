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

export const metadata: Metadata = {
  title: 'Book a Magician Near New York – Corporate Events',
  description: 'Hire a top-rated magician in New York for unforgettable corporate events, parties, and trade shows.'
};

export default function NewYorkMagicianPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="New York" heroImage="/images/hero.webp" />
        <QuoteForm />
        <PerformancesSection />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <TestimonialsSection />
        <FAQSection />
        <CityFooter />
      </main>
    </>
  );
} 