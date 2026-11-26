import type { Metadata } from 'next';
import Navigation from '@/app/components/Navigation';
import BottomContactSection from '@/app/components/BottomContactSection';

export const metadata: Metadata = {
  description: 'Contact James Kenyon to check availability and request a quote for corporate magic, trade shows, or private events.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <BottomContactSection />
    </main>
  );
} 