import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Close-Up Magic in Miami — Corporate Events & Private Parties',
  description: 'Experience intimate, interactive close-up magic in Miami. Perfect for corporate events, private parties, and special occasions. Book James Kenyon for your Miami event.'
};

export default function MiamiCloseUpPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/JamesKenyon_Magic_0092.jpg"
            alt="Close-up magic performance in Miami"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Close-Up Magic in Miami</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Intimate, interactive magic that creates unforgettable moments at your event
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Create Unforgettable Moments in Miami</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              Close-up magic is perfect for creating intimate, engaging experiences at your Miami event. Whether you're hosting a corporate gathering, private party, or special occasion, James brings his unique brand of sleight-of-hand magic directly to your guests.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              In Miami, James adapts his performance to match your event's atmosphere and goals. From cocktail hours to dinner parties, his interactive magic creates natural conversation starters and helps guests connect in a fun, memorable way.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions About Close-Up Magic in Miami</h2>
          <div className="space-y-8">
            <div className="p-8 rounded-lg bg-black/50">
              <h3 className="text-xl font-bold mb-4">What is close-up magic?</h3>
              <p className="text-gray-300 text-lg">Close-up magic is performed right in front of your guests, often using everyday objects like cards, coins, or borrowed items. It creates a personal and interactive experience where the magic happens literally in the palm of your hand, leaving guests amazed and engaged. As your Miami magician, I specialize in making these moments unforgettable.</p>
            </div>
            <div className="p-8 rounded-lg bg-black/50">
              <h3 className="text-xl font-bold mb-4">How long does a close-up magic performance last?</h3>
              <p className="text-gray-300 text-lg">I typically perform for 2–3 hours, moving seamlessly among your guests or tables. This ensures that everyone enjoys the magic while maintaining the natural flow of the event. For events with more than 300 guests, I may need additional time to ensure everyone has the opportunity to experience the magic.</p>
            </div>
            <div className="p-8 rounded-lg bg-black/50">
              <h3 className="text-xl font-bold mb-4">What kind of events is close-up magic suitable for?</h3>
              <p className="text-gray-300 text-lg">My close-up magic is perfect for cocktail hours, dinner parties, corporate networking events, and private celebrations in Miami. It enhances both formal and casual gatherings by sparking conversation and delighting guests.</p>
            </div>
            <div className="p-8 rounded-lg bg-black/50">
              <h3 className="text-xl font-bold mb-4">How many guests can you entertain?</h3>
              <p className="text-gray-300 text-lg">I can comfortably entertain groups ranging from 10 to 300 guests. For larger events (over 300), I may recommend extending my time at your event to ensure every guest experiences the magic firsthand. I move naturally between tables or clusters of people, making sure the magic reaches everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Miami Clients Say</h2>
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
      </section>

      {/* Booking Process */}
      <section className="py-20 px-4 bg-gray-900">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/JamesKenyon_Magic_0092.jpg"
            alt="Contact background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Book Your Miami Event</h2>
          <p className="text-lg text-gray-300 mb-8 text-center">
            Ready to add magic to your Miami event? Contact me to discuss your requirements and get a quote.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="event-type" className="block text-sm font-medium text-gray-300 mb-2">
                  Event Type
                </label>
                <select
                  id="event-type"
                  name="event-type"
                  className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select an event type</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="private">Private Party</option>
                  <option value="wedding">Wedding</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* City Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Miami Magic</h3>
              <p className="text-gray-400">
                Bringing world-class magic entertainment to Miami's most prestigious events.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#performances" className="text-gray-400 hover:text-white transition-colors">
                    Performances
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@jameskenyon.com</li>
                <li>Phone: (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} James Kenyon Magic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 