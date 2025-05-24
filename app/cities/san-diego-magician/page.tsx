import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';

export const metadata: Metadata = {
  title: 'Book a Magician Near San Diego – Corporate Events',
  description: 'Hire a top-rated magician in San Diego for unforgettable corporate events, parties, and trade shows.'
};

export default function SanDiegoMagicianPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="San Diego" heroImage="/images/hero.webp" />
        <QuoteForm />
        <CityFooter />
      </main>
    </>
  );
} 