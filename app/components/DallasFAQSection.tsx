'use client';

import Link from 'next/link';

export default function DallasFAQSection() {
  return (
    <section className="w-full bg-black py-12 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Common questions about booking</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-16 max-w-2xl mx-auto">Find answers to frequently asked questions about James's performances and booking process.</p>
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {/* Dallas-Specific FAQ 1 */}
          <div className="bg-[#181818] rounded-2xl p-8 shadow-lg text-left">
            <h3 className="text-xl font-bold text-white mb-4">Do you perform at trade shows at the Kay Bailey Hutchison Convention Center in Dallas?</h3>
            <p className="text-gray-300 text-base">Yes! James has extensive experience performing at the Kay Bailey Hutchison Convention Center and other major Dallas venues. He can customize performances to draw traffic to your booth and incorporate your brand messaging seamlessly.</p>
          </div>
          {/* Dallas-Specific FAQ 2 */}
          <div className="bg-[#181818] rounded-2xl p-8 shadow-lg text-left">
            <h3 className="text-xl font-bold text-white mb-4">Can you do strolling magic at Dallas resorts and conference hotels?</h3>
            <p className="text-gray-300 text-base">Absolutely. James performs close-up magic at Dallas-area hotels including the Omni Dallas Hotel, The Ritz-Carlton Dallas, and other premier venues throughout the metroplex. Perfect for corporate mixers and networking events.</p>
          </div>
          {/* Dallas-Specific FAQ 3 */}
          <div className="bg-[#181818] rounded-2xl p-8 shadow-lg text-left">
            <h3 className="text-xl font-bold text-white mb-4">How far in advance should Dallas events book?</h3>
            <p className="text-gray-300 text-base">For Dallas corporate events, we recommend booking 3–6 months in advance, especially during peak seasons. However, we often have availability for last-minute Dallas events, so don't hesitate to inquire about your specific date.</p>
          </div>
          {/* FAQ 4 */}
          <div className="bg-[#181818] rounded-2xl p-8 shadow-lg text-left">
            <h3 className="text-xl font-bold text-white mb-4">What are your fees?</h3>
            <p className="text-gray-300 text-base">Performance fees vary based on the type of event, duration, location, and specific requirements. We provide customized quotes after understanding your event needs. Please contact us for a personalized quote for your event.</p>
          </div>
          {/* FAQ 5 */}
          <div className="bg-[#181818] rounded-2xl p-8 shadow-lg text-left">
            <h3 className="text-xl font-bold text-white mb-4">Do you require any special technical setup?</h3>
            <p className="text-gray-300 text-base">James's performances are designed to be technically self-contained. For close-up magic, no special requirements are needed. For stage shows, basic lighting and sound (microphone) are typically all that's required. We'll provide a detailed technical rider after booking.</p>
          </div>
          {/* FAQ 6 */}
          <div className="bg-[#181818] rounded-2xl p-8 shadow-lg text-left">
            <h3 className="text-xl font-bold text-white mb-4">What happens after I submit an inquiry?</h3>
            <p className="text-gray-300 text-base">After submitting an inquiry, you'll receive a response within 24 hours. We'll schedule a consultation call to discuss your event needs, check availability, and provide a customized proposal. The booking is confirmed with a signed agreement and deposit.</p>
          </div>
        </div>
        <Link href="/contact" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg mt-8 sm:mt-12">Contact</Link>
      </div>
    </section>
  );
}