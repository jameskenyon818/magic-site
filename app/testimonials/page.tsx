import React from 'react';
import { Metadata } from 'next';
import Navigation from '@/app/components/Navigation';

export const metadata: Metadata = {
  title: 'Client Testimonials — What Our Clients Say',
  description: 'Read what our clients have to say about James Kenyon\'s magic performances at their corporate events and private parties.',
  alternates: {
    canonical: 'https://www.jameskenyonmagic.com/testimonials',
  },
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Client Testimonials</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-gray-300 mb-4">"James's stage show was the highlight of our corporate gala. His grand illusions and audience interaction created an unforgettable experience that brought our entire team together."</p>
            <div>
              <p className="font-semibold text-xl">Jennifer Martinez</p>
              <p className="text-gray-400">HR Director, TechCorp</p>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-gray-300 mb-4">"The way James commanded the stage was remarkable. His stage magic created the perfect atmosphere for our large networking event, making it easy for people to connect and share their amazement."</p>
            <div>
              <p className="font-semibold text-xl">Robert Chen</p>
              <p className="text-gray-400">Event Coordinator, Global Finance</p>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-gray-300 mb-4">"Our holiday party was transformed by James's stage performance. The grand illusions and audience participation made everyone feel involved, and the reactions were priceless."</p>
            <div>
              <p className="font-semibold text-xl">Sarah Thompson</p>
              <p className="text-gray-400">Marketing Manager, Creative Solutions</p>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-gray-300 mb-4">"James's ability to engage the entire audience was impressive. He created a sophisticated atmosphere that perfectly complemented our corporate event."</p>
            <div>
              <p className="font-semibold text-xl">Michael Anderson</p>
              <p className="text-gray-400">CEO, Innovation Partners</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 