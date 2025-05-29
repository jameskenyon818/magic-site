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
  title: 'Hire a Magician in Dallas — Corporate Events, Private Parties & More',
  description: 'Looking to hire a magician in Dallas? James Kenyon performs at corporate events, private parties, weddings, and more. Book top entertainment now.'
};

export default function DallasMagicianPage() {
  return (
    <>
      <DallasStructuredData />
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Dallas" heroImage="/images/hero.webp" />
        <QuoteForm city="Dallas" />
        <PerformancesSection city="Dallas" />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <TestimonialsSection />
        <FAQSection />
        <BottomContactSection />
        <Link href="/cities/dallas-magician/close-up" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg">Learn More</Link>
        <Link href="/cities/dallas-magician/trade-show" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg">Learn More</Link>
        <CityFooter city="Dallas" />
      </main>
    </>
  );
} 