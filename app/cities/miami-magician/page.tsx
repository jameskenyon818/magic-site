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
  title: 'Hire a Magician in Miami — Corporate Events, Private Parties & More',
  description: 'Looking to hire a magician in Miami? James Kenyon performs at corporate events, private parties, weddings, and more. Book top entertainment now.'
};

export default function MiamiMagicianPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Miami" heroImage="/images/hero.webp" />
        <ClientQuoteForm city="Miami" />
        <PerformancesSection city="Miami" />
        
        {/* Close-Up Magic Section */}
        <section id="close-up-magic" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Close-Up Magic in Miami</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                Close-up magic is perfect for creating intimate, engaging experiences at your Miami event. Whether you're hosting a corporate gathering, private party, or special occasion, James brings his unique brand of sleight-of-hand magic directly to your guests.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                In Miami, James adapts his performance to match your event's atmosphere and goals. From cocktail hours to dinner parties, his interactive magic creates natural conversation starters and helps guests connect in a fun, memorable way.
              </p>
            </div>
          </div>
        </section>

        {/* Stage Magic Section */}
        <section id="stage-magic" className="py-16 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Stage Magic in Miami</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                Stage magic is perfect for creating a shared experience that brings your entire audience together. Whether you're hosting a corporate event, wedding, or special occasion, James delivers a performance that will be remembered long after the event ends.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Perfect for large corporate events, weddings, and special occasions across Miami, James's stage show combines mind-reading, illusions, and audience participation to create an unforgettable experience.
              </p>
            </div>
          </div>
        </section>

        {/* Trade Show Magic Section */}
        <section id="trade-show-magic" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Trade Show Magic in Miami</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                Trade show magic is the perfect way to stand out at your next Miami conference or exhibition. James's interactive performances draw crowds to your booth and create memorable experiences that help you connect with potential clients.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Perfect for trade shows and conferences across Miami, James adapts his performance to highlight your products or services, making your booth the most engaging destination on the show floor.
              </p>
            </div>
          </div>
        </section>

        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <TestimonialsSection />
        <FAQSection />
        <BottomContactSection />
        <CityFooter city="Miami" />
      </main>
    </>
  );
} 