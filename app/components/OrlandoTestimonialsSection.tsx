import React from 'react';
import Image from 'next/image';

const OrlandoTestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="w-full bg-black py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          What Orlando Clients Say
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-gray-300 text-base mb-6">"James made our Orlando corporate event at the Orange County Convention Center absolutely magical. Our international attendees were amazed!"</p>
            <div className="mt-auto">
              <div className="font-bold text-white">Jennifer Rodriguez</div>
              <div className="text-gray-400 text-sm">Event Manager, Orlando Tourism Board</div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-gray-300 text-base mb-6">"Perfect entertainment for our Disney resort corporate retreat. James created an unforgettable experience for our team."</p>
            <div className="mt-auto">
              <div className="font-bold text-white">David Park</div>
              <div className="text-gray-400 text-sm">HR Director, Orlando Tech Company</div>
            </div>
          </div>
        </div>

        {/* Trusted by Industry Leaders Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Trusted by industry leaders</h3>
          <p className="text-gray-300 mb-8">James has performed for some of the world's most recognizable brands and at exclusive corporate events.</p>
          {/* Past Clients Logo Grid */}
          <div className="bg-black p-4 sm:p-6 rounded-xl max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-0 items-center justify-center">
              <Image src="/logos/hermes-1.svg" alt="Hermes Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
              <Image src="/logos/nike-11.svg" alt="Nike Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
              <Image src="/logos/nissan-6.svg" alt="Nissan Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
              <Image src="/logos/p-g-2.svg" alt="P&G Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
              <Image src="/logos/virgin-1.svg" alt="Virgin Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
              <Image src="/logos/hbo-max-logo-1.svg" alt="HBO Max Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
              <Image src="/logos/fox-news-channel-logo-1.svg" alt="Fox News Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
              <Image src="/logos/fedex-express-6.svg" alt="FedEx Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
              <Image src="/logos/chase.svg" alt="Chase Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
              <Image src="/logos/american-express-1.svg" alt="American Express Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrlandoTestimonialsSection;