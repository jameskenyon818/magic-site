import { Metadata } from 'next';
import CloseUpMagicSection from '../../../components/CloseUpMagicSection';
import ClientQuoteForm from '../../../components/ClientQuoteForm';
import FAQSection from '../../../components/FAQSection';
import BottomContactSection from '../../../components/BottomContactSection';
import CityFooter from '../../../components/CityFooter';

export const metadata: Metadata = {
  title: 'Close-Up Magic in Phoenix — Corporate Events & Private Parties',
  description: 'Experience intimate close-up magic in Phoenix. Perfect for corporate events, private parties, and special occasions. Book James Kenyon for an unforgettable magical experience.'
};

export default function PhoenixCloseUpMagicPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <CloseUpMagicSection city="Phoenix" />
      <ClientQuoteForm city="Phoenix" />
      <FAQSection />
      <BottomContactSection />
      <CityFooter city="Phoenix" />
    </main>
  );
} 