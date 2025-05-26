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
  title: 'Stage Magician in Austin — Big Magic for Large Audiences',
  description: 'Looking for a stage magician in Austin? James Kenyon delivers captivating stage shows for weddings, galas, and large corporate events. Book now for an unforgettable performance.',
};

export default function AustinStagePage() {
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
              alt="Stage magic performance in Austin"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Stage Magician in Austin
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Captivating stage shows that transform your Austin event into an unforgettable experience
            </p>
            <ClientQuoteForm city="Austin" />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Stage Magic in Austin: Perfect for Large Events
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6">
                  When you need a stage magician in Austin for your large event, James Kenyon delivers 
                  performances that captivate audiences of all sizes. From elegant Austin weddings to 
                  corporate galas, our stage shows create moments of wonder that your guests will never forget.
                </p>
                <p className="text-lg mb-6">
                  Austin's vibrant event scene deserves entertainment that matches its energy. Our stage 
                  magic performances combine classic illusions with modern presentation, perfect for the 
                  city's diverse venues and audiences.
                </p>
                <p className="text-lg">
                  Whether you're planning a wedding at one of Austin's historic venues or a corporate 
                  event in the city's modern spaces, our stage magic adds a touch of wonder that elevates 
                  your entire event.
                </p>
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

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose James for Your Austin Stage Show
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Why hire James for stage magic?</h3>
                <p className="text-gray-600">James delivers captivating stage shows that combine classic illusions with modern presentation, perfect for large audiences.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">How does James engage large audiences?</h3>
                <p className="text-gray-600">Through a perfect blend of grand illusions, audience participation, and storytelling that keeps everyone on the edge of their seats.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Is this suitable for corporate events?</h3>
                <p className="text-gray-600">Absolutely. James customizes his stage show to match your company's brand and event goals, whether it's a product launch or annual gala.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">What size venues work best?</h3>
                <p className="text-gray-600">Stage magic works perfectly for venues of all sizes, from intimate theaters to large conference halls, with James adapting his show accordingly.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">How long is the stage show?</h3>
                <p className="text-gray-600">Typically 30-45 minutes, with James ensuring every moment is filled with wonder and excitement for your audience.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">What makes his stage magic special?</h3>
                <p className="text-gray-600">His ability to create a shared experience that brings your entire audience together in moments of collective wonder.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Stage Magic Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic mb-4">
                  "James's stage show was the highlight of our annual gala. The audience was completely captivated."
                </p>
                <p className="font-semibold">— Corporate Event Director</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic mb-4">
                  "Our wedding guests are still talking about the magic show. It was the perfect entertainment for our special day."
                </p>
                <p className="font-semibold">— Newlywed Couple</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic mb-4">
                  "The stage magic added a touch of wonder to our product launch. James made our brand message unforgettable."
                </p>
                <p className="font-semibold">— Marketing Director</p>
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
                <h3 className="text-xl font-bold mb-4">Close-Up Magic</h3>
                <p className="text-gray-600 mb-4">Intimate, interactive magic that brings wonder directly to your guests at parties and corporate events.</p>
                <Link href="/cities/austin-magician/close-up" className="text-blue-600 hover:text-blue-800">Learn More →</Link>
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