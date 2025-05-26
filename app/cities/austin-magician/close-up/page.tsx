import Head from 'next/head';
import Image from 'next/image';
import ClientQuoteForm from '@/app/components/ClientQuoteForm';
import CityFooter from '@/app/components/CityFooter';
import PerformancesSection from '@/app/components/PerformancesSection';
import BookingExperienceSection from '@/app/components/BookingExperienceSection';
import ExperienceCreatorSection from '@/app/components/ExperienceCreatorSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import FAQSection from '@/app/components/FAQSection';
import BottomContactSection from '@/app/components/BottomContactSection';
import Link from 'next/link';

export const metadata = {
  title: 'Hire a Close-Up Magician in Austin — Perfect for Parties & Corporate Events',
  description: 'Looking for a close-up magician in Austin? James Kenyon delivers unforgettable sleight-of-hand performances for corporate events, private parties, and special occasions. Book now for an intimate magic experience.',
};

export default function AustinCloseUpPage() {
  return (
    <>
      <Head>
        <link rel="preload" href="/images/homepage-hero.webp" as="image" />
      </Head>
      
      <main>
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/images/homepage-hero.webp"
              alt="Close-up magic performance in Austin"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Close-Up Magician in Austin
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience the wonder of intimate, interactive magic that brings your Austin event to life
            </p>
            <ClientQuoteForm city="Austin" />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Close-Up Magic in Austin: Perfect for Any Occasion
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6">
                  When you hire a close-up magician in Austin, you're bringing the magic directly to your guests. 
                  James Kenyon's sleight-of-hand performances create intimate moments of wonder that your guests 
                  will remember long after your Austin event.
                </p>
                <p className="text-lg mb-6">
                  Whether you're hosting a corporate gathering in downtown Austin or a private party in the suburbs, 
                  close-up magic adds a unique touch that sets your event apart. Our Austin magician performs 
                  interactive magic that engages small groups, creating personal connections and memorable experiences.
                </p>
                <p className="text-lg">
                  From tech companies in Austin's innovation district to traditional corporate events, 
                  our close-up magic performances are tailored to your specific audience and venue.
                </p>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/images/close-up-performance.jpg"
                  alt="Close-up magic performance in Austin"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose James for Your Austin Close-Up Magic
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Why hire James for close-up magic?</h3>
                <p className="text-gray-600">James creates intimate moments of wonder that connect with your guests on a personal level, making your event truly memorable.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">How does James engage with guests?</h3>
                <p className="text-gray-600">Through interactive sleight-of-hand magic that happens right in front of your guests, creating personal connections and shared experiences.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Is this suitable for corporate events?</h3>
                <p className="text-gray-600">Absolutely. James adapts his performance to match your company's culture and event goals, whether it's networking or team building.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">What size groups work best?</h3>
                <p className="text-gray-600">Close-up magic works perfectly for groups of 20-200 guests, with James circulating throughout the event to ensure everyone experiences the magic.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">How long does James perform?</h3>
                <p className="text-gray-600">Typically 2-3 hours, with James moving from group to group, ensuring each guest experiences multiple moments of wonder.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">What makes his close-up magic special?</h3>
                <p className="text-gray-600">His ability to create personal connections through magic, making each guest feel like they're part of something extraordinary.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Close-Up Magic Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic mb-4">
                  "James worked the room perfectly at our corporate event. Every guest felt special and engaged."
                </p>
                <p className="font-semibold">— Tech Company CEO</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic mb-4">
                  "The close-up magic was the highlight of our wedding reception. Guests are still talking about it!"
                </p>
                <p className="font-semibold">— Newlywed Couple</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic mb-4">
                  "James made our holiday party unforgettable. His ability to connect with each guest was remarkable."
                </p>
                <p className="font-semibold">— Event Coordinator</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Explore Other Magic Types in Austin
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Stage Magic</h3>
                <p className="text-gray-600 mb-4">Captivating stage shows for large audiences at weddings, galas, and corporate events.</p>
                <Link href="/cities/austin-magician/stage" className="text-blue-600 hover:text-blue-800">Learn More →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Trade Show Magic</h3>
                <p className="text-gray-600 mb-4">Interactive performances that draw crowds and generate leads at trade shows and conferences.</p>
                <Link href="/cities/austin-magician/trade-show" className="text-blue-600 hover:text-blue-800">Learn More →</Link>
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