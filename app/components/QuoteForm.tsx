"use client";

import { useRouter } from 'next/navigation';

export default function QuoteForm() {
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
    <section className="bg-black py-16 px-4 md:px-0">
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-8 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Request a Custom Quote</h2>
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
    </section>
  );
} 