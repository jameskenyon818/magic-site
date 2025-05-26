'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function BottomContactSection() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    // Validate required fields
    if (!data.get('name') || !data.get('email') || !data.get('phone')) {
      alert('Please fill in all required fields: Name, Email, and Phone');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xvgagbja', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        router.push('/thank-you');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Something went wrong. Please try again.');
    }
  };

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
              src="/images/IMG_5400.JPG"
              alt="James Kenyon performing magic"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
          <div className="bg-[#181818] rounded-2xl p-8 shadow-lg">
            <form 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-1">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-1">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                />
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-200 mb-1">Event Date</label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-200 mb-1">Event Type</label>
                <select
                  id="eventType"
                  name="eventType"
                  className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                >
                  <option value="">Select an event type</option>
                  <option value="Trade Show">Trade Show</option>
                  <option value="Corporate Function">Corporate Function</option>
                  <option value="Gala">Gala</option>
                  <option value="Company Party">Company Party</option>
                  <option value="Private Dinner">Private Dinner</option>
                  <option value="Holiday Event">Holiday Event</option>
                  <option value="Awards Ceremony">Awards Ceremony</option>
                  <option value="Team-Building Event">Team-Building Event</option>
                  <option value="VIP Client Event">VIP Client Event</option>
                  <option value="Conference Afterparty">Conference Afterparty</option>
                </select>
              </div>

              <div>
                <label htmlFor="budgetRange" className="block text-sm font-medium text-gray-200 mb-1">Budget Range</label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                >
                  <option value="">Select a budget range</option>
                  <option value="$1,000 – $2,500">$1,000 – $2,500</option>
                  <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                  <option value="$5,000 – $7,500">$5,000 – $7,500</option>
                </select>
              </div>

              <div>
                <label htmlFor="guestCount" className="block text-sm font-medium text-gray-200 mb-1">Number of Guests</label>
                <select
                  id="guestCount"
                  name="guestCount"
                  className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                >
                  <option value="">Select number of guests</option>
                  <option value="1–25">1–25</option>
                  <option value="26–50">26–50</option>
                  <option value="51–100">51–100</option>
                  <option value="100+">100+</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-200 mb-1">Additional Details</label>
                <textarea
                  id="additionalDetails"
                  name="additionalDetails"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                ></textarea>
              </div>

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors border border-gray-700"
                >
                  Request Your Custom Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 