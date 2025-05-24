import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import Script from 'next/script';

export default function DallasMagicianPage() {
  return (
    <>
      <Script
        id="dallas-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "James Kenyon Magic",
            "description": "James Kenyon is a professional magician specializing in trade shows and corporate events in Dallas, Texas.",
            "url": "https://www.jameskenyonmagic.com/cities/dallas-magician",
            "telephone": "+1-737-235-4182",
            "email": "info@jameskenyonmagic.com",
            "openingHours": "Mo-Su 00:00-23:59",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dallas",
              "addressRegion": "TX",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "32.7767",
              "longitude": "-96.7970"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Dallas"
            },
            "sameAs": [
              "https://www.facebook.com/JamesKenyonMagic",
              "https://www.instagram.com/jameskenyonmagic"
            ]
          })
        }}
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-screen bg-black" style={{ 
          backgroundImage: "url('/images/edit.png')",
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Navigation */}
          <nav className="relative z-10 bg-black/30 backdrop-blur-sm shadow-md text-white py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <div className="text-xl font-semibold">
                James Kenyon | Corporate Illusionist
              </div>
              <div className="hidden md:flex space-x-6">
                <Link href="/about" className="hover:text-gray-300 transition">About</Link>
                <Link href="#performances" className="hover:text-gray-300 transition">Performances</Link>
                <Link href="#clients" className="hover:text-gray-300 transition">Clients</Link>
                <Link href="#testimonials" className="hover:text-gray-300 transition">Testimonials</Link>
                <Link href="#contact" className="hover:text-gray-300 transition">Contact</Link>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="relative z-10 h-[calc(100vh-4rem)] flex flex-col items-center justify-start text-white text-center px-4 pt-24">
            <div className="space-y-6 max-w-3xl">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                Elite Corporate Entertainment
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                Hire Magician in Dallas for Corporate Events & Parties
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md mt-12">
                James Kenyon brings high-energy magic to Dallas corporate events, trade shows, weddings, and private parties. As Dallas&apos;s most sought-after corporate magician, he creates unforgettable experiences that leave lasting impressions. Whether you&apos;re planning an event in downtown Dallas or the surrounding areas, James delivers world-class entertainment that elevates any occasion. Trust Dallas&apos;s premier magician to make your next event truly magical.
              </p>
              <div className="pt-8">
                <Link 
                  href="#contact"
                  className="inline-block bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border border-gray-700"
                >
                  Check Availability
                </Link>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 pt-8 text-gray-200">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">✨</span>
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🏢</span>
                  <span>Fortune 500 Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🌍</span>
                  <span>International Performer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="w-full bg-black py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="#contact" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg mb-8">Contact / Check Availability</Link>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Common questions about booking</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12">Find answers to frequently asked questions about James's performances and booking process.</p>
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-zinc-900 text-white rounded-xl p-6 border border-zinc-700 text-left">
                <div className="font-semibold text-lg mb-2">How far in advance should I book James?</div>
                <div>For corporate events, we recommend booking 3–6 months in advance to ensure availability, especially for peak seasons (October–December and April–June). However, we occasionally have last-minute availability, so don't hesitate to inquire about your specific date.</div>
              </div>
              {/* FAQ 2 */}
              <div className="bg-zinc-900 text-white rounded-xl p-6 border border-zinc-700 text-left">
                <div className="font-semibold text-lg mb-2">What are your fees?</div>
                <div>Performance fees vary based on the type of event, duration, location, and specific requirements. We provide customized quotes after understanding your event needs. Please contact us for a personalized quote for your event.</div>
              </div>
              {/* FAQ 3 */}
              <div className="bg-zinc-900 text-white rounded-xl p-6 border border-zinc-700 text-left">
                <div className="font-semibold text-lg mb-2">Do you require any special technical setup?</div>
                <div>James's performances are designed to be technically self-contained. For close-up magic, no special requirements are needed. For stage shows, basic lighting and sound (microphone) are typically all that's required. We'll provide a detailed technical rider after booking.</div>
              </div>
              {/* FAQ 4 */}
              <div className="bg-zinc-900 text-white rounded-xl p-6 border border-zinc-700 text-left">
                <div className="font-semibold text-lg mb-2">Can you customize the performance for our company or event theme?</div>
                <div>James specializes in creating customized magical moments that incorporate your company messaging, products, or event theme. During the consultation process, we'll discuss ways to personalize the experience for your specific audience.</div>
              </div>
              {/* FAQ 5 */}
              <div className="bg-zinc-900 text-white rounded-xl p-6 border border-zinc-700 text-left">
                <div className="font-semibold text-lg mb-2">Do you perform internationally?</div>
                <div>Yes, James performs at corporate events worldwide. International bookings typically require additional lead time for logistics and travel arrangements. Please inquire about specific international locations when contacting us.</div>
              </div>
              {/* FAQ 6 */}
              <div className="bg-zinc-900 text-white rounded-xl p-6 border border-zinc-700 text-left">
                <div className="font-semibold text-lg mb-2">What happens after I submit an inquiry?</div>
                <div>After submitting an inquiry, you'll receive a response within 24 hours. We'll schedule a consultation call to discuss your event needs, check availability, and provide a customized proposal. The booking is confirmed with a signed agreement and deposit.</div>
              </div>
            </div>
          </div>
        </section>

        <QuoteForm />

        {/* Rest of your existing sections */}
      </main>
    </>
  );
} 