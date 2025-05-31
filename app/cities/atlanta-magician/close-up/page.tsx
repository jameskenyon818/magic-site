import { Metadata } from 'next';
import CloseUpMagicSection from '../../../components/CloseUpMagicSection';
import ClientQuoteForm from '../../../components/ClientQuoteForm';
import FAQSection from '../../../components/FAQSection';
import BottomContactSection from '../../../components/BottomContactSection';
import CityFooter from '../../../components/CityFooter';

export const metadata: Metadata = {
  title: 'Close-Up Magic in Atlanta — Corporate Events & Private Parties',
  description: 'Experience intimate close-up magic in Atlanta. Perfect for corporate events, private parties, and special occasions. Book James Kenyon for an unforgettable magical experience.'
};

export default function AtlantaCloseUpMagicPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <CloseUpMagicSection city="Atlanta" />
      <ClientQuoteForm city="Atlanta" />
      <FAQSection />
      <BottomContactSection />
      <CityFooter city="Atlanta" />
    </main>
  );
} 