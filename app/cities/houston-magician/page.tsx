import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import HoustonStructuredData from '../../components/HoustonStructuredData';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';

export const metadata: Metadata = {
  title: 'Book a Magician Near Houston – Corporate Events',
  description: 'Hire a top-rated magician in Houston for unforgettable corporate events, parties, and trade shows.'
};

export default function HoustonMagicianPage() {
  return (
    <>
      <HoustonStructuredData />
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Houston" heroImage="/images/hero.webp" />
        <QuoteForm />
        <CityFooter />
      </main>
    </>
  );
} 