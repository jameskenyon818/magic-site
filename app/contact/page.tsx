import type { Metadata } from 'next';
import Navigation from '@/app/components/Navigation';
import BottomContactSection from '@/app/components/BottomContactSection';

export const metadata: Metadata = {
  title: 'Contact James Kenyon | Request a Magic Entertainment Quote',
  description: 'Contact James Kenyon to check availability and request a quote for corporate magic, trade shows, or private events.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <h1 className="sr-only">Contact James Kenyon</h1>
      <BottomContactSection />
    </main>
  );
} 