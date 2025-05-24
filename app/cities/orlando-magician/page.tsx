import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import OrlandoStructuredData from '../../components/OrlandoStructuredData';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';

export const metadata: Metadata = {
  title: 'Book a Magician Near Orlando – Corporate Events',
  description: 'Hire a top-rated magician in Orlando for unforgettable corporate events, parties, and trade shows.'
};

export default function OrlandoMagicianPage() {
  return (
    <>
      <OrlandoStructuredData />
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Orlando" heroImage="/images/hero.webp" />
        <QuoteForm />
        <CityFooter />
      </main>
    </>
  );
} 