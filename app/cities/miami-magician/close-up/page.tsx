import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '../../../components/HeroSection';
import BookingExperienceSection from '../../../components/BookingExperienceSection';
import BottomContactSection from '../../../components/BottomContactSection';
import CityFooter from '../../../components/CityFooter';

export const metadata: Metadata = {
  title: 'Close-up magic performance in Miami',
  description: 'Experience intimate, interactive close-up magic in Miami. Perfect for corporate events, private parties, and special occasions.'
};

export default function MiamiCloseUpPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection
        title="Close-Up Magic in Miami"
        subtitle="Intimate, interactive magic that creates unforgettable moments at your event"
        backgroundImage="/images/JamesKenyon_Magic_0092.jpg"
        ctaText="Book Now"
        ctaLink="#contact"
      />

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Create Unforgettable Moments in Miami</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              Experience magic up close and personal in Miami, where every trick happens right in front of your eyes. Perfect for cocktail hours, dinner parties, and corporate networking events in Miami, creating natural conversation starters and memorable interactions.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Each performance in Miami is tailored to your event's atmosphere and audience, whether it's sophisticated corporate entertainment or engaging party magic. The intimate nature of close-up magic creates a unique connection with your guests.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              From elegant card tricks to mind-bending mentalism, each effect is carefully selected to amaze and entertain your Miami audience. The performance flows naturally through your event, creating a sophisticated atmosphere that enhances the overall experience.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions About Close-Up Magic in Miami</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What is close-up magic?</h3>
              <p className="text-gray-300">
                Close-up magic is performed right in front of your guests, often using everyday objects like cards, coins, or borrowed items. It creates a personal and interactive experience where the magic happens literally in the palm of your hand, leaving guests amazed and engaged. As your Miami magician, I specialize in making these moments unforgettable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">How long does a close-up magic performance last?</h3>
              <p className="text-gray-300">
                I typically perform for 2–3 hours, moving seamlessly among your guests or tables. This ensures that everyone enjoys the magic while maintaining the natural flow of the event. For events with more than 300 guests, I may need additional time to ensure everyone has the opportunity to experience the magic.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">What kind of events is close-up magic suitable for?</h3>
              <p className="text-gray-300">
                My close-up magic is perfect for cocktail hours, dinner parties, corporate networking events, and private celebrations in Miami. It enhances both formal and casual gatherings by sparking conversation and delighting guests.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">How many guests can you entertain?</h3>
              <p className="text-gray-300">
                I can comfortably entertain groups ranging from 10 to 300 guests. For larger events (over 300), I may recommend extending my time at your event to ensure every guest experiences the magic firsthand. I move naturally between tables or clusters of people, making sure the magic reaches everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Miami Clients Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                "James's close-up magic was the highlight of our corporate dinner in Miami. He moved seamlessly between tables, creating intimate moments of wonder that brought our team together in a unique way."
              </p>
              <p className="font-semibold">Jennifer Martinez</p>
              <p className="text-gray-400">HR Director, TechCorp</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                "The way James engaged with our guests was remarkable. His close-up magic created the perfect atmosphere for our networking event in Miami, making it easy for people to connect and share their amazement."
              </p>
              <p className="font-semibold">Robert Chen</p>
              <p className="text-gray-400">Event Coordinator, Global Finance</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                "Our holiday party in Miami was transformed by James's performance. The intimate nature of close-up magic made everyone feel special, and the reactions were priceless. It was exactly what we needed to make our event memorable."
              </p>
              <p className="font-semibold">Sarah Thompson</p>
              <p className="text-gray-400">Marketing Manager, Creative Solutions</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                "James's ability to read the room and adapt his performance to different groups was impressive. He created a sophisticated atmosphere that perfectly complemented our corporate event in Miami."
              </p>
              <p className="font-semibold">Michael Anderson</p>
              <p className="text-gray-400">CEO, Innovation Partners</p>
            </div>
          </div>
        </div>
      </section>

      <BookingExperienceSection />
      <BottomContactSection />
      <CityFooter city="Miami" />
    </main>
  );
} 