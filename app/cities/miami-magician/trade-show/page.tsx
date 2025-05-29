import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import ClientQuoteForm from '@/app/components/ClientQuoteForm';

export const metadata: Metadata = {
  title: 'Hire a Trade Show Magician in Miami — Boost Booth Traffic & Engagement',
  description: 'Looking for a trade show magician in Miami? James Kenyon delivers interactive performances that draw crowds and generate leads at trade shows and conferences. Book now for maximum booth impact.'
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
            Interactive performances that draw crowds and generate leads
          </p>
        </div>
      </section>

      <ClientQuoteForm city="Miami" />

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Create Unforgettable Moments in Miami
          </h2>
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

      {/* Image Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/IMG_5401.JPG"
              alt="Trade show magic performance in Miami"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why Choose James for Your Miami Trade Show Magic
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Increased Traffic</h3>
              <p className="text-gray-300">James creates moments of wonder that draw crowds to your booth, making your Miami trade show presence truly memorable.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Lead Generation</h3>
              <p className="text-gray-300">The interactive nature of the performance creates natural opportunities to collect contact information and qualify leads.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Brand Integration</h3>
              <p className="text-gray-300">The magic can be customized to highlight your products, services, or key messages, reinforcing your brand throughout the performance.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Professional Service</h3>
              <p className="text-gray-300">From setup to performance, James ensures a seamless experience that reflects positively on your brand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Trade Show Magic Success Stories in Miami
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black p-6 rounded-lg">
              <p className="text-gray-300 italic mb-4">"James's trade show magic increased our booth traffic by 40% at the Miami conference. The leads were high quality too!"</p>
              <p className="text-white font-semibold">- Trade Show Manager</p>
            </div>
            <div className="bg-black p-6 rounded-lg">
              <p className="text-gray-300 italic mb-4">"The trade show magic was the perfect way to showcase our new product at the Miami expo. Everyone remembered us!"</p>
              <p className="text-white font-semibold">- Product Marketing Director</p>
            </div>
          </div>
        </div>
      </section>

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
              <Link href="/cities/miami-magician/stage" className="text-blue-400 hover:text-blue-300">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      <ClientQuoteForm city="Miami" />
      <CityFooter city="Miami" />
    </main>
  );
} 