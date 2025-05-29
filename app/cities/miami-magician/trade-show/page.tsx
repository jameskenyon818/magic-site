import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BottomContactSection from '@/app/components/BottomContactSection';

export const metadata: Metadata = {
  title: 'Hire a Trade Show Magician in Miami — Perfect for Exhibitions & Conferences',
  description: 'Looking for a trade show magician in Miami? James Kenyon delivers engaging performances that attract crowds and boost engagement at your exhibition or conference. Book now for a memorable trade show experience.'
};

export default function MiamiTradeShowPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section - fully visible image, no overlay */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/IMG_5401.JPG"
          alt="Trade show magic performance in Miami"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Trade Show Magic in Miami
          </h1>
        </div>
      </section>

      {/* Bullet Points Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Make Your Miami Trade Show Stand Out
          </h2>
          <ul className="list-disc text-lg text-gray-200 space-y-6 pl-6">
            <li>Attracts large crowds to your booth with interactive, customized magic</li>
            <li>Highlights your products or services in a memorable, engaging way</li>
            <li>Creates natural opportunities for your team to connect with potential clients</li>
            <li>Boosts booth engagement and lead generation at trade shows and conferences</li>
            <li>Professional, seamless experience from setup to performance</li>
          </ul>
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

      {/* Bottom Contact Section */}
      <BottomContactSection />
    </main>
  );
} 