import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BottomContactSection from '@/app/components/BottomContactSection';
import FAQSection from '@/app/components/FAQSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Trade Show Magic — Boost Your Booth Traffic & Engagement',
  description: 'Looking for a trade show magician? James Kenyon delivers engaging performances that draw crowds, create memorable interactions, and help you stand out at your next trade show. Available in multiple cities across the US.'
};

export default function TradeShowPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <Image
          src="/images/image about.jpg"
          alt="Trade show magic performance"
          fill
          className="object-contain"
          priority
        />
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
    </main>
  );
} 