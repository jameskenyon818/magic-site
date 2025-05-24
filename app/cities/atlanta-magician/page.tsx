import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Head from 'next/head';
import LogoCarousel from '../../components/LogoCarousel';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';
import ClientQuoteForm from '@/app/components/ClientQuoteForm';

// Removed dynamic import of QuoteForm
// const QuoteForm = dynamic(() => import('../../components/QuoteForm'), { ssr: false });

const AtlantaStructuredData = dynamic(() => import('../../components/AtlantaStructuredData'));

export const metadata: Metadata = {
  title: 'Book a Magician Near Atlanta – Corporate Events',
  description: 'Hire a top-rated magician in Atlanta for unforgettable corporate events, parties, and trade shows.'
};

export default function AtlantaMagicianPage() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/images/hero.webp" type="image/webp" />
      </Head>
      <AtlantaStructuredData />
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Atlanta" heroImage="/images/hero.webp" />
        <ClientQuoteForm />
        <CityFooter />
      </main>
    </>
  );
} 