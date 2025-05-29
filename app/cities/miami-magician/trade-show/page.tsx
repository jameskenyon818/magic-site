import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BottomContactSection from '@/app/components/BottomContactSection';
import FAQSection from '@/app/components/FAQSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Hire a Trade Show Magician in Miami — Perfect for Exhibitions & Conferences',
  description: 'Looking for a trade show magician in Miami? James Kenyon delivers engaging performances that attract crowds and boost engagement at your exhibition or conference. Book now for a memorable trade show experience.'
};

export default function MiamiTradeShowPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section - fully visible image, no overlay */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <Image
          src="/images/IMG_5401.JPG"
          alt="Trade show magic performance in Miami"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Trade Show Magic in Miami
          </h1>
        </div>
      </section>

      {/* Bullet Points Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Make Your Miami Trade Show Stand Out
          </h2>
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-gray-200">Captivate large crowds at your booth with interactive, customized magic tailored to your brand and audience. Each performance is designed to creatively highlight your products or services in a way that's not only memorable but genuinely engaging.</p>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-gray-200">By drawing consistent attention to your space, the magic naturally creates openings for your sales team to connect with attendees, start conversations, and build relationships. This results in significantly higher booth engagement and stronger lead generation throughout the event.</p>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-gray-200">From setup to performance, everything is handled with professionalism and precision, ensuring a seamless experience that enhances your brand's presence and leaves a lasting impression on potential clients.</p>
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

      {/* Trade Show Specific FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions About Trade Show Magic
          </h2>
          <div className="space-y-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">How does trade show magic work?</h3>
              <p className="text-gray-300 text-lg">I perform interactive magic that naturally incorporates your products or services, creating engaging demonstrations that attract visitors to your booth while highlighting your key messages.</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">What's the typical duration for trade show performances?</h3>
              <p className="text-gray-300 text-lg">I can perform in shifts throughout the day, typically 2-3 hours at a time, with breaks in between to maintain energy and engagement levels.</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">How do you customize the magic for our specific industry?</h3>
              <p className="text-gray-300 text-lg">I'll work with your team before the event to understand your products, services, and key messages, then create custom routines that naturally incorporate these elements into the performance.</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">What kind of space do you need in the booth?</h3>
              <p className="text-gray-300 text-lg">I can work in any booth size, from intimate 10x10 spaces to larger exhibition areas. I'll adapt my performance style to fit your available space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Show Specific Testimonials */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Trade Show Organizers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"James transformed our booth traffic. We saw a 40% increase in visitor engagement and generated more leads than any previous show. His ability to engage with our target audience was remarkable."</p>
              <div>
                <p className="font-semibold text-xl">Sarah Johnson</p>
                <p className="text-gray-400">Director of Marketing, TechExpo International</p>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"His ability to incorporate our product features into his magic was incredible. Visitors stayed longer and remembered our key messages. It was the perfect blend of entertainment and marketing."</p>
              <div>
                <p className="font-semibold text-xl">Michael Rodriguez</p>
                <p className="text-gray-400">Product Marketing Manager, Salesforce</p>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"The perfect blend of entertainment and marketing. James created natural opportunities for our sales team to engage with prospects. Our booth was consistently the most visited at the conference."</p>
              <div>
                <p className="font-semibold text-xl">Emily Chen</p>
                <p className="text-gray-400">Trade Show Coordinator, Oracle</p>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"Professional, punctual, and perfectly tailored to our brand. Our booth was the talk of the show. James's ability to adapt his performance to our specific industry needs was impressive."</p>
              <div>
                <p className="font-semibold text-xl">David Thompson</p>
                <p className="text-gray-400">Exhibition Manager, AWS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Contact Section with Full Image Background */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_5400.JPG"
            alt="Trade show magic performance"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="relative z-20 min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <div className="backdrop-blur-sm">
              <BottomContactSection />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 