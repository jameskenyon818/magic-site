import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';

export default function MiamiMagicianPage() {
  return (
    <>
      {/* FAQ Section */}
      <section className="w-full bg-black py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Link href="#contact" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg mb-8">Contact / Check Availability</Link>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Common questions about booking</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12">Find answers to frequently asked questions about James's performances and booking process.</p>
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-zinc-900 text-white rounded-xl p-6 border border-zinc-700 text-left">
              <div className="font-semibold text-lg mb-2">How far in advance should I book James?</div>
              <div>For corporate events, we recommend booking 3–6 months in advance to ensure availability, especially for peak seasons (October–December and April–June). However, we occasionally have last-minute availability, so don't hesitate to inquire about your specific date.</div>
            </div>
            {/* FAQ 2 */}
            <div className="bg-zinc-900 text-white rounded-xl p-6 border border-zinc-700 text-left">
              <div className="font-semibold text-lg mb-2">What are your fees?</div>
              <div>Performance fees vary based on the type of event, duration, location, and specific requirements. We provide customized quotes after understanding your event needs. Please contact us for a personalized quote for your event.</div>
            </div>
            {/* FAQ 3 */}
            <div className="bg-zinc-900 text-white rounded-xl p-6 border border-zinc-700 text-left">
              <div className="font-semibold text-lg mb-2">Do you require any special technical setup?</div>
              <div>James's performances are designed to be technically self-contained. For close-up magic, no special requirements are needed. For stage shows, basic lighting and sound (microphone) are typically all that's required. We'll provide a detailed technical rider after booking.</div>
            </div>
            {/* FAQ 4 */}
            <div className="bg-zinc-900 text-white rounded-xl p-6 border border-zinc-700 text-left">
              <div className="font-semibold text-lg mb-2">Can you customize the performance for our company or event theme?</div>
              <div>James specializes in creating customized magical moments that incorporate your company messaging, products, or event theme. During the consultation process, we'll discuss ways to personalize the experience for your specific audience.</div>
            </div>
            {/* FAQ 5 */}
            <div className="bg-zinc-900 text-white rounded-xl p-6 border border-zinc-700 text-left">
              <div className="font-semibold text-lg mb-2">Do you perform internationally?</div>
              <div>Yes, James performs at corporate events worldwide. International bookings typically require additional lead time for logistics and travel arrangements. Please inquire about specific international locations when contacting us.</div>
            </div>
            {/* FAQ 6 */}
            <div className="bg-zinc-900 text-white rounded-xl p-6 border border-zinc-700 text-left">
              <div className="font-semibold text-lg mb-2">What happens after I submit an inquiry?</div>
              <div>After submitting an inquiry, you'll receive a response within 24 hours. We'll schedule a consultation call to discuss your event needs, check availability, and provide a customized proposal. The booking is confirmed with a signed agreement and deposit.</div>
            </div>
          </div>
        </div>
      </section>

      <QuoteForm />
    </>
  );
} 