import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import ClientQuoteForm from '@/app/components/ClientQuoteForm';
import FAQSection from '@/app/components/FAQSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import BottomContactSection from '@/app/components/BottomContactSection';

export const metadata: Metadata = {
  title: 'Hire a Close-Up Magician in Miami — Perfect for Parties & Corporate Events',
  description: 'Looking for a close-up magician in Miami? James Kenyon delivers unforgettable sleight-of-hand performances for corporate events, private parties, and special occasions. Book now for an intimate magic experience.'
};

export default function MiamiCloseUpPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/images/edit5.png"
          alt="Close-up magic performance in Miami"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Close-Up Magic in Miami
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Intimate, interactive magic that creates unforgettable moments at your event
          </p>
        </div>
      </section>

      <ClientQuoteForm city="Miami" />

      {/* Two Pictures Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/edit5.png"
              alt="Close-up magic performance in Miami"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/close-up-performance.jpg"
              alt="Close-up magic performance in Miami"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Create Unforgettable Moments in Miami
          </h2>
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

      {/* Picture and Video Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/edit5.png"
              alt="Close-up magic performance in Miami"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              title="Close-up Magic Performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Bottom Contact Section */}
      <BottomContactSection />

      {/* Other Magic Types */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Explore Other Magic Types in Miami
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Stage Magic</h3>
              <p className="text-gray-300 mb-4">Perfect for larger events and audiences in Miami</p>
              <Link href="/cities/miami-magician/stage-magic" className="text-blue-400 hover:text-blue-300">Learn More →</Link>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Trade Show Magic</h3>
              <p className="text-gray-300 mb-4">Boost engagement at your Miami trade show or conference</p>
              <Link href="/cities/miami-magician/trade-show" className="text-blue-400 hover:text-blue-300">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      <CityFooter city="Miami" />
    </main>
  );
} 