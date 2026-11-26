import React from 'react';
import { Metadata } from 'next';
import Navigation from '@/app/components/Navigation';

export const metadata: Metadata = {
  title: 'Magic Performances — Stage Magic, Close-Up Magic, and Trade Show Magic',
  description: 'Experience captivating magic performances by James Kenyon, including stage magic, close-up magic, and trade show magic for corporate events and private parties.'
};

export default function PerformancesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Performances</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Stage Magic</h2>
            <p className="text-gray-300 mb-4">Grand illusions and stage performances perfect for corporate events and large gatherings.</p>
            <a href="/cities/los-angeles-magician/stage-magic" className="text-blue-400 hover:text-blue-300">Learn More →</a>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Close-Up Magic</h2>
            <p className="text-gray-300 mb-4">Intimate, interactive magic perfect for cocktail hours and networking events.</p>
            <a href="/cities/los-angeles-magician/close-up" className="text-blue-400 hover:text-blue-300">Learn More →</a>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Trade Show Magic</h2>
            <p className="text-gray-300 mb-4">Engaging performances designed to draw crowds and create memorable brand experiences.</p>
            <a href="/trade-show" className="text-blue-400 hover:text-blue-300">Learn More →</a>
          </div>
        </div>
      </div>
    </main>
  );
} 