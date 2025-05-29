import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import ClientQuoteForm from '@/app/components/ClientQuoteForm';

export const metadata: Metadata = {
  title: 'Hire a Stage Magician in Miami — Perfect for Large Events & Conferences',
  description: 'Looking for a stage magician in Miami? James Kenyon delivers captivating stage shows for corporate events, weddings, and large gatherings. Book now for an unforgettable performance.'
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
              Captivating performances that leave your entire audience amazed.
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
                  James Kenyon's stage magic creates shared moments of wonder that bring your entire audience together. His performances combine mind-reading, illusions, and audience participation to create an unforgettable experience.
                </p>
                <p className="text-lg mb-6 text-gray-300">
                  Perfect for large corporate events, weddings, and special occasions across Miami, James adapts his show to match your event's atmosphere and goals.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <h3 className="font-bold text-white mb-2">45-60 min</h3>
                    <p className="text-gray-300">Performance duration</p>
                  </div>
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <h3 className="font-bold text-white mb-2">50-500+</h3>
                    <p className="text-gray-300">Guests per event</p>
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
                <p className="text-gray-300">James creates shared moments of wonder that bring your entire audience together, making your Miami event truly memorable.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">How does James engage the audience?</h3>
                <p className="text-gray-300">Through interactive elements that bring audience members on stage, creating memorable moments for everyone in attendance.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Is this suitable for corporate events?</h3>
                <p className="text-gray-300">Absolutely. James can incorporate your company's messaging and branding into the performance, making it uniquely relevant to your audience.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">What size groups work best?</h3>
                <p className="text-gray-300">Stage magic is perfect for larger audiences of 50-500+ guests, creating a shared experience that brings everyone together.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">How long is the performance?</h3>
                <p className="text-gray-300">Typically 45-60 minutes, with James maintaining high energy and audience engagement throughout the entire show.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">What makes his stage magic special?</h3>
                <p className="text-gray-300">His ability to create a shared experience that brings your entire audience together, making everyone feel part of something extraordinary.</p>
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
                <p className="font-semibold text-white">— Corporate Event Director</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "The stage magic was the perfect entertainment for our wedding reception at the Miami venue. Everyone loved it!"
                </p>
                <p className="font-semibold text-white">— Newlywed Couple</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "James made our gala unforgettable. His ability to engage the entire audience was remarkable."
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
                <p className="text-gray-300 mb-4">Intimate, interactive magic that brings wonder directly to your guests at tables and small groups.</p>
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