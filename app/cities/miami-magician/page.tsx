import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import CityHero from '@/app/components/CityHero';
import PerformancesSection from '@/app/components/PerformancesSection';
import BookingExperienceSection from '@/app/components/BookingExperienceSection';
import ExperienceCreatorSection from '@/app/components/ExperienceCreatorSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import FAQSection from '@/app/components/FAQSection';
import BottomContactSection from '@/app/components/BottomContactSection';
import ClientQuoteForm from '../../components/ClientQuoteForm';
import { useState } from 'react';

export const metadata: Metadata = {
  title: 'Hire a Magician in Miami — Corporate Events, Private Parties & More',
  description: 'Looking to hire a magician in Miami? James Kenyon performs at corporate events, private parties, weddings, and more. Book top entertainment now.'
};

export default function MiamiMagicianPage() {
  const [isCloseUpExpanded, setIsCloseUpExpanded] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <CityHero cityName="Miami" heroImage="/images/hero.webp" />
        <ClientQuoteForm city="Miami" />
        <PerformancesSection city="Miami" />
        
        {/* Close-Up Magic Section */}
        <section id="close-up-magic" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Close-Up Magic in Miami</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                Close-up magic is perfect for creating intimate, engaging experiences at your Miami event. Whether you're hosting a corporate gathering, private party, or special occasion, James brings his unique brand of sleight-of-hand magic directly to your guests.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                In Miami, James adapts his performance to match your event's atmosphere and goals. From cocktail hours to dinner parties, his interactive magic creates natural conversation starters and helps guests connect in a fun, memorable way.
              </p>
              <button
                onClick={() => setIsCloseUpExpanded(!isCloseUpExpanded)}
                className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg"
              >
                {isCloseUpExpanded ? 'Show Less' : 'Learn More About Close-Up Magic'}
              </button>
            </div>

            {/* Expandable Content */}
            {isCloseUpExpanded && (
              <div className="mt-12 space-y-16">
                {/* Bullet Points Section */}
                <div className="space-y-12">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-8 h-8 mt-1">
                      <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-xl text-gray-200">Experience magic up close and personal in Miami, where every trick happens right in front of your eyes. Perfect for cocktail hours, dinner parties, and corporate networking events, creating natural conversation starters and memorable interactions.</p>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-8 h-8 mt-1">
                      <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-xl text-gray-200">Each performance is tailored to your Miami event's atmosphere and audience, whether it's sophisticated corporate entertainment or engaging party magic. The intimate nature of close-up magic creates a unique connection with your guests.</p>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-8 h-8 mt-1">
                      <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-xl text-gray-200">From elegant card tricks to mind-bending mentalism, each effect is carefully selected to amaze and entertain. The performance flows naturally through your Miami event, creating a sophisticated atmosphere that enhances the overall experience.</p>
                  </div>
                </div>

                {/* Video Section */}
                <div className="max-w-6xl mx-auto">
                  <video
                    src="/videos/websitie - Made with Clipchamp.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full rounded-lg"
                  />
                </div>

                {/* FAQ Section */}
                <div className="relative">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/images/JamesKenyon_Magic_0092.jpg"
                      alt="Close-up magic background"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black bg-blue-100/30 p-4 rounded-lg">
                      Frequently Asked Questions About Close-Up Magic in Miami
                    </h2>
                    <div className="space-y-8">
                      <div className="p-8 rounded-lg bg-blue-100/30">
                        <h3 className="text-xl font-bold mb-4 text-black">What is close-up magic?</h3>
                        <p className="text-gray-900 text-lg font-bold">Close-up magic is performed right in front of your guests, often using everyday objects like cards, coins, or borrowed items. It creates a personal and interactive experience where the magic happens literally in the palm of your hand, leaving guests amazed and engaged. As your Miami magician, I specialize in making these moments unforgettable.</p>
                      </div>
                      <div className="p-8 rounded-lg bg-blue-100/30">
                        <h3 className="text-xl font-bold mb-4 text-black">How long does a close-up magic performance last?</h3>
                        <p className="text-gray-900 text-lg font-bold">I typically perform for 2–3 hours, moving seamlessly among your guests or tables. This ensures that everyone enjoys the magic while maintaining the natural flow of the event. For events with more than 300 guests, I may need additional time to ensure everyone has the opportunity to experience the magic.</p>
                      </div>
                      <div className="p-8 rounded-lg bg-blue-100/30">
                        <h3 className="text-xl font-bold mb-4 text-black">What kind of events is close-up magic suitable for?</h3>
                        <p className="text-gray-900 text-lg font-bold">My close-up magic is perfect for cocktail hours, dinner parties, corporate networking events, and private celebrations in Miami. It enhances both formal and casual gatherings by sparking conversation and delighting guests.</p>
                      </div>
                      <div className="p-8 rounded-lg bg-blue-100/30">
                        <h3 className="text-xl font-bold mb-4 text-black">How many guests can you entertain?</h3>
                        <p className="text-gray-900 text-lg font-bold">I can comfortably entertain groups ranging from 10 to 300 guests. For larger events (over 300), I may recommend extending my time at your event to ensure every guest experiences the magic firsthand. I move naturally between tables or clusters of people, making sure the magic reaches everyone.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    What Our Miami Clients Say
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-black p-8 rounded-lg border border-gray-800">
                      <p className="text-gray-300 mb-6 text-lg">"James's close-up magic was the highlight of our corporate dinner in Miami. He moved seamlessly between tables, creating intimate moments of wonder that brought our team together in a unique way."</p>
                      <div>
                        <p className="font-semibold text-xl">Jennifer Martinez</p>
                        <p className="text-gray-400">HR Director, TechCorp</p>
                      </div>
                    </div>
                    <div className="bg-black p-8 rounded-lg border border-gray-800">
                      <p className="text-gray-300 mb-6 text-lg">"The way James engaged with our guests was remarkable. His close-up magic created the perfect atmosphere for our networking event, making it easy for people to connect and share their amazement."</p>
                      <div>
                        <p className="font-semibold text-xl">Robert Chen</p>
                        <p className="text-gray-400">Event Coordinator, Global Finance</p>
                      </div>
                    </div>
                    <div className="bg-black p-8 rounded-lg border border-gray-800">
                      <p className="text-gray-300 mb-6 text-lg">"Our holiday party in Miami was transformed by James's performance. The intimate nature of close-up magic made everyone feel special, and the reactions were priceless. It was exactly what we needed to make our event memorable."</p>
                      <div>
                        <p className="font-semibold text-xl">Sarah Thompson</p>
                        <p className="text-gray-400">Marketing Manager, Creative Solutions</p>
                      </div>
                    </div>
                    <div className="bg-black p-8 rounded-lg border border-gray-800">
                      <p className="text-gray-300 mb-6 text-lg">"James's ability to read the room and adapt his performance to different groups was impressive. He created a sophisticated atmosphere that perfectly complemented our corporate event in Miami."</p>
                      <div>
                        <p className="font-semibold text-xl">Michael Anderson</p>
                        <p className="text-gray-400">CEO, Innovation Partners</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking Process */}
                <div className="max-w-5xl mx-auto text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">A seamless booking experience</h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-16 max-w-2xl mx-auto">From initial inquiry to post-event follow-up, we ensure a professional and straightforward process.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {/* Step 1: Consultation */}
                    <div className="flex flex-col items-center bg-[#181818] rounded-2xl p-8 shadow-lg">
                      <div className="bg-black rounded-xl p-4 mb-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 2.25h6M9 2.25A2.25 2.25 0 006.75 4.5v15A2.25 2.25 0 009 21.75h6a2.25 2.25 0 002.25-2.25v-15A2.25 2.25 0 0015 2.25M9 2.25v1.5A2.25 2.25 0 0011.25 6h1.5A2.25 2.25 0 0015 3.75v-1.5M8.25 9.75h7.5m-7.5 3h4.5" />
                          <circle cx="17" cy="17" r="3" fill="white" stroke="black" strokeWidth="1.5" />
                          <path d="M17 16v1h1" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="flex items-center justify-center mb-4">
                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black font-bold text-lg">01</span>
                      </div>
                      <div className="font-bold text-xl text-white mb-2">Consultation</div>
                      <div className="text-gray-300 text-base">We'll discuss your event objectives, audience, and specific requirements to determine the perfect magical experience.</div>
                    </div>
                    {/* Step 2: Customization */}
                    <div className="flex flex-col items-center bg-[#181818] rounded-2xl p-8 shadow-lg">
                      <div className="bg-black rounded-xl p-4 mb-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.212l-4.5 1.5 1.5-4.5 12.362-12.225z" />
                          <rect x="2" y="20" width="20" height="2" rx="1" fill="white" />
                        </svg>
                      </div>
                      <div className="flex items-center justify-center mb-4">
                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black font-bold text-lg">02</span>
                      </div>
                      <div className="font-bold text-xl text-white mb-2">Customization</div>
                      <div className="text-gray-300 text-base">James will design a tailored performance that incorporates your brand messaging and aligns with your event goals.</div>
                    </div>
                    {/* Step 3: Performance */}
                    <div className="flex flex-col items-center bg-[#181818] rounded-2xl p-8 shadow-lg">
                      <div className="bg-black rounded-xl p-4 mb-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                          <rect x="4" y="15" width="16" height="4" rx="2" fill="white" stroke="white" />
                          <circle cx="12" cy="11" r="3" stroke="white" strokeWidth="1.5" />
                          <path d="M8 8l.5-1M16 8l-.5-1M12 6V4M10 10l-1 .5M14 10l1 .5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="flex items-center justify-center mb-4">
                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black font-bold text-lg">03</span>
                      </div>
                      <div className="font-bold text-xl text-white mb-2">Performance</div>
                      <div className="text-gray-300 text-base">James delivers a flawless, memorable experience that exceeds expectations and achieves your event goals.</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Stage Magic Section */}
        <section id="stage-magic" className="py-16 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Stage Magic in Miami</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                Stage magic is perfect for creating a shared experience that brings your entire audience together. Whether you're hosting a corporate event, wedding, or special occasion, James delivers a performance that will be remembered long after the event ends.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Perfect for large corporate events, weddings, and special occasions across Miami, James's stage show combines mind-reading, illusions, and audience participation to create an unforgettable experience.
              </p>
            </div>
          </div>
        </section>

        <BookingExperienceSection />
        <ExperienceCreatorSection />
        <TestimonialsSection />
        <FAQSection />
        <BottomContactSection />
        <CityFooter city="Miami" />
      </main>
    </>
  );
} 