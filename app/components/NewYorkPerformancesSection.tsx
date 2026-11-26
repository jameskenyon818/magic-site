import React from 'react';
import Link from 'next/link';

const NewYorkPerformancesSection: React.FC = () => {
  return (
    <section id="performances" className="w-full bg-black py-8 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-3 sm:mb-4">
          New York Magic Performances
        </h2>
        <p className="text-sm sm:text-lg md:text-xl text-gray-400 text-center mb-6 sm:mb-12 max-w-3xl mx-auto">
          From Manhattan corporate events to Brooklyn private parties, James delivers world-class entertainment tailored to your New York event needs.
        </p>
        
        {/* Images Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-0 relative">
          {/* Close-Up Magic Image */}
          <div className="flex flex-col relative h-full border-2 border-gray-700 rounded-2xl bg-black/80">
            <img src="/images/edit5.png" alt="Close-Up Magic" className="w-full aspect-square object-cover" />
            <div className="flex-1 flex flex-col items-center p-4 sm:p-8 text-center h-full">
              <div className="flex-1 flex flex-col justify-start">
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 mt-4">Close-Up Magic</h3>
                <p className="text-sm sm:text-lg text-gray-200 mb-4">Interactive magic performed up-close at tables during dinners, receptions, or networking events. Perfect for Manhattan cocktail parties and corporate mixers at NYC venues, creating conversation and breaking the ice.</p>
                <ul className="text-sm sm:text-base text-gray-300 mb-6 space-y-2 text-left">
                  <li>• Table-to-table entertainment</li>
                  <li>• 2-3 hours of continuous performance</li>
                  <li>• Customized to your brand message</li>
                  <li>• Works with any group size</li>
                </ul>
              </div>
              <Link href="/cities/new-york-magician/close-up" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-base sm:text-lg">Learn More</Link>
            </div>
            {/* Divider overlay right edge */}
            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-white/20 z-10" />
          </div>

          {/* Stage Show Image */}
          <div className="flex flex-col relative h-full border-2 border-gray-700 rounded-2xl bg-black/80">
            <img src="/images/thumbtack 2.jpg" alt="Stage Show" className="w-full aspect-square object-cover" />
            <div className="flex-1 flex flex-col items-center p-8 text-center h-full">
              <div className="flex-1 flex flex-col justify-start">
                <h3 className="text-2xl font-bold text-white mb-2 mt-4">Stage Show</h3>
                <p className="text-gray-200 mb-4 text-lg">A sophisticated 30–45 minute performance combining mind-reading, illusions, and audience participation. James has performed at the Javits Center, Madison Square Garden, and venues throughout the Big Apple.</p>
                <ul className="text-gray-300 mb-6 space-y-2 text-left">
                  <li>• Mind-reading demonstrations</li>
                  <li>• Interactive audience participation</li>
                  <li>• Professional sound and lighting</li>
                  <li>• Customizable content and messaging</li>
                </ul>
              </div>
              <Link href="/cities/new-york-magician/stage-magic" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg">Learn More</Link>
            </div>
            {/* Divider overlay right edge */}
            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-white/20 z-10" />
          </div>

          {/* Trade Show Magic Image */}
          <div className="flex flex-col relative h-full border-2 border-gray-700 rounded-2xl bg-black/80">
            <img src="/images/IMG_5401.JPG" alt="Trade Show Magic" className="w-full aspect-square object-cover" />
            <div className="flex-1 flex flex-col items-center p-8 text-center h-full">
              <div className="flex-1 flex flex-col justify-start">
                <h3 className="text-2xl font-bold text-white mb-2 mt-4">Trade Show Magic</h3>
                <p className="text-gray-200 mb-4 text-lg">Drive traffic to your booth and communicate key messages through customized magical presentations. Perfect for New York Comic Con, Fashion Week, and financial industry events throughout NYC.</p>
                <ul className="text-gray-300 mb-6 space-y-2 text-left">
                  <li>• Booth traffic generation</li>
                  <li>• Product demonstration support</li>
                  <li>• Lead qualification assistance</li>
                  <li>• Brand message integration</li>
                </ul>
              </div>
              <Link href="/cities/new-york-magician/trade-show" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewYorkPerformancesSection;

