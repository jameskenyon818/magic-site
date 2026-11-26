import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BottomContactSection from '@/app/components/BottomContactSection';
import FAQSection from '@/app/components/FAQSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import Navigation from '@/app/components/Navigation';
import CityFooter from '@/app/components/CityFooter';

export const metadata: Metadata = {
  title: 'Corporate Magician — Professional Entertainment for Business Events',
  description: "Corporate Magician | Corporate Events & Business Entertainment | Conferences, Galas, Product Launches & Client Entertainment",
  metadataBase: new URL('https://www.jameskenyonmagic.com'),
  alternates: {
    canonical: 'https://www.jameskenyonmagic.com/corporate-magician',
  },
};

export default function CorporateMagicianPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-screen bg-black md:h-[80vh] md:min-h-[600px] md:flex md:items-center md:justify-center">
        <Image
          src="/images/image about.jpg"
          alt="Corporate magician performance"
          fill
          className="object-cover md:object-contain"
          priority
          quality={100}
          style={{ objectPosition: 'center 30%' }}
        />
        {/* Dark overlay only on mobile */}
        <div className="absolute inset-0 bg-black/30 md:hidden" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Corporate Magician
          </h1>
        </div>
      </section>

      {/* Bullet Points Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Elevate Your Corporate Events with World-Class Entertainment
          </h2>
          <p className="text-lg text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            From annual conferences and holiday parties to product launches and client entertainment, professional corporate magic creates memorable experiences that strengthen relationships and reinforce your brand message.
          </p>
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-gray-200">Perfect for conferences, galas, product launches, and client entertainment events. Corporate magic creates natural networking opportunities, breaks the ice at formal gatherings, and leaves lasting impressions that strengthen business relationships.</p>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-gray-200">Each performance is customized to align with your company culture, event objectives, and brand messaging. Whether you need <Link href="/close-up" className="text-blue-400 hover:text-blue-300 underline">close-up magic</Link> for intimate networking events or <Link href="/stage-magic" className="text-blue-400 hover:text-blue-300 underline">stage shows</Link> for large conferences, the entertainment is tailored to your specific needs.</p>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-gray-200">From Fortune 500 companies to innovative startups, corporate magic entertainment enhances employee morale, impresses clients, and creates positive brand associations. The sophisticated, professional approach ensures your event stands out while maintaining the appropriate tone for business settings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Corporate Magic Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Close-Up Magic</h3>
              <p className="text-gray-300 mb-4">Perfect for cocktail hours, networking events, and intimate corporate gatherings. <Link href="/close-up" className="text-blue-400 hover:text-blue-300 underline">Learn more about close-up magic</Link>.</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Stage Shows</h3>
              <p className="text-gray-300 mb-4">Ideal for conferences, galas, and large corporate events. <Link href="/stage-magic" className="text-blue-400 hover:text-blue-300 underline">Explore stage magic options</Link>.</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Trade Show Magic</h3>
              <p className="text-gray-300 mb-4">Boost booth traffic and engagement at exhibitions. <Link href="/trade-show" className="text-blue-400 hover:text-blue-300 underline">Discover trade show magic</Link>.</p>
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
            controls={false}
            preload="auto"
            className="w-full h-full rounded-lg shadow-lg"
            style={{ 
              objectFit: 'cover',
              minHeight: '300px'
            }}
          >
            <source src="/videos/websitie - Made with Clipchamp.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Corporate Events FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions About Corporate Magic
          </h2>
          <div className="space-y-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">What types of corporate events do you perform at?</h3>
              <p className="text-gray-300 text-lg">I perform at a wide range of corporate events including annual conferences, holiday parties, product launches, client entertainment dinners, networking events, galas, employee appreciation events, and trade shows. The magic is adaptable to any business setting and can be customized to match your event's tone and objectives.</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">How do you customize performances for corporate events?</h3>
              <p className="text-gray-300 text-lg">I work closely with event planners to understand your company culture, brand messaging, and event goals. The performance can incorporate your company values, product features, or event themes. Whether it's subtle references in the magic or full brand integration, the entertainment aligns with your corporate identity.</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">What's the difference between close-up and stage magic for corporate events?</h3>
              <p className="text-gray-300 text-lg"><Link href="/close-up" className="text-blue-400 hover:text-blue-300 underline">Close-up magic</Link> is perfect for networking events, cocktail hours, and intimate gatherings where guests can interact directly with the magic. <Link href="/stage-magic" className="text-blue-400 hover:text-blue-300 underline">Stage shows</Link> work best for larger audiences at conferences, galas, or company-wide events where you want a central entertainment experience.</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">How far in advance should we book for corporate events?</h3>
              <p className="text-gray-300 text-lg">For corporate events, I recommend booking 3-6 months in advance, especially for peak seasons (October-December and April-June). However, I occasionally have last-minute availability, so don't hesitate to inquire about your specific date. Early booking ensures we have time to customize the performance to your event's needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Events Testimonials */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Our Corporate Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"James's performance at our annual conference was the highlight of the event. His ability to incorporate our company values into the magic while keeping it entertaining and professional was exactly what we needed."</p>
              <div>
                <p className="font-semibold text-xl">Patricia Williams</p>
                <p className="text-gray-400">VP of Marketing, TechGlobal</p>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"Our holiday party was transformed by James's close-up magic. He moved seamlessly through our event, creating moments of wonder that brought our team together and made the evening truly memorable."</p>
              <div>
                <p className="font-semibold text-xl">Robert Martinez</p>
                <p className="text-gray-400">HR Director, Financial Services Group</p>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"The product launch was a huge success, and James's stage show was a key part of that. He created excitement and engagement that perfectly complemented our brand message and left our clients impressed."</p>
              <div>
                <p className="font-semibold text-xl">Jennifer Chen</p>
                <p className="text-gray-400">Event Director, Innovation Labs</p>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"We've hired James for multiple client entertainment dinners, and he never disappoints. His sophisticated approach and ability to read the room make him perfect for high-stakes corporate events where first impressions matter."</p>
              <div>
                <p className="font-semibold text-xl">Michael Thompson</p>
                <p className="text-gray-400">Senior Partner, Consulting Firm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Cities Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Available in Major Cities Across the US
          </h2>
          <p className="text-center text-gray-300 mb-8">
            Looking for a <Link href="/cities/austin-magician" className="text-blue-400 hover:text-blue-300 underline">corporate magician in Austin</Link> or other major markets? I perform at corporate events nationwide.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link href="/cities/atlanta-magician" className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
              Atlanta
            </Link>
            <Link href="/cities/austin-magician" className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
              Austin
            </Link>
            <Link href="/cities/chicago-magician" className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
              Chicago
            </Link>
            <Link href="/cities/dallas-magician" className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
              Dallas
            </Link>
            <Link href="/cities/denver-magician" className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
              Denver
            </Link>
            <Link href="/cities/houston-magician" className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
              Houston
            </Link>
            <Link href="/cities/los-angeles-magician" className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
              Los Angeles
            </Link>
            <Link href="/cities/miami-magician" className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
              Miami
            </Link>
            <Link href="/cities/new-york-magician" className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
              New York
            </Link>
            <Link href="/cities/orlando-magician" className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
              Orlando
            </Link>
            <Link href="/cities/phoenix-magician" className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
              Phoenix
            </Link>
            <Link href="/cities/san-antonio-magician" className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
              San Antonio
            </Link>
            <Link href="/cities/san-diego-magician" className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
              San Diego
            </Link>
            <Link href="/cities/tampa-magician" className="text-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
              Tampa
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Contact Section with Full Image Background */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/JamesKenyon_Magic_0092.jpg"
            alt="Corporate magician performance"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <BottomContactSection />
          </div>
        </div>
      </section>
      <CityFooter city="corporate-magician" />
    </main>
  );
}

