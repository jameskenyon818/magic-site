import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import NewYorkStructuredData from '../../components/NewYorkStructuredData';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';

export const metadata: Metadata = {
  title: 'Book a Magician Near New York – Corporate Events',
  description: 'Hire a top-rated magician in New York for unforgettable corporate events, parties, and trade shows.'
};

export default function NewYorkMagicianPage() {
  return (
    <>
      <NewYorkStructuredData />
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="New York" heroImage="/images/hero.webp" />
        <QuoteForm />
        <CityFooter />
      </main>
    </>
  );
} 