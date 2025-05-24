'use client';

import Link from 'next/link';

export default function ExperienceCreatorSection() {
  return (
    <section className="w-full bg-black py-12 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Not just a magician, an experience creator</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-16 max-w-2xl mx-auto">
          With over a decade of experience performing for Fortune 500 companies and at prestigious events and worldwide, James Kenyon has established himself as the premier choice for corporate entertainment.
          <br /><br />
          Combining sophisticated sleight of hand, psychological illusions, and engaging storytelling, James creates unforgettable moments that align with your brand message and event objectives.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Award-Winning */}
          <div className="flex flex-col items-center bg-[#181818] rounded-2xl p-8 shadow-lg">
            <div className="text-4xl mb-4">🏆</div>
            <div className="font-bold text-xl text-white mb-2">Award-Winning</div>
            <div className="text-gray-300 text-base">International Magic Champion</div>
          </div>
          {/* Corporate Specialist */}
          <div className="flex flex-col items-center bg-[#181818] rounded-2xl p-8 shadow-lg">
            <div className="text-4xl mb-4">👔</div>
            <div className="font-bold text-xl text-white mb-2">Corporate Specialist</div>
            <div className="text-gray-300 text-base">Tailored for business audiences</div>
          </div>
          {/* Global Performer */}
          <div className="flex flex-col items-center bg-[#181818] rounded-2xl p-8 shadow-lg">
            <div className="text-4xl mb-4">🌍</div>
            <div className="font-bold text-xl text-white mb-2">Global Performer</div>
            <div className="text-gray-300 text-base">International performances</div>
          </div>
          {/* VIP Experience */}
          <div className="flex flex-col items-center bg-[#181818] rounded-2xl p-8 shadow-lg">
            <div className="text-4xl mb-4">🎩</div>
            <div className="font-bold text-xl text-white mb-2">VIP Experience</div>
            <div className="text-gray-300 text-base">Performed for celebrities & CEOs</div>
          </div>
          {/* Learn More */}
          <div className="flex flex-col items-center bg-[#181818] rounded-2xl p-8 shadow-lg">
            <div className="text-4xl mb-4">📌</div>
            <div className="font-bold text-xl text-white mb-2">Learn More About James</div>
            <div className="text-gray-300 text-base">Discover his story and approach</div>
          </div>
        </div>
      </div>
    </section>
  );
} 