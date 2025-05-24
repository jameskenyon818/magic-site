import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Head from 'next/head';
import LogoCarousel from '../../components/LogoCarousel';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';
import QuoteForm from '../../components/QuoteForm';

// Dynamically import components that are not needed for initial render
const QuoteForm = dynamic(() => import('../../components/QuoteForm'), {
  loading: () => <div className="min-h-[400px] bg-black" />
});

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
        <QuoteForm />
        <CityFooter />
      </main>
    </>
  );
} 