import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import ClientQuoteForm from '@/app/components/ClientQuoteForm';
import FAQSection from '@/app/components/FAQSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import BottomContactSection from '@/app/components/BottomContactSection';

export const metadata: Metadata = {
  title: 'Hire a Trade Show Magician in Miami — Perfect for Exhibitions & Conferences',
  description: 'Looking for a trade show magician in Miami? James Kenyon delivers engaging performances that attract crowds and boost engagement at your exhibition or conference. Book now for a memorable trade show experience.'
};

export default function MiamiTradeShowPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/images/IMG_5401.JPG"
          alt="Trade show magic performance in Miami"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Trade Show Magic in Miami
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Attract crowds and boost engagement at your Miami trade show
          </p>
        </div>
      </section>

      <ClientQuoteForm city="Miami" />

      {/* Two Pictures Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/IMG_5401.JPG"
              alt="Trade show magic performance in Miami"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/IMG_5402.JPG"
              alt="Trade show magic performance in Miami"
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
            Make Your Miami Trade Show Stand Out
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              Trade show magic is a powerful way to attract attention and engage visitors at your Miami exhibition. James's customized performances highlight your products or services while creating memorable experiences for potential clients.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Perfect for trade shows, conferences, and exhibitions across Miami, James's trade show magic combines entertainment with your marketing message to create a unique and effective booth attraction.
            </p>
          </div>
        </div>
      </section>

      {/* Picture and Video Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/IMG_5403.JPG"
              alt="Trade show magic performance in Miami"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              title="Trade Show Magic Performance"
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
              <h3 className="text-xl font-semibold mb-4">Close-Up Magic</h3>
              <p className="text-gray-300 mb-4">Perfect for intimate gatherings and networking events in Miami</p>
              <Link href="/cities/miami-magician/close-up" className="text-blue-400 hover:text-blue-300">Learn More →</Link>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Stage Magic</h3>
              <p className="text-gray-300 mb-4">Perfect for larger events and audiences in Miami</p>
              <Link href="/cities/miami-magician/stage-magic" className="text-blue-400 hover:text-blue-300">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      <CityFooter city="Miami" />
    </main>
  );
} 