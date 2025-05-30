import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '../../components/HeroSection';
import PerformancesSection from '../../components/PerformancesSection';
import ClientQuoteForm from '../../components/ClientQuoteForm';
import BookingExperienceSection from '../../components/BookingExperienceSection';
import ExperienceCreatorSection from '../../components/ExperienceCreatorSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import FAQSection from '../../components/FAQSection';
import BottomContactSection from '../../components/BottomContactSection';
import CityFooter from '../../components/CityFooter';

export const metadata: Metadata = {
  title: 'Hire a Magician in Miami — Corporate Events, Private Parties & More',
  description: 'Looking to hire a magician in Miami? James Kenyon performs at corporate events, private parties, weddings, and more. Book top entertainment now.'
};

export default function MiamiMagicianPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection
        title="Hire a Magician in Miami"
        subtitle="Corporate Events, Private Parties & More"
        backgroundImage="/images/JamesKenyon_Magic_0092.jpg"
        ctaText="Book Now"
        ctaLink="#contact"
      />

      <ClientQuoteForm city="Miami" />

      <PerformancesSection city="Miami" />

      {/* Close-Up Magic Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Close-Up Magic in Miami</h2>
          <p className="text-lg text-gray-300 mb-8 text-center">
            Intimate, interactive magic that creates unforgettable moments at your event
          </p>
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-300 mb-6">
              Close-up magic is perfect for creating intimate, engaging experiences at your Miami event. Whether you're hosting a corporate gathering, private party, or special occasion, James brings his unique brand of sleight-of-hand magic directly to your guests.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              In Miami, James adapts his performance to match your event's atmosphere and goals. From cocktail hours to dinner parties, his interactive magic creates natural conversation starters and helps guests connect in a fun, memorable way.
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/cities/miami-magician/close-up"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors"
            >
              Learn More About Close-Up Magic
            </Link>
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

      <BookingExperienceSection />
      <ExperienceCreatorSection />
      <TestimonialsSection />
      <FAQSection />
      <BottomContactSection />
      <CityFooter city="Miami" />
    </main>
  );
} 