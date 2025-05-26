'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function PerformancesSection() {
  return (
    <section id="performances" className="w-full bg-black py-8 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-3 sm:mb-4">
          Tailored magical experiences for every corporate occasion
        </h2>
        <p className="text-sm sm:text-lg md:text-xl text-gray-400 text-center mb-6 sm:mb-12 max-w-3xl mx-auto">
          From intimate executive dinners to large-scale conferences, James offers customized performances to suit your specific event needs.
        </p>
        {/* Images Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-0 relative">
          {/* Close-Up Magic Image */}
          <div className="flex flex-col relative h-full border-2 border-gray-700 rounded-2xl bg-black/80">
            <img src="/images/edit5.png" alt="Close-Up Magic" className="w-full aspect-square object-cover" />
            <div className="flex-1 flex flex-col items-center p-4 sm:p-8 text-center h-full">
              <div className="flex-1 flex flex-col justify-start">
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 mt-4">Close-Up Magic</h3>
                <p className="text-sm sm:text-lg text-gray-200 mb-4">Interactive magic performed up-close at tables during dinners, receptions, or networking events. Perfect for creating conversation and breaking the ice.</p>
              </div>
              <ul className="text-left space-y-4 sm:space-y-6 w-full max-w-xs mx-auto mt-auto mb-4 sm:mb-6">
                <li className="flex flex-col">
                  <div className="flex items-center text-gray-100"><span className="mr-2 text-base sm:text-lg">👥</span> Ideal for groups of 10–300</div>
                  <div className="text-gray-400 text-xs sm:text-sm pl-7">Small to medium events</div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center text-gray-100"><span className="mr-2 text-base sm:text-lg">⏱️</span> 30–2 hour+ minute performances</div>
                  <div className="text-gray-400 text-xs sm:text-sm pl-7">Flexible set lengths</div>
                </li>
              </ul>
              <Link href="/cities/austin-magician/close-up" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-base sm:text-lg">Learn More</Link>
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
                <p className="text-gray-200 mb-4 text-lg">A sophisticated 30–45 minute performance combining mind-reading, illusions, and audience participation that will leave your guests amazed.</p>
              </div>
              <ul className="text-left space-y-6 w-full max-w-xs mx-auto mt-auto mb-6">
                <li className="flex flex-col">
                  <div className="flex items-center text-gray-100"><span className="mr-2 text-lg">👥</span> Perfect for groups of 50–1000+</div>
                  <div className="text-gray-400 text-sm pl-7">Large events & conferences</div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center text-gray-100"><span className="mr-2 text-lg">⏱️</span> 30–45 minute show</div>
                  <div className="text-gray-400 text-sm pl-7">Full stage production</div>
                </li>
              </ul>
              <Link href="/stage-show-magic" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg">Learn More</Link>
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
                <p className="text-gray-200 mb-4 text-lg">Drive traffic to your booth and communicate key messages through customized magical presentations that highlight your products or services.</p>
              </div>
              <ul className="text-left space-y-6 w-full max-w-xs mx-auto mt-auto mb-6">
                <li className="flex flex-col">
                  <div className="flex items-center text-gray-100"><span className="mr-2 text-lg">📈</span> Increases booth traffic by 30–50%</div>
                  <div className="text-gray-400 text-sm pl-7">Boosts engagement</div>
                </li>
                <li className="flex flex-col">
                  <div className="flex items-center text-gray-100"><span className="mr-2 text-lg">⏱️</span> 5–7 minute presentations</div>
                  <div className="text-gray-400 text-sm pl-7">Quick, repeatable sets</div>
                </li>
              </ul>
              <Link href="/cities/austin-magician/trade-show" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 