import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import CityFooter from '@/app/components/CityFooter';
import ClientQuoteForm from '@/app/components/ClientQuoteForm';

export const metadata: Metadata = {
  title: 'Trade Show Magician in Austin — Stop Traffic, Drive Leads',
  description: 'Looking for a trade show magician in Austin? James Kenyon creates engaging booth experiences that attract crowds and generate leads at your next trade show or conference.',
};

export default function AustinTradeShowPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        {/* Three Images Grid Section - Moved to top */}
        <section className="pt-16 pb-8 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-square">
                <Image
                  src="/images/IMG_5399.JPG"
                  alt="Trade show magic performance"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/images/IMG_5401.JPG"
                  alt="Trade show magic performance"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trade Show Specific Q&A Section */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Why Choose James for Your Austin Trade Show
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Why hire James for your trade show?</h3>
                <p className="text-gray-300">James stops traffic at your booth using unforgettable magic tied to your message — no gimmicks, just results.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">How does James attract qualified leads?</h3>
                <p className="text-gray-300">By weaving your company's product pitch into the magic, he entertains and educates at the same time.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Is this professional enough for big brands?</h3>
                <p className="text-gray-300">James has performed for FedEx, American Express, and HBO. He's polished, on-brand, and reliable.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">Does it work for any size booth?</h3>
                <p className="text-gray-300">Whether you're in a 10x10 or an island exhibit, James adapts his set to fit the space — and still draw attention.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">What if attendees just walk past?</h3>
                <p className="text-gray-300">They won't. James is trained to interrupt politely with visual magic that hooks them in seconds.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-white">How is he different from other entertainers?</h3>
                <p className="text-gray-300">He's not just a magician — he's a marketer in disguise. Every trick has a message. Every moment has a purpose.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Single Image Section */}
        <section className="py-8 bg-black">
          <div className="max-w-5xl mx-auto px-4">
            <div className="relative aspect-video">
              <Image
                src="/images/IMG_5403.JPG"
                alt="Trade show magic performance"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* Trade Show Specific Testimonials */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Trade Show Success Stories in Austin
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "James helped us triple our booth traffic in Austin. He worked our product message into the magic and made us the talk of the show."
                </p>
                <p className="font-semibold text-white">— Sarah Chen, Marketing Director</p>
                <p className="text-gray-400">TechCrunch Disrupt</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "We've hired magicians before, but none understood why we were there. James delivered both entertainment and ROI."
                </p>
                <p className="font-semibold text-white">— Michael Rodriguez, VP of Sales</p>
                <p className="text-gray-400">Salesforce</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "Our team loved him. Our clients remembered us. And yes — we already booked him for next year's Austin convention."
                </p>
                <p className="font-semibold text-white">— Jennifer Park, Event Director</p>
                <p className="text-gray-400">SXSW Interactive</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section - Moved to middle */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Transform Your Austin Trade Show Booth
              </h2>
              <p className="text-lg mb-6 text-gray-300 max-w-3xl mx-auto">
                In Austin's competitive trade show scene, you need something extraordinary to stand out. 
                James Kenyon's trade show magic creates a magnetic attraction that draws qualified leads 
                to your booth while subtly communicating your key messages.
              </p>
              <p className="text-lg mb-6 text-gray-300 max-w-3xl mx-auto">
                Whether you're at the Austin Convention Center or any local venue, James adapts his 
                performance to your space, your brand, and your goals.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-zinc-900 p-4 rounded-lg">
                <h3 className="font-bold text-white mb-2">30-50%</h3>
                <p className="text-gray-300">Increase in booth traffic</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg">
                <h3 className="font-bold text-white mb-2">5-7 min</h3>
                <p className="text-gray-300">Engagement per visitor</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg">
                <h3 className="font-bold text-white mb-2">85%</h3>
                <p className="text-gray-300">Lead quality improvement</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg">
                <h3 className="font-bold text-white mb-2">3x</h3>
                <p className="text-gray-300">Return on investment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-8 bg-black">
          <div className="max-w-5xl mx-auto px-4">
            <div className="aspect-video relative rounded-2xl overflow-hidden">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/websitie - Made with Clipchamp.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </section>

        {/* Contact Form with Background Image */}
        <section className="relative py-16">
          <div className="absolute inset-0">
            <Image
              src="/images/trade-show-performance.jpg"
              alt="Trade show magic background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <ClientQuoteForm city="Austin" />
          </div>
        </section>

        <CityFooter city="Austin" />
      </main>
    </>
  );
} 