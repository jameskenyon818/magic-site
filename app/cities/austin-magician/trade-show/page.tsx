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

export const metadata = {
  title: 'Trade Show Magician in Austin — Stop Traffic, Drive Leads',
  description: 'Looking for a trade show magician in Austin? James Kenyon creates engaging booth experiences that attract crowds and generate leads at your next trade show or conference.',
};

export default function AustinTradeShowPage() {
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
              alt="Trade show magic performance in Austin"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Austin Trade Show Magician
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Captivating crowds. Delivering leads. James Kenyon brings your booth to life.
            </p>
            <ClientQuoteForm city="Austin" />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Trade Show Magic in Austin: Drive Booth Traffic
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6">
                  When you need to stand out at Austin's busy trade shows and conferences, a trade show 
                  magician creates the perfect attraction. James Kenyon's interactive performances draw 
                  crowds to your booth while subtly incorporating your brand message and product benefits.
                </p>
                <p className="text-lg mb-6">
                  Austin's tech and business events are known for innovation and creativity. Our trade show 
                  magic performances are designed to match this energy, creating memorable experiences that 
                  generate leads and build brand awareness.
                </p>
                <p className="text-lg">
                  From the Austin Convention Center to corporate events across the city, our trade show 
                  magic turns your booth into a must-visit destination that drives engagement and 
                  conversions.
                </p>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/images/trade-show-performance.jpg"
                  alt="Trade show magic performance in Austin"
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
              Why Choose James for Your Austin Trade Show
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Why hire James for your trade show?</h3>
                <p className="text-gray-600">James stops traffic at your booth using unforgettable magic tied to your message — no gimmicks, just results.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">How does James attract qualified leads?</h3>
                <p className="text-gray-600">By weaving your company's product pitch into the magic, he entertains and educates at the same time.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Is this professional enough for big brands?</h3>
                <p className="text-gray-600">James has performed for FedEx, American Express, and HBO. He's polished, on-brand, and reliable.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Does it work for any size booth?</h3>
                <p className="text-gray-600">Whether you're in a 10x10 or an island exhibit, James adapts his set to fit the space — and still draw attention.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">What if attendees just walk past?</h3>
                <p className="text-gray-600">They won't. James is trained to interrupt politely with visual magic that hooks them in seconds.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">How is he different from other entertainers?</h3>
                <p className="text-gray-600">He's not just a magician — he's a marketer in disguise. Every trick has a message. Every moment has a purpose.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Trade Show Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic mb-4">
                  "James helped us triple our booth traffic in Austin. He worked our product message into the magic and made us the talk of the show."
                </p>
                <p className="font-semibold">— Tech Conference Organizer</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic mb-4">
                  "We've hired magicians before, but none understood why we were there. James delivered both entertainment and ROI."
                </p>
                <p className="font-semibold">— Marketing Director</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic mb-4">
                  "Our team loved him. Our clients remembered us. And yes — we already booked him for next year's Austin convention."
                </p>
                <p className="font-semibold">— Event Coordinator</p>
              </div>
            </div>
          </div>
        </section>

        <PerformancesSection />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <TestimonialsSection />
        <FAQSection />
        <BottomContactSection />
        <CityFooter city="Austin" />
      </main>
    </>
  );
} 