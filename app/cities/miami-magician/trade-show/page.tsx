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
              Interactive performances that draw crowds and generate leads at your booth.
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
                  James Kenyon's trade show magic creates moments of wonder that draw crowds to your booth. 
                  His interactive performances combine entertainment with your key messages, making your 
                  products or services memorable.
                </p>
                <p className="text-lg mb-6 text-gray-300">
                  Perfect for trade shows and conferences across Miami, James adapts his performance 
                  to highlight your unique selling points and generate quality leads.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <h3 className="font-bold text-white mb-2">5-7 min</h3>
                    <p className="text-gray-300">Performance duration</p>
                  </div>
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <h3 className="font-bold text-white mb-2">30-50%</h3>
                    <p className="text-gray-300">Traffic increase</p>
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
                <p className="text-gray-300">James creates moments of wonder that draw crowds to your booth, making your Miami trade show presence truly memorable.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">How does James engage with attendees?</h3>
                <p className="text-gray-300">Through interactive magic that incorporates your key messages, creating memorable experiences that generate leads.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Is this suitable for all trade shows?</h3>
                <p className="text-gray-300">Absolutely. James adapts his performance to match your industry and goals, whether it's lead generation or brand awareness.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">What results can I expect?</h3>
                <p className="text-gray-300">Typically 30-50% increase in booth traffic and higher quality lead generation through memorable interactions.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">How long does James perform?</h3>
                <p className="text-gray-300">Typically 5-7 minute sets, repeated throughout the day to maintain consistent booth traffic.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">What makes his trade show magic special?</h3>
                <p className="text-gray-300">His ability to seamlessly integrate your key messages into the performance, making your products or services memorable.</p>
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
                  "James's trade show magic increased our booth traffic by 40% at the Miami conference. The leads were high quality too!"
                </p>
                <p className="font-semibold text-white">— Tech Company CEO</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "The trade show magic was the perfect way to showcase our new product at the Miami expo. Everyone remembered us!"
                </p>
                <p className="font-semibold text-white">— Product Manager</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "James made our trade show presence unforgettable. His ability to incorporate our message into the magic was remarkable."
                </p>
                <p className="font-semibold text-white">— Marketing Director</p>
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
                <p className="text-gray-300 mb-4">Intimate, interactive magic performed up-close at tables during dinners and receptions.</p>
                <Link href="/cities/miami-magician/close-up" className="text-blue-400 hover:text-blue-300">Learn More →</Link>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Stage Magic</h3>
                <p className="text-gray-300 mb-4">Captivating stage shows for large audiences at weddings, galas, and corporate events.</p>
                <Link href="/cities/miami-magician/stage" className="text-blue-400 hover:text-blue-300">Learn More →</Link>
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