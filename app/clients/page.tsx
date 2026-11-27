import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/app/components/Navigation';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.jameskenyonmagic.com/clients' },
  title: 'Clients & Event Types | James Kenyon Magic',
  description: 'See the corporate events, trade shows and private celebrations James Kenyon performs at, and find independently published client reviews.'
};

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Clients & Events</h1>
        <p className="text-lg text-gray-300 max-w-3xl mb-10">
          James Kenyon performs interactive magic for corporate gatherings, exhibitions and private events.
          Choose the format that fits your audience and event schedule, from mingling close-up magic to a show for the full room.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Corporate Events</h2>
            <p className="text-gray-300 mb-4">Entertainment for receptions, networking events, company celebrations, client dinners and conferences. Close-up magic gives guests a shared talking point; a stage show brings everyone together.</p>
            <Link href="/corporate-magician" className="text-blue-400 hover:text-blue-300 underline">Explore corporate magic</Link>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Trade Shows & Private Parties</h2>
            <p className="text-gray-300 mb-4">Booth-side presentations are designed to draw attention and make it easier for your sales team to start conversations. For private gatherings, strolling magic can happen naturally around guests without a formal stage.</p>
            <Link href="/trade-show" className="text-blue-400 hover:text-blue-300 underline">Explore trade show magic</Link>
          </div>
        </div>
        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Read Public Client Reviews</h2>
          <p className="text-gray-300">See independently published feedback on <a href="https://www.weddingwire.com/biz/james-kenyon-magic/02b20e40501cae03.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">WeddingWire reviews</a> and <a href="https://www.theknot.com/marketplace/james-kenyon-magic-austin-tx-2060188" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">The Knot reviews</a>. For details about an event similar to yours, <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline">request availability and a quote</Link>.</p>
        </section>
      </div>
    </main>
  );
}