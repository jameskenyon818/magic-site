import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.jameskenyonmagic.com/about' },
  title: 'About James Kenyon | Professional Corporate Magician',
  description: 'Meet James Kenyon, a professional magician specializing in close-up magic, corporate events, and trade show entertainment.',
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
