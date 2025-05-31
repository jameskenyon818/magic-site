import { Metadata } from 'next';
import CloseUpMagicSection from '../../../components/CloseUpMagicSection';
import ClientQuoteForm from '../../../components/ClientQuoteForm';
import FAQSection from '../../../components/FAQSection';
import BottomContactSection from '../../../components/BottomContactSection';
import CityFooter from '../../../components/CityFooter';

export const metadata: Metadata = {
  title: 'Close-Up Magic in San Diego — Corporate Events & Private Parties',
  description: 'Experience intimate close-up magic in San Diego. Perfect for corporate events, private parties, and special occasions. Book James Kenyon for an unforgettable magical experience.'
};

export default function SanDiegoCloseUpMagicPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <CloseUpMagicSection city="San Diego" />
      <ClientQuoteForm city="San Diego" />
      <FAQSection />
      <BottomContactSection />
      <CityFooter city="San Diego" />
    </main>
  );
} 