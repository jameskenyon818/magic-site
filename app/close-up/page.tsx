import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BottomContactSection from '@/app/components/BottomContactSection';
import FAQSection from '@/app/components/FAQSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Close-Up Magic — Perfect for Corporate Events & Private Parties',
  description: 'Looking for a close-up magician? James Kenyon delivers intimate, interactive performances that create unforgettable moments at your corporate event or private party. Available in multiple cities across the US.'
};

export default function CloseUpMagicPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <Image
          src="/images/image about.jpg"
          alt="Close-up magic performance"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Close-Up Magic
          </h1>
        </div>
      </section>

      {/* Bullet Points Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Create Unforgettable Moments
          </h2>
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-gray-200">Experience magic up close and personal, where every trick happens right in front of your eyes. Perfect for cocktail hours, dinner parties, and corporate networking events, creating natural conversation starters and memorable interactions.</p>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-gray-200">Each performance is tailored to your event's atmosphere and audience, whether it's sophisticated corporate entertainment or engaging party magic. The intimate nature of close-up magic creates a unique connection with your guests.</p>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-gray-200">From elegant card tricks to mind-bending mentalism, each effect is carefully selected to amaze and entertain. The performance flows naturally through your event, creating a sophisticated atmosphere that enhances the overall experience.</p>
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

      {/* Close-Up Magic Specific FAQ Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/edit6.png"
            alt="Close-up magic background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Frequently Asked Questions About Close-Up Magic
          </h2>
          <div className="space-y-8">
            <div className="bg-black/80 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">What is close-up magic?</h3>
              <p className="text-gray-300 text-lg">Close-up magic is performed right in front of your guests, often using everyday objects like cards, coins, or borrowed items. It creates a personal and interactive experience where the magic happens literally in the palm of your hand, leaving guests amazed and engaged. As your magician, I specialize in making these moments unforgettable.</p>
            </div>
            <div className="bg-black/80 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">How long does a close-up magic performance last?</h3>
              <p className="text-gray-300 text-lg">I typically perform for 2–3 hours, moving seamlessly among your guests or tables. This ensures that everyone enjoys the magic while maintaining the natural flow of the event. For events with more than 300 guests, I may need additional time to ensure everyone has the opportunity to experience the magic.</p>
            </div>
            <div className="bg-black/80 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">What kind of events is close-up magic suitable for?</h3>
              <p className="text-gray-300 text-lg">My close-up magic is perfect for cocktail hours, dinner parties, corporate networking events, and private celebrations. It enhances both formal and casual gatherings by sparking conversation and delighting guests.</p>
            </div>
            <div className="bg-black/80 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">How many guests can you entertain?</h3>
              <p className="text-gray-300 text-lg">I can comfortably entertain groups ranging from 10 to 300 guests. For larger events (over 300), I may recommend extending my time at your event to ensure every guest experiences the magic firsthand. I move naturally between tables or clusters of people, making sure the magic reaches everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Close-Up Magic Specific Testimonials */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"James's close-up magic was the highlight of our corporate dinner. He moved seamlessly between tables, creating intimate moments of wonder that brought our team together in a unique way."</p>
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
              <p className="text-gray-300 mb-6 text-lg">"Our holiday party was transformed by James's performance. The intimate nature of close-up magic made everyone feel special, and the reactions were priceless. It was exactly what we needed to make our event memorable."</p>
              <div>
                <p className="font-semibold text-xl">Sarah Thompson</p>
                <p className="text-gray-400">Marketing Manager, Creative Solutions</p>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"James's ability to read the room and adapt his performance to different groups was impressive. He created a sophisticated atmosphere that perfectly complemented our corporate event."</p>
              <div>
                <p className="font-semibold text-xl">Michael Anderson</p>
                <p className="text-gray-400">CEO, Innovation Partners</p>
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
            alt="Close-up magic performance"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg">
              <BottomContactSection />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 