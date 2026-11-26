import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BottomContactSection from '@/app/components/BottomContactSection';
import FAQSection from '@/app/components/FAQSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import Navigation from '@/app/components/Navigation';
import CityFooter from '@/app/components/CityFooter';

export const metadata: Metadata = {
  title: 'Stage Magic Shows — Perfect for Corporate Events & Private Parties',
  description: "Stage Magician | Corporate Events & Private Parties | Captivating Stage Performances",
  metadataBase: new URL('https://www.jameskenyonmagic.com'),
  alternates: {
    canonical: 'https://www.jameskenyonmagic.com/stage-magic',
  },
};

export default function StageShowPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-screen bg-black md:h-[80vh] md:min-h-[600px] md:flex md:items-center md:justify-center">
        <Image
          src="/images/image about.jpg"
          alt="Stage magic performance"
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
            Stage Magic
          </h1>
        </div>
      </section>

      {/* Bullet Points Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Create an Unforgettable Stage Experience
          </h2>
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-gray-200">Experience a captivating stage show that combines grand illusions, comedy, and audience participation. Perfect for corporate events, private parties, and special occasions where you want to create a memorable centerpiece.</p>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-gray-200">Each performance is tailored to your event's atmosphere and audience, whether it's a formal corporate gathering or a casual celebration. The show includes a perfect blend of magic, humor, and audience interaction.</p>
            </div>
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-gray-200">From mind-reading to grand illusions, each effect is carefully selected to amaze and entertain. The performance flows naturally through your event, creating a sophisticated atmosphere that enhances the overall experience.</p>
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

      {/* Stage Magic Specific FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions About Stage Magic
          </h2>
          <div className="space-y-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">What is stage magic?</h3>
              <p className="text-gray-300 text-lg">Stage magic is a form of entertainment that combines grand illusions, comedy, and audience participation in a theatrical setting. It's perfect for larger audiences and creates a memorable centerpiece for your event.</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">How long is a stage show?</h3>
              <p className="text-gray-300 text-lg">A typical stage show lasts 30-45 minutes, but can be customized to fit your event's schedule. The performance includes a mix of grand illusions, mind-reading, and audience participation.</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">What kind of events is stage magic suitable for?</h3>
              <p className="text-gray-300 text-lg">Stage magic is perfect for corporate events, private parties, and special occasions where you want to create a memorable centerpiece. It works well for both formal and casual gatherings.</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">How many people can attend a stage show?</h3>
              <p className="text-gray-300 text-lg">Stage shows can accommodate audiences of 50 to 500 people, depending on the venue and setup. The performance is designed to be visible and engaging for everyone in the audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stage Magic Specific Testimonials */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"James's stage show was the highlight of our corporate event. The combination of grand illusions and audience participation created an unforgettable experience for our team."</p>
              <div>
                <p className="font-semibold text-xl">John Smith</p>
                <p className="text-gray-400">CEO, TechCorp</p>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"The way James engaged with our audience was remarkable. His stage show created the perfect atmosphere for our company celebration, making it a night to remember."</p>
              <div>
                <p className="font-semibold text-xl">Emily Johnson</p>
                <p className="text-gray-400">Event Director, Global Finance</p>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"Our holiday party was transformed by James's performance. The grand illusions and audience participation made everyone feel special, and the reactions were priceless."</p>
              <div>
                <p className="font-semibold text-xl">Michael Brown</p>
                <p className="text-gray-400">Marketing Manager, Creative Solutions</p>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-6 text-lg">"James's ability to read the room and adapt his performance to different groups was impressive. He created a sophisticated atmosphere that perfectly complemented our corporate event."</p>
              <div>
                <p className="font-semibold text-xl">Sarah Wilson</p>
                <p className="text-gray-400">HR Director, Innovation Partners</p>
              </div>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link href="/cities/atlanta-magician/stage-magic" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Atlanta
            </Link>
            <Link href="/cities/austin-magician/stage-magic" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Austin
            </Link>
            <Link href="/cities/chicago-magician/stage-magic" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Chicago
            </Link>
            <Link href="/cities/dallas-magician/stage-magic" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Dallas
            </Link>
            <Link href="/cities/denver-magician/stage-magic" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Denver
            </Link>
            <Link href="/cities/houston-magician/stage-magic" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Houston
            </Link>
            <Link href="/cities/los-angeles-magician/stage-magic" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Los Angeles
            </Link>
            <Link href="/cities/miami-magician/stage-magic" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Miami
            </Link>
            <Link href="/cities/new-york-magician/stage-magic" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              New York
            </Link>
            <Link href="/cities/orlando-magician/stage-magic" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Orlando
            </Link>
            <Link href="/cities/phoenix-magician/stage-magic" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Phoenix
            </Link>
            <Link href="/cities/san-antonio-magician/stage-magic" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              San Antonio
            </Link>
            <Link href="/cities/san-diego-magician/stage-magic" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              San Diego
            </Link>
            <Link href="/cities/tampa-magician/stage-magic" className="text-center p-4 bg-black rounded-lg hover:bg-gray-800 transition">
              Tampa
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Contact Section with Full Image Background */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/JamesKenyon_Mag-ic_0092.jpg"
            alt="Stage magic performance"
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
      <CityFooter city="stage-show" />
    </main>
  );
} 