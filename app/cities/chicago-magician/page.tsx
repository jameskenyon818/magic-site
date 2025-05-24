import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import ChicagoStructuredData from '../../components/ChicagoStructuredData';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';

export const metadata: Metadata = {
  title: 'Book a Magician Near Chicago – Corporate Events',
  description: 'Hire a top-rated magician in Chicago for unforgettable corporate events, parties, and trade shows.'
};

export default function ChicagoMagicianPage() {
  return (
    <>
      <ChicagoStructuredData />
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Chicago" heroImage="/images/hero.webp" />
        <QuoteForm />
        <CityFooter />
      </main>
    </>
  );
} 