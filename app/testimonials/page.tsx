import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/app/components/Navigation';

export const metadata: Metadata = {
  title: 'Client Reviews & Testimonials | James Kenyon Magic',
  description: 'Read independently published reviews of James Kenyon Magic, and learn how to book interactive magic for corporate events and private celebrations.',
  alternates: { canonical: 'https://www.jameskenyonmagic.com/testimonials' },
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Client Reviews & Testimonials</h1>
        <p className="text-lg text-gray-300 max-w-3xl mb-8">
          Looking for feedback from people who have booked James Kenyon Magic? Read published reviews on independent event-planning platforms before choosing entertainment for your event.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">WeddingWire Client Reviews</h2>
            <p className="text-gray-300 mb-4">Read feedback about close-up magic, receptions and private celebrations on James Kenyon Magic's public WeddingWire profile.</p>
            <a href="https://www.weddingwire.com/biz/james-kenyon-magic/02b20e40501cae03.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Read WeddingWire reviews</a>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">The Knot Client Reviews</h2>
            <p className="text-gray-300 mb-4">See additional independently published reviews and information about James's interactive performances for guests.</p>
            <a href="https://www.theknot.com/marketplace/james-kenyon-magic-austin-tx-2060188" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Read The Knot reviews</a>
          </div>
        </div>
        <p className="text-gray-300 mt-10">Planning a company event or trade show? <Link href="/corporate-magician" className="text-blue-400 hover:text-blue-300 underline">Explore corporate entertainment</Link> or <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline">contact James about your event</Link>.</p>
      </div>
    </main>
  );
}