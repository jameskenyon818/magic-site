import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import DallasStructuredData from '../../components/DallasStructuredData';
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
  title: 'Book a Magician Near Dallas – Corporate Events',
  description: 'Hire a top-rated magician in Dallas for unforgettable corporate events, parties, and trade shows.'
};

export default function DallasMagicianPage() {
  return (
    <>
      <DallasStructuredData />
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Dallas" heroImage="/images/hero.webp" />
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