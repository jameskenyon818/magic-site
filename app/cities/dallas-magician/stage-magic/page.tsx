import Link from 'next/link';
import QuoteForm from '../../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../../components/LogoCarousel';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';
import PerformancesSection from '@/app/components/PerformancesSection';
import BookingExperienceSection from '@/app/components/BookingExperienceSection';
import ExperienceCreatorSection from '@/app/components/ExperienceCreatorSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import FAQSection from '@/app/components/FAQSection';
import BottomContactSection from '@/app/components/BottomContactSection';
import ClientQuoteForm from '@/app/components/ClientQuoteForm';

export const metadata: Metadata = {
  title: 'Hire a Stage Magician in Dallas — Perfect for Weddings, Galas & Corporate Events',
  description: 'Looking for a stage magician in Dallas? James Kenyon delivers captivating stage shows for weddings, corporate events, and special occasions. Book now for an unforgettable magic experience.',
};

export default function DallasStagePage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Dallas" heroImage="/images/hero.webp" />
        <ClientQuoteForm city="Dallas" />
        <PerformancesSection city="Dallas" />
        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <TestimonialsSection />
        <FAQSection />
        <BottomContactSection />

        {/* Stage Magic Specific Q&A Section */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Why Choose James for Your Dallas Stage Show
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Why hire James for stage magic?</h3>
                <p className="text-gray-300">James creates captivating stage shows that engage entire audiences, perfect for weddings, corporate events, and special occasions in Dallas.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">How does James adapt to different venues?</h3>
                <p className="text-gray-300">From intimate ballrooms to large conference halls, James customizes his performance to work perfectly in any Dallas venue.</p>
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
              Stage Magic Success Stories in Dallas
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "James's stage show was the highlight of our annual gala in Dallas. The audience was completely captivated!"
                </p>
                <p className="font-semibold text-white">— Non-Profit Director</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "Our wedding guests are still talking about the magic show at our Dallas venue. It was the perfect entertainment!"
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
              Explore Other Magic Types in Dallas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Close-Up Magic</h3>
                <p className="text-gray-300 mb-4">Intimate, interactive magic that brings wonder directly to your guests at parties and corporate events.</p>
                <Link href="/cities/dallas-magician/close-up" className="text-blue-400 hover:text-blue-300">Learn More →</Link>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Trade Show Magic</h3>
                <p className="text-gray-300 mb-4">Interactive performances that draw crowds and generate leads at trade shows and conferences.</p>
                <Link href="/cities/dallas-magician/trade-show" className="text-blue-400 hover:text-blue-300">Learn More →</Link>
              </div>
            </div>
          </div>
        </section>

        <CityFooter city="Dallas" />
      </main>
    </>
  );
} 