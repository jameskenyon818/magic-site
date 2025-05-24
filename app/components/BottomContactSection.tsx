'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function BottomContactSection() {
  return (
    <section className="w-full bg-black py-12 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Ready to amaze your guests?</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-16 max-w-2xl mx-auto">
          Contact us today to check availability for your upcoming corporate event and discover how James can create an unforgettable experience.
        </p>
        <div className="text-2xl font-bold text-white mb-8">737-235-4182</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square">
            <Image
              src="/images/contact-image.jpg"
              alt="James Kenyon performing magic"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
          <div className="bg-[#181818] rounded-2xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="eventType" className="block text-white mb-2">Event Type</label>
                <select id="eventType" className="w-full bg-black text-white border border-gray-700 rounded-md p-3">
                  <option value="">Select an event type</option>
                  <option value="trade-show">Trade Show</option>
                  <option value="corporate-function">Corporate Function</option>
                  <option value="gala">Gala</option>
                  <option value="product-launch">Product Launch</option>
                  <option value="conference">Conference</option>
                  <option value="holiday-party">Holiday Party</option>
                  <option value="vip-dinner">VIP Dinner</option>
                  <option value="fundraiser">Fundraiser</option>
                  <option value="employee-appreciation">Employee Appreciation</option>
                  <option value="private-party">Private Party</option>
                </select>
              </div>
              <div>
                <label htmlFor="budgetRange" className="block text-white mb-2">Budget Range</label>
                <select id="budgetRange" className="w-full bg-black text-white border border-gray-700 rounded-md p-3">
                  <option value="">Select a budget range</option>
                  <option value="1000-2500">$1,000–$2,500</option>
                  <option value="2500-5000">$2,500–$5,000</option>
                  <option value="5000-7500">$5,000–$7,500</option>
                  <option value="7500+">$7,500+</option>
                </select>
              </div>
              <div>
                <label htmlFor="guests" className="block text-white mb-2">Number of Guests</label>
                <select id="guests" className="w-full bg-black text-white border border-gray-700 rounded-md p-3">
                  <option value="">Select number of guests</option>
                  <option value="1-25">1-25</option>
                  <option value="26-50">26-50</option>
                  <option value="51-100">51-100</option>
                  <option value="101-250">101-250</option>
                  <option value="251-500">251-500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg"
              >
                Check Availability
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 