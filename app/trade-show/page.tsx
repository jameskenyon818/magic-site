import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BottomContactSection from '@/app/components/BottomContactSection';
import FAQSection from '@/app/components/FAQSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import Navigation from '@/app/components/Navigation';
import CityFooter from '@/app/components/CityFooter';

export const metadata: Metadata = {
  title: 'Trade Show Magic — Boost Engagement at Your Exhibition',
  description: "Trade Show Magician | Corporate Events & Exhibitions | Crowd-Drawing Entertainment",
  metadataBase: new URL('https://www.jameskenyonmagic.com'),
  alternates: {
    canonical: 'https://www.jameskenyonmagic.com/trade-show',
  },
};

export default function TradeShowPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-screen bg-black md:h-[80vh] md:min-h-[600px] md:flex md:items-center md:justify-center">
        <Image
          src="/images/image about.jpg"
          alt="Trade show magic performance"
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
            Trade Show Magic
          </h1>
        </div>
      </section>

      {/* Bullet Points Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Make Your Trade Show Booth Unforgettable
          </h2>
          <p className="text-lg text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Looking for a <Link href="/cities/austin-magician" className="text-blue-400 hover:text-blue-300 underline">corporate magician in Austin</Link> for your trade show? 
            <Link href="/corporate-magician" className="text-blue-400 hover:text-blue-300 underline"> Learn more about our corporate entertainment services</Link>.
          </p>
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-gray-200">Draw crowds to your booth with engaging magic performances that create natural gathering points. Perfect for breaking the ice and starting conversations with potential clients in a memorable way.</p>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-gray-200">Each performance is tailored to your brand and products, seamlessly incorporating your key messages into the magic. This creates a unique way to showcase your offerings while entertaining visitors.</p>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-gray-200">From card tricks to mind-reading, each effect is carefully selected to amaze and entertain while maintaining a professional atmosphere. The performance flows naturally through your booth, creating a dynamic environment that keeps visitors engaged.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Cities Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Available in Major Cities Across the US
          </h2>
          <p className="text-center text-gray-300 mb-8">
            <Link href="/" className="text-blue-400 hover:text-blue-300 underline">Back to homepage</Link>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link href="/cities/atlanta-magician/trade-show" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Atlanta
            </Link>
            <Link href="/cities/austin-magician/trade-show" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Austin
            </Link>
            <Link href="/cities/chicago-magician/trade-show" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Chicago
            </Link>
            <Link href="/cities/dallas-magician/trade-show" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Dallas
            </Link>
            <Link href="/cities/denver-magician/trade-show" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Denver
            </Link>
            <Link href="/cities/houston-magician/trade-show" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Houston
            </Link>
            <Link href="/cities/los-angeles-magician/trade-show" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Los Angeles
            </Link>
            <Link href="/cities/miami-magician/trade-show" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Miami
            </Link>
            <Link href="/cities/new-york-magician/trade-show" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              New York
            </Link>
            <Link href="/cities/orlando-magician/trade-show" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Orlando
            </Link>
            <Link href="/cities/phoenix-magician/trade-show" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Phoenix
            </Link>
            <Link href="/cities/san-antonio-magician/trade-show" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              San Antonio
            </Link>
            <Link href="/cities/san-diego-magician/trade-show" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              San Diego
            </Link>
            <Link href="/cities/tampa-magician/trade-show" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Tampa
            </Link>
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

      {/* Trade Show Specific FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions About Trade Show Magic
          </h2>
          <div className="space-y-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">How does trade show magic work?</h3>
              <p className="text-gray-300 text-lg">I perform close-up magic at your booth, drawing crowds and creating natural gathering points. The magic serves as an icebreaker, making it easy to start conversations with potential clients while showcasing your products or services.</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">How long do you perform at trade shows?</h3>
              <p className="text-gray-300 text-lg">I typically perform in 2-3 hour blocks throughout the day, with breaks in between to allow for booth staff to engage with visitors. This schedule can be customized based on your show hours and specific needs.</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Can you incorporate our products into the magic?</h3>
              <p className="text-gray-300 text-lg">Absolutely! I can customize the performance to highlight your products or services, creating memorable demonstrations that showcase your offerings in a unique and engaging way.</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">What kind of trade shows do you perform at?</h3>
              <p className="text-gray-300 text-lg">I've performed at a wide range of trade shows, from technology and healthcare to automotive and retail. The magic is adaptable to any industry and can be tailored to match your specific audience and goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Show Specific Testimonials */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"James's performance at our tech trade show was incredible. He drew more traffic to our booth than any other attraction, and the way he incorporated our product features into his magic was brilliant."</p>
              <div>
                <p className="font-semibold text-xl">David Wilson</p>
                <p className="text-gray-400">Marketing Director, TechInnovate</p>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"The engagement at our booth increased significantly with James's magic. He created the perfect atmosphere for our sales team to connect with potential clients in a natural, memorable way."</p>
              <div>
                <p className="font-semibold text-xl">Lisa Rodriguez</p>
                <p className="text-gray-400">Event Manager, Global Solutions</p>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"Our trade show ROI improved dramatically after adding James's magic to our booth. The crowds he drew and the conversations he started led to more qualified leads than we've ever had before."</p>
              <div>
                <p className="font-semibold text-xl">Michael Chang</p>
                <p className="text-gray-400">Sales Director, Innovation Corp</p>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"James's ability to adapt his performance to our industry and products was impressive. He created a unique experience that made our booth stand out from the competition."</p>
              <div>
                <p className="font-semibold text-xl">Sarah Johnson</p>
                <p className="text-gray-400">Trade Show Coordinator, HealthTech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Contact Section with Full Image Background */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/JamesKenyon_Mag-ic_0092.jpg"
            alt="Trade show magic performance"
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
      <CityFooter city="trade-show" />
    </main>
  );
} 