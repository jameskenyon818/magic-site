import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import ClientQuoteForm from '@/app/components/ClientQuoteForm';

export const metadata: Metadata = {
  title: 'Hire a Trade Show Magician in Miami — Boost Booth Traffic & Engagement',
  description: 'Looking for a trade show magician in Miami? James Kenyon delivers interactive performances that draw crowds and generate leads at trade shows and conferences. Book now for maximum booth impact.',
};

export default function MiamiTradeShowPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/images/trade-show-hero.webp"
              alt="Trade show magic performance in Miami"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Trade Show Magic in Miami
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Interactive performances that draw crowds and generate leads.
            </p>
            <ClientQuoteForm city="Miami" />
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Create Unforgettable Moments in Miami
                </h2>
                <p className="text-lg mb-6 text-gray-300">
                  James Kenyon's trade show magic creates engaging experiences that draw crowds to your booth and generate quality leads. His interactive performances make your booth the most talked-about destination on the show floor.
                </p>
                <p className="text-lg mb-6 text-gray-300">
                  Perfect for trade shows and conferences across Miami, James adapts his performance to highlight your products, services, or key messages, making your booth stand out.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <h3 className="font-bold text-white mb-2">2-8 hours</h3>
                    <p className="text-gray-300">Performance duration</p>
                  </div>
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <h3 className="font-bold text-white mb-2">100%</h3>
                    <p className="text-gray-300">Lead capture rate</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/images/trade-show-performance.jpg"
                  alt="Trade show magic performance in Miami"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trade Show Magic Specific Q&A Section */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Why Choose James for Your Miami Trade Show Magic
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Why hire James for trade show magic?</h3>
                <p className="text-gray-300">James creates engaging experiences that draw crowds to your booth and generate quality leads, making your Miami trade show presence truly memorable.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">How does James generate leads?</h3>
                <p className="text-gray-300">Through interactive magic that naturally leads to conversations about your products or services, making lead collection feel organic and engaging.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Can he highlight our products?</h3>
                <p className="text-gray-300">Absolutely. James can incorporate your products, services, or key messages into the performance, making your booth stand out from competitors.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">How long does he perform?</h3>
                <p className="text-gray-300">Typically 2-8 hours per day, with James maintaining high energy and engagement throughout the entire show.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">What makes his trade show magic special?</h3>
                <p className="text-gray-300">His ability to create memorable experiences that naturally lead to conversations about your business, making lead generation feel effortless.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">How does he handle large crowds?</h3>
                <p className="text-gray-300">James is skilled at managing crowd flow and ensuring everyone gets a chance to experience the magic while maintaining a positive booth atmosphere.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trade Show Magic Specific Testimonials */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Trade Show Magic Success Stories in Miami
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "James increased our booth traffic by 40% at the Miami conference. The leads were high quality too!"
                </p>
                <p className="font-semibold text-white">— Trade Show Manager</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "The trade show magic was the perfect way to showcase our new product at the Miami expo. Everyone remembered us!"
                </p>
                <p className="font-semibold text-white">— Product Marketing Director</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "James made our booth the most engaging destination at the Miami trade show. The ROI was incredible."
                </p>
                <p className="font-semibold text-white">— Sales Director</p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Magic Types Section */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Explore Other Magic Types in Miami
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Close-Up Magic</h3>
                <p className="text-gray-300 mb-4">Intimate, interactive magic that brings wonder directly to your guests at tables and small groups.</p>
                <Link href="/cities/miami-magician/close-up" className="text-blue-400 hover:text-blue-300">Learn More →</Link>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Stage Magic</h3>
                <p className="text-gray-300 mb-4">Captivating stage shows for large audiences at weddings, galas, and corporate events.</p>
                <Link href="/cities/miami-magician/stage-magic" className="text-blue-400 hover:text-blue-300">Learn More →</Link>
              </div>
            </div>
          </div>
        </section>

        <ClientQuoteForm city="Miami" />
        <CityFooter city="Miami" />
      </main>
    </>
  );
} 