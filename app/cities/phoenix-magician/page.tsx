import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import PhoenixStructuredData from '../../components/PhoenixStructuredData';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';

export const metadata: Metadata = {
  title: 'Book a Magician Near Phoenix – Corporate Events',
  description: 'Hire a top-rated magician in Phoenix for unforgettable corporate events, parties, and trade shows.'
};

export default function PhoenixMagicianPage() {
  return (
    <>
      <PhoenixStructuredData />
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Phoenix" heroImage="/images/hero.webp" />
        <QuoteForm />
        <CityFooter />
      </main>
    </>
  );
} 