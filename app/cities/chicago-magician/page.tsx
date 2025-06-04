import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';
import PerformancesSection from '@/app/components/PerformancesSection';
import BookingExperienceSection from '@/app/components/BookingExperienceSection';
import ExperienceCreatorSection from '@/app/components/ExperienceCreatorSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import FAQSection from '@/app/components/FAQSection';
import BottomContactSection from '@/app/components/BottomContactSection';
import ClientQuoteForm from '../../components/ClientQuoteForm';

export const metadata: Metadata = {
  title: 'Hire a Magician in Chicago — Corporate Events, Private Parties & More',
  description: 'Looking to hire a magician in Chicago? James Kenyon performs at corporate events, private parties, weddings, and more. Book top entertainment now.'
};

export default function ChicagoMagicianPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Chicago" heroImage="/images/hero.webp" />
        <ClientQuoteForm city="Chicago" />
        <PerformancesSection city="Chicago" />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <TestimonialsSection />
        <FAQSection />
        <BottomContactSection />
        <CityFooter city="Chicago" />
        {/* Close-Up Magic Section */}
        <section id="close-up-magic" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Close-Up Magic in Chicago</h2>
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-300 mb-6">
                Close-up magic is perfect for creating intimate, engaging experiences at your Chicago event. Whether you're hosting a corporate gathering, private party, or special occasion, James brings his unique brand of sleight-of-hand magic directly to your guests.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                In Chicago, James adapts his performance to match your event's atmosphere and goals. From cocktail hours to dinner parties, his interactive magic creates natural conversation starters and helps guests connect in a fun, memorable way.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                From elegant card tricks to mind-bending mentalism, each effect is carefully selected to amaze and entertain your Chicago audience. The performance flows naturally through your event, creating a sophisticated atmosphere that enhances the overall experience.
              </p>
            </div>
            <div className="text-center">
              <Link
                href="/cities/chicago-magician/close-up"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors"
              >
                Learn More About Close-Up Magic
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 