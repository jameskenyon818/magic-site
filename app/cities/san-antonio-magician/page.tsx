import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import SanAntonioStructuredData from '../../components/SanAntonioStructuredData';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';

export const metadata: Metadata = {
  title: 'Book a Magician Near San Antonio – Corporate Events',
  description: 'Hire a top-rated magician in San Antonio for unforgettable corporate events, parties, and trade shows.'
};

export default function SanAntonioMagicianPage() {
  return (
    <>
      <SanAntonioStructuredData />
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="San Antonio" heroImage="/images/hero.webp" />
        <QuoteForm />
        <CityFooter />
      </main>
    </>
  );
} 