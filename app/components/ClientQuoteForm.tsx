'use client';

import dynamic from 'next/dynamic';

const QuoteForm = dynamic(() => import('./QuoteForm'), { ssr: false });

interface ClientQuoteFormProps {
  city: string;
}

export default function ClientQuoteForm({ city }: ClientQuoteFormProps) {
  return <QuoteForm city={city} />;
} 