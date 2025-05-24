'use client';

import Link from 'next/link';

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-black py-12 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Don't take our word for it — hear what event planners and executives say about James's performances</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {/* Testimonial 1 */}
          <div className="flex flex-col bg-[#181818] rounded-2xl p-8 shadow-lg">
            <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
            <p className="text-gray-300 text-base mb-6">"James's performance was the highlight of our annual conference. His ability to engage our audience and incorporate our brand messaging was exceptional."</p>
            <div className="mt-auto">
              <div className="font-bold text-white">Aiden Nakamura</div>
              <div className="text-gray-400 text-sm">Event Director, Pinnacle Solutions</div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="flex flex-col bg-[#181818] rounded-2xl p-8 shadow-lg">
            <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
            <p className="text-gray-300 text-base mb-6">"We've hired many entertainers over the years, but none have delivered the level of sophistication and audience engagement that James provided."</p>
            <div className="mt-auto">
              <div className="font-bold text-white">Leila Patel</div>
              <div className="text-gray-400 text-sm">Marketing Manager, Horizon Media Group</div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="flex flex-col bg-[#181818] rounded-2xl p-8 shadow-lg">
            <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
            <p className="text-gray-300 text-base mb-6">"James seamlessly incorporated our product messaging into his performance, making it both entertaining and impactful for our sales conference."</p>
            <div className="mt-auto">
              <div className="font-bold text-white">Marcus Chen</div>
              <div className="text-gray-400 text-sm">Chief Marketing Officer, Lakefront Partners</div>
            </div>
          </div>
          {/* Testimonial 4 */}
          <div className="flex flex-col bg-[#181818] rounded-2xl p-8 shadow-lg">
            <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
            <p className="text-gray-300 text-base mb-6">"Our trade show booth saw 45% more traffic when James was performing. His ability to attract and engage potential clients was remarkable."</p>
            <div className="mt-auto">
              <div className="font-bold text-white">Sophia Rodriguez</div>
              <div className="text-gray-400 text-sm">Event Manager</div>
            </div>
          </div>
          {/* Testimonial 5 */}
          <div className="flex flex-col bg-[#181818] rounded-2xl p-8 shadow-lg">
            <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
            <p className="text-gray-300 text-base mb-6">"James's virtual show for our remote team was exactly what we needed. Interactive, engaging, and it brought everyone together despite the distance."</p>
            <div className="mt-auto">
              <div className="font-bold text-white">Jamal Washington</div>
              <div className="text-gray-400 text-sm">HR Director</div>
            </div>
          </div>
          {/* Testimonial 6 */}
          <div className="flex flex-col bg-[#181818] rounded-2xl p-8 shadow-lg">
            <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
            <p className="text-gray-300 text-base mb-6">"The level of professionalism from initial contact to post-event follow-up was exceptional. James and his team are true professionals."</p>
            <div className="mt-auto">
              <div className="font-bold text-white">Olivia Nguyen</div>
              <div className="text-gray-400 text-sm">Events Coordinator</div>
            </div>
          </div>
        </div>
        <Link href="#contact" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg mt-8 sm:mt-12">Contact / Check Availability</Link>
      </div>
    </section>
  );
} 