import { SITE_URL } from '@/lib/site';
import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CityFooter from '@/app/components/CityFooter';
import BottomContactSection from '@/app/components/BottomContactSection';
import FAQSection from '@/app/components/FAQSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import Navigation from '@/app/components/Navigation';
import LogoCarousel from '@/app/components/LogoCarousel';

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  title: 'Tampa Stage Magician | Corporate Events & Private Parties',
  description: "Tampa Stage Magician | Corporate Events & Private Parties | Captivating Stage Performances",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${siteUrl}/cities/tampa-magician/stage-magic`,
  },
};

export default function TampaStageMagicPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <Image
          src="/images/Untitled Project.jpg"
          alt="Stage magic performance in Tampa"
          fill
          className="object-contain sm:object-cover"
          priority
          quality={100}
          sizes="100vw"
          style={{ objectPosition: 'center 30%' }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Stage Magic Shows in Tampa
          </h1>
        </div>
      </section>

      {/* Bullet Points Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Create Unforgettable Moments in Tampa
          </h2>
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-gray-200">Experience grand illusions and stage magic in Tampa, where every performance creates a spectacle that captivates your entire audience. Perfect for corporate events, galas, and large private parties in Tampa, creating a shared experience that brings everyone together.</p>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-gray-200">Each stage show in Tampa is tailored to your event's atmosphere and audience, whether it's a sophisticated corporate presentation or an engaging entertainment segment. The theatrical nature of stage magic creates a memorable experience for all your guests.</p>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-gray-200">From grand illusions to audience participation effects, each stage performance is carefully selected to amaze and entertain your Tampa audience. The show creates a sophisticated atmosphere that enhances the overall experience of your event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4">
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
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Trusted by Leading Brands
          </h2>
          <LogoCarousel />
        </div>
      </section>

      {/* Q&A Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Questions & Answers
          </h2>
          <FAQSection />
        </div>
      </section>

      {/* Stage Magic Specific FAQ Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_5400.JPG"
            alt="Stage magic background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black bg-blue-100/30 p-4 rounded-lg">
            Frequently Asked Questions About Stage Magic in Tampa
          </h2>
          <div className="space-y-8">
            <div className="p-8 rounded-lg bg-blue-100/30">
              <h3 className="text-xl font-bold mb-4 text-black">What is stage magic?</h3>
              <p className="text-gray-900 text-lg font-bold">Stage magic is performed on a larger scale, featuring grand illusions and effects that can be seen by an entire audience. It creates a shared experience where the magic happens on stage, leaving everyone amazed and engaged. As your Tampa magician, I specialize in creating these spectacular moments.</p>
            </div>
            <div className="p-8 rounded-lg bg-blue-100/30">
              <h3 className="text-xl font-bold mb-4 text-black">How long does a stage magic show last?</h3>
              <p className="text-gray-900 text-lg font-bold">A typical stage show lasts 30-45 minutes, perfect for corporate events, galas, or as a featured entertainment segment. For larger events, I can perform multiple shows or extend the duration to ensure everyone enjoys the magic while maintaining the flow of your event.</p>
            </div>
            <div className="p-8 rounded-lg bg-blue-100/30">
              <h3 className="text-xl font-bold mb-4 text-black">What kind of events is stage magic suitable for?</h3>
              <p className="text-gray-900 text-lg font-bold">My stage magic is perfect for corporate presentations, galas, large private parties, and special events in Tampa. It enhances both formal and casual gatherings by creating a shared experience that brings everyone together.</p>
            </div>
            <div className="p-8 rounded-lg bg-blue-100/30">
              <h3 className="text-xl font-bold mb-4 text-black">What size audience can you accommodate?</h3>
              <p className="text-gray-900 text-lg font-bold">Stage magic can entertain audiences ranging from 50 to 500+ guests. The show is designed to be visible and engaging for everyone in the room, making it perfect for larger events. I can adapt the performance to suit your venue size and audience capacity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Our Tampa Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"James's stage show was the highlight of our corporate gala in Tampa. His grand illusions and audience interaction created an unforgettable experience that brought our entire team together. The way he incorporated our company's values into his performance was brilliant."</p>
              <div>
                <p className="font-semibold text-xl">Jennifer Martinez</p>
                <p className="text-gray-400">HR Director, TechCorp</p>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"The way James commanded the stage was remarkable. His stage magic created the perfect atmosphere for our large networking event in Tampa, making it easy for people to connect and share their amazement. The grand illusions were perfectly timed and left everyone in awe."</p>
              <div>
                <p className="font-semibold text-xl">Robert Chen</p>
                <p className="text-gray-400">Event Coordinator, Global Finance</p>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"Our holiday party in Tampa was transformed by James's performance. The grand illusions and audience participation made everyone feel involved, and the reactions were priceless. His ability to engage the entire audience while maintaining the sophistication of our event was impressive."</p>
              <div>
                <p className="font-semibold text-xl">Sarah Thompson</p>
                <p className="text-gray-400">Marketing Manager, Creative Solutions</p>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"James's stage magic performance at our annual conference was nothing short of spectacular. His grand illusions and masterful stage presence captivated our entire audience. The way he seamlessly integrated our brand message into his performance was a stroke of genius."</p>
              <div>
                <p className="font-semibold text-xl">Michael Anderson</p>
                <p className="text-gray-400">CEO, Innovation Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process Section */}
      <section className="w-full bg-black py-12 sm:py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">A seamless booking experience</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-16 max-w-2xl mx-auto">From initial inquiry to post-event follow-up, we ensure a professional and straightforward process.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1: Consultation */}
            <div className="flex flex-col items-center bg-[#181818] rounded-2xl p-8 shadow-lg">
              {/* Icon */}
              <div className="bg-black rounded-xl p-4 mb-4 flex items-center justify-center">
                {/* Clipboard with speech bubble (Heroicons outline) */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 2.25h6M9 2.25A2.25 2.25 0 006.75 4.5v15A2.25 2.25 0 009 21.75h6a2.25 2.25 0 002.25-2.25v-15A2.25 2.25 0 0015 2.25M9 2.25v1.5A2.25 2.25 0 0011.25 6h1.5A2.25 2.25 0 0015 3.75v-1.5M8.25 9.75h7.5m-7.5 3h4.5" />
                  <circle cx="17" cy="17" r="3" fill="white" stroke="black" strokeWidth="1.5" />
                  <path d="M17 16v1h1" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              {/* Step Number */}
              <div className="flex items-center justify-center mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black font-bold text-lg">01</span>
              </div>
              <div className="font-bold text-xl text-white mb-2">Consultation</div>
              <div className="text-gray-300 text-base">We'll discuss your event objectives, audience, and specific requirements to determine the perfect magical experience for your Tampa event.</div>
            </div>
            {/* Step 2: Customization */}
            <div className="flex flex-col items-center bg-[#181818] rounded-2xl p-8 shadow-lg">
              {/* Icon */}
              <div className="bg-black rounded-xl p-4 mb-4 flex items-center justify-center">
                {/* Pencil and paper (Heroicons outline) */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.212l-4.5 1.5 1.5-4.5 12.362-12.225z" />
                  <rect x="2" y="20" width="20" height="2" rx="1" fill="white" />
                </svg>
              </div>
              {/* Step Number */}
              <div className="flex items-center justify-center mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black font-bold text-lg">02</span>
              </div>
              <div className="font-bold text-xl text-white mb-2">Customization</div>
              <div className="text-gray-300 text-base">James will design a tailored performance that incorporates your brand messaging and aligns with your Tampa event goals.</div>
            </div>
            {/* Step 3: Performance */}
            <div className="flex flex-col items-center bg-[#181818] rounded-2xl p-8 shadow-lg">
              {/* Icon */}
              <div className="bg-black rounded-xl p-4 mb-4 flex items-center justify-center">
                {/* Stage with sparkles (custom simple SVG) */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <rect x="4" y="15" width="16" height="4" rx="2" fill="white" stroke="white" />
                  <circle cx="12" cy="11" r="3" stroke="white" strokeWidth="1.5" />
                  <path d="M8 8l.5-1M16 8l-.5-1M12 6V4M10 10l-1 .5M14 10l1 .5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              {/* Step Number */}
              <div className="flex items-center justify-center mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black font-bold text-lg">03</span>
              </div>
              <div className="font-bold text-xl text-white mb-2">Performance</div>
              <div className="text-gray-300 text-base">James delivers a flawless, memorable experience that exceeds expectations and achieves your Tampa event goals.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Contact Section */}
      <BottomContactSection />

      <CityFooter city="Tampa" />
    </main>
  );
} 