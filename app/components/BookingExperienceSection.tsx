'use client';

import Link from 'next/link';

export default function BookingExperienceSection() {
  return (
    <section className="w-full bg-black py-12 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <Link href="#contact" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-base sm:text-lg mb-6 sm:mb-8">Check Availability</Link>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">A seamless booking experience</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-16 max-w-2xl mx-auto">From initial inquiry to post-event follow-up, we ensure a professional and straightforward process.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Step 1: Consultation */}
          <div className="flex flex-col items-center bg-[#181818] rounded-2xl p-8 shadow-lg">
            {/* Icon */}
            <div className="bg-black rounded-xl p-4 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 2.25h6M9 2.25A2.25 2.25 0 006.75 4.5v15A2.25 2.25 0 009 21.75h6a2.25 2.25 0 002.25-2.25v-15A2.25 2.25 0 0015 2.25M9 2.25v1.5A2.25 2.25 0 0011.25 6h1.5A2.25 2.25 0 0015 3.75v-1.5M8.25 9.75h7.5m-7.5 3h4.5" />
                <circle cx="17" cy="17" r="3" fill="white" stroke="black" strokeWidth="1.5" />
                <path d="M17 16v1h1" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            {/* Step Number */}
            <div className="flex items-center justify-center mb-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black font-bold text-lg">01</span>
            </div>
            <div className="font-bold text-xl text-white mb-2">Consultation</div>
            <div className="text-gray-300 text-base">We'll discuss your event objectives, audience, and specific requirements to determine the perfect magical experience.</div>
          </div>
          {/* Step 2: Customization */}
          <div className="flex flex-col items-center bg-[#181818] rounded-2xl p-8 shadow-lg">
            {/* Icon */}
            <div className="bg-black rounded-xl p-4 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.212l-4.5 1.5 1.5-4.5 12.362-12.225z" />
                <rect x="2" y="20" width="20" height="2" rx="1" fill="white" />
              </svg>
            </div>
            {/* Step Number */}
            <div className="flex items-center justify-center mb-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black font-bold text-lg">02</span>
            </div>
            <div className="font-bold text-xl text-white mb-2">Customization</div>
            <div className="text-gray-300 text-base">James will design a tailored performance that incorporates your brand messaging and aligns with your event goals.</div>
          </div>
          {/* Step 3: Performance */}
          <div className="flex flex-col items-center bg-[#181818] rounded-2xl p-8 shadow-lg">
            {/* Icon */}
            <div className="bg-black rounded-xl p-4 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
            </div>
            {/* Step Number */}
            <div className="flex items-center justify-center mb-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black font-bold text-lg">03</span>
            </div>
            <div className="font-bold text-xl text-white mb-2">Performance</div>
            <div className="text-gray-300 text-base">James delivers a flawless, memorable experience that exceeds expectations and achieves your event goals.</div>
          </div>
        </div>
      </div>
    </section>
  );
} 