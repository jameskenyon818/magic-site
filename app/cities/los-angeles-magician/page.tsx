import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import LosAngelesStructuredData from '../../components/LosAngelesStructuredData';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';

export const metadata: Metadata = {
  title: 'Book a Magician Near Los Angeles – Corporate Events',
  description: 'Hire a top-rated magician in Los Angeles for unforgettable corporate events, parties, and trade shows.'
};

export default function LosAngelesMagicianPage() {
  return (
    <>
      <LosAngelesStructuredData />
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Los Angeles" heroImage="/images/hero.webp" />
        <QuoteForm />
        <CityFooter />
      </main>
    </>
  );
} 