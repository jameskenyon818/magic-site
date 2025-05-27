import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import ClientQuoteForm from '@/app/components/ClientQuoteForm';

export const metadata: Metadata = {
  title: 'Hire a Stage Magician in Austin — Perfect for Weddings, Galas & Corporate Events',
  description: 'Looking for a stage magician in Austin? James Kenyon delivers captivating stage shows for weddings, corporate events, and special occasions. Book now for an unforgettable magic experience.',
};

export default function AustinStagePage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/images/stage-hero.webp"
              alt="Stage magic performance in Austin"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Stage Magic in Austin
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Captivating stage shows for weddings, galas, and corporate events.
            </p>
            <ClientQuoteForm city="Austin" />
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Elevate Your Austin Event with Stage Magic
                </h2>
                <p className="text-lg mb-6 text-gray-300">
                  From intimate weddings to large corporate events, James Kenyon's stage magic 
                  creates unforgettable moments that leave your audience amazed. His sophisticated 
                  blend of illusions, comedy, and audience participation ensures everyone is engaged.
                </p>
                <p className="text-lg mb-6 text-gray-300">
                  Whether you're hosting at the Austin Convention Center or a private venue, 
                  James adapts his performance to create the perfect atmosphere for your event.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <h3 className="font-bold text-white mb-2">30-45 min</h3>
                    <p className="text-gray-300">Show duration</p>
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
                  alt="Stage magic performance in Austin"
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
              Why Choose James for Your Austin Stage Show
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Why hire James for stage magic?</h3>
                <p className="text-gray-300">James creates captivating stage shows that engage entire audiences, perfect for weddings, corporate events, and special occasions in Austin.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">How does James adapt to different venues?</h3>
                <p className="text-gray-300">From intimate ballrooms to large conference halls, James customizes his performance to work perfectly in any Austin venue.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">What makes his stage show special?</h3>
                <p className="text-gray-300">His unique blend of comedy, audience participation, and mind-blowing illusions creates an unforgettable experience for everyone.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">How long is the stage show?</h3>
                <p className="text-gray-300">Typically 30-45 minutes, perfect for keeping your audience engaged while maintaining the flow of your event.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Does he need special equipment?</h3>
                <p className="text-gray-300">James brings everything needed for the show, requiring only a standard stage or performance area and basic lighting.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Can he incorporate our brand or theme?</h3>
                <p className="text-gray-300">Absolutely. James can customize his performance to align with your company's message or event theme.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stage Magic Specific Testimonials */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Stage Magic Success Stories in Austin
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "James's stage show was the highlight of our annual gala in Austin. The audience was completely captivated!"
                </p>
                <p className="font-semibold text-white">— Non-Profit Director</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "Our wedding guests are still talking about the magic show at our Austin venue. It was the perfect entertainment!"
                </p>
                <p className="font-semibold text-white">— Newlywed Couple</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "The corporate event was a huge success thanks to James's performance. He had everyone engaged."
                </p>
                <p className="font-semibold text-white">— Event Planner</p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Magic Types Section */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Explore Other Magic Types in Austin
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Close-Up Magic</h3>
                <p className="text-gray-300 mb-4">Intimate, interactive magic that brings wonder directly to your guests at parties and corporate events.</p>
                <Link href="/cities/austin-magician/close-up" className="text-blue-400 hover:text-blue-300">Learn More →</Link>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Trade Show Magic</h3>
                <p className="text-gray-300 mb-4">Interactive performances that draw crowds and generate leads at trade shows and conferences.</p>
                <Link href="/cities/austin-magician/trade-show" className="text-blue-400 hover:text-blue-300">Learn More →</Link>
              </div>
            </div>
          </div>
        </section>

        <ClientQuoteForm city="Austin" />
        <CityFooter city="Austin" />
      </main>
    </>
  );
} 