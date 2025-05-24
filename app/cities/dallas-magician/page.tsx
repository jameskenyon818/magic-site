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
                Hire a Corporate Magician in Dallas for Events & Trade Shows
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

        <QuoteForm />

        {/* Rest of your existing sections */}
      </main>
    </>
  );
} 