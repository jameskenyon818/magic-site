import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import ClientQuoteForm from '@/app/components/ClientQuoteForm';

export const metadata: Metadata = {
  title: 'Hire a Close-Up Magician in Miami — Perfect for Parties & Corporate Events',
  description: 'Looking for a close-up magician in Miami? James Kenyon delivers unforgettable sleight-of-hand performances for corporate events, private parties, and special occasions. Book now for an intimate magic experience.',
};

export default function MiamiCloseUpPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/images/close-up-hero.webp"
              alt="Close-up magic performance in Miami"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Close-Up Magic in Miami
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Intimate, interactive magic that brings wonder directly to your guests.
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
                  James Kenyon's close-up magic creates intimate moments of wonder that connect 
                  with your guests on a personal level. His sleight-of-hand performances happen 
                  right at your tables, making each guest feel special and engaged.
                </p>
                <p className="text-lg mb-6 text-gray-300">
                  Perfect for corporate events, private parties, and special occasions across 
                  Miami, James adapts his performance to match your event's atmosphere and goals.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <h3 className="font-bold text-white mb-2">2-3 hours</h3>
                    <p className="text-gray-300">Performance duration</p>
                  </div>
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <h3 className="font-bold text-white mb-2">20-200</h3>
                    <p className="text-gray-300">Guests per event</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/images/close-up-performance.jpg"
                  alt="Close-up magic performance in Miami"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Close-Up Magic Specific Q&A Section */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Why Choose James for Your Miami Close-Up Magic
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Why hire James for close-up magic?</h3>
                <p className="text-gray-300">James creates intimate moments of wonder that connect with your guests on a personal level, making your Miami event truly memorable.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">How does James engage with guests?</h3>
                <p className="text-gray-300">Through interactive sleight-of-hand magic that happens right in front of your guests, creating personal connections and shared experiences.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Is this suitable for corporate events?</h3>
                <p className="text-gray-300">Absolutely. James adapts his performance to match your company's culture and event goals, whether it's networking or team building.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">What size groups work best?</h3>
                <p className="text-gray-300">Close-up magic works perfectly for groups of 20-200 guests, with James circulating throughout the event to ensure everyone experiences the magic.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">How long does James perform?</h3>
                <p className="text-gray-300">Typically 2-3 hours, with James moving from group to group, ensuring each guest experiences multiple moments of wonder.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">What makes his close-up magic special?</h3>
                <p className="text-gray-300">His ability to create personal connections through magic, making each guest feel like they're part of something extraordinary.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Close-Up Magic Specific Testimonials */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Close-Up Magic Success Stories in Miami
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "James worked the room perfectly at our corporate event in Miami. Every guest felt special and engaged."
                </p>
                <p className="font-semibold text-white">— Tech Company CEO</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "The close-up magic was the highlight of our wedding reception at the Miami venue. Guests are still talking about it!"
                </p>
                <p className="font-semibold text-white">— Newlywed Couple</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "James made our holiday party unforgettable. His ability to connect with each guest was remarkable."
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
                <h3 className="text-xl font-bold mb-4 text-white">Stage Magic</h3>
                <p className="text-gray-300 mb-4">Captivating stage shows for large audiences at weddings, galas, and corporate events.</p>
                <Link href="/cities/miami-magician/stage" className="text-blue-400 hover:text-blue-300">Learn More →</Link>
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