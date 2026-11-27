import React from 'react';
import { Metadata } from 'next';
import Navigation from '@/app/components/Navigation';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.jameskenyonmagic.com/performances' },
  title: 'Magic Performances — Stage Magic, Close-Up Magic, and Trade Show Magic',
  description: 'Experience captivating magic performances by James Kenyon, including stage magic, close-up magic, and trade show magic for corporate events and private parties.'
};

export default function PerformancesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Performances</h1>
        <p className="text-lg text-gray-300 max-w-3xl mb-8">Choose the right performance style for your event. Close-up magic works well while guests mingle, a stage show brings the group together, and trade show magic supports conversations at your exhibition booth. Serving Austin and available for events in other cities.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Stage Magic</h2>
            <p className="text-gray-300 mb-4">A shared performance for the entire audience, combining interactive moments, mind-reading and visual magic. Ideal for company dinners, conferences and celebrations with a scheduled showtime.</p>
            <a href="/stage-magic" className="text-blue-400 hover:text-blue-300">Learn More →</a>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Close-Up Magic</h2>
            <p className="text-gray-300 mb-4">Strolling magic performed for guests in small groups during cocktail hours, client receptions, networking events and private parties. It fits naturally around conversations and the flow of the evening.</p>
            <a href="/close-up" className="text-blue-400 hover:text-blue-300">Learn More →</a>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Trade Show Magic</h2>
            <p className="text-gray-300 mb-4">Short, repeatable booth-side presentations designed to attract visitors, communicate product messages and create opportunities for your team to start qualified conversations.</p>
            <a href="/trade-show" className="text-blue-400 hover:text-blue-300">Learn More →</a>
          </div>
        </div>
        <p className="text-gray-300 mt-10">Not sure which format fits your schedule or audience? <a href="/contact" className="text-blue-400 hover:text-blue-300 underline">Ask about availability and booking options</a>.</p>
      </div>
    </main>
  );
} 