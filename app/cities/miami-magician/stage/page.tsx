import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import ClientQuoteForm from '@/app/components/ClientQuoteForm';

export const metadata: Metadata = {
  title: 'Hire a Stage Magician in Miami — Perfect for Large Events & Conferences',
  description: 'Looking for a stage magician in Miami? James Kenyon delivers captivating stage shows for corporate events, weddings, and large gatherings. Book now for an unforgettable performance.',
};

export default function MiamiStagePage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/images/stage-hero.webp"
              alt="Stage magic performance in Miami"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Stage Magic in Miami
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Captivating stage shows that leave your entire audience amazed.
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
                  James Kenyon's stage magic creates moments of wonder that captivate your entire audience. 
                  His sophisticated performances combine mind-reading, illusions, and audience participation 
                  to create an unforgettable experience.
                </p>
                <p className="text-lg mb-6 text-gray-300">
                  Perfect for large corporate events, weddings, and special occasions across Miami, 
                  James adapts his performance to match your event's atmosphere and goals.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <h3 className="font-bold text-white mb-2">30-45 min</h3>
                    <p className="text-gray-300">Performance duration</p>
                  </div>
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <h3 className="font-bold text-white mb-2">50-1000+</h3>
                    <p className="text-gray-300">Audience size</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/images/stage-performance.jpg"
                  alt="Stage magic performance in Miami"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stage Magic Specific Q&A Section */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Why Choose James for Your Miami Stage Magic
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Why hire James for stage magic?</h3>
                <p className="text-gray-300">James creates moments of wonder that captivate your entire audience, making your Miami event truly memorable.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">How does James engage with the audience?</h3>
                <p className="text-gray-300">Through interactive stage magic that involves audience participation, creating shared experiences and excitement.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Is this suitable for corporate events?</h3>
                <p className="text-gray-300">Absolutely. James adapts his performance to match your company's culture and event goals, whether it's team building or entertainment.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">What size audiences work best?</h3>
                <p className="text-gray-300">Stage magic works perfectly for audiences of 50-1000+ guests, with James ensuring everyone experiences the magic.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">How long does James perform?</h3>
                <p className="text-gray-300">Typically 30-45 minutes, with a full stage production that keeps your audience engaged throughout.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">What makes his stage magic special?</h3>
                <p className="text-gray-300">His ability to create shared moments of wonder that bring your entire audience together in amazement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stage Magic Specific Testimonials */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Stage Magic Success Stories in Miami
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "James's stage show was the highlight of our corporate event in Miami. The entire audience was captivated."
                </p>
                <p className="font-semibold text-white">— Tech Company CEO</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "The stage magic was the perfect entertainment for our wedding reception at the Miami venue. Everyone loved it!"
                </p>
                <p className="font-semibold text-white">— Newlywed Couple</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "James made our holiday party unforgettable. His stage presence and audience interaction were remarkable."
                </p>
                <p className="font-semibold text-white">— Event Coordinator</p>
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
                <h3 className="text-xl font-bold mb-4 text-white">Trade Show Magic</h3>
                <p className="text-gray-300 mb-4">Interactive performances that draw crowds and generate leads at trade shows and conferences.</p>
                <Link href="/cities/miami-magician/trade-show" className="text-blue-400 hover:text-blue-300">Learn More →</Link>
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