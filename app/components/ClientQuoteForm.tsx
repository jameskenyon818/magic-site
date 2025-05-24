'use client';

import dynamic from 'next/dynamic';

const QuoteForm = dynamic(() => import('./QuoteForm'), { ssr: false });

export default function ClientQuoteForm() {
  return <QuoteForm />;
} 