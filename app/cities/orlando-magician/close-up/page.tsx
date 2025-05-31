import { Metadata } from 'next';
import CloseUpMagicSection from '../../../components/CloseUpMagicSection';
import ClientQuoteForm from '../../../components/ClientQuoteForm';
import FAQSection from '../../../components/FAQSection';
import BottomContactSection from '../../../components/BottomContactSection';
import CityFooter from '../../../components/CityFooter';

export const metadata: Metadata = {
  title: 'Close-Up Magic in Orlando — Corporate Events & Private Parties',
  description: 'Experience intimate close-up magic in Orlando. Perfect for corporate events, private parties, and special occasions. Book James Kenyon for an unforgettable magical experience.'
};

export default function OrlandoCloseUpMagicPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <CloseUpMagicSection city="Orlando" />
      <ClientQuoteForm city="Orlando" />
      <FAQSection />
      <BottomContactSection />
      <CityFooter city="Orlando" />
    </main>
  );
} 