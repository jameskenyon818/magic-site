import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import AustinStructuredData from '../../components/AustinStructuredData';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';

export const metadata: Metadata = {
  title: 'Book a Magician Near Austin – Corporate Events',
  description: 'Hire a top-rated magician in Austin for unforgettable corporate events, parties, and trade shows.'
};

export default function AustinMagicianPage() {
  return (
    <>
      <AustinStructuredData />
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Austin" heroImage="/images/hero.webp" />
        <QuoteForm />
        <CityFooter />
      </main>
    </>
  );
} 