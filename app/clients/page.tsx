import React from 'react';
import { Metadata } from 'next';
import Navigation from '@/app/components/Navigation';

export const metadata: Metadata = {
  title: 'Our Clients — Corporate Events and Private Parties',
  description: 'James Kenyon has performed for leading companies and organizations at corporate events, trade shows, and private parties.'
};

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Clients</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Corporate Events</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• TechCorp</li>
              <li>• Global Finance</li>
              <li>• Creative Solutions</li>
              <li>• Innovation Partners</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Private Parties</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Holiday Celebrations</li>
              <li>• Birthday Parties</li>
              <li>• Wedding Receptions</li>
              <li>• Special Events</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 