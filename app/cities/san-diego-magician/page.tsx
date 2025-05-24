import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import SDStructuredData from '../../components/SDStructuredData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire a Magician in San Diego – Corporate Parties',
  description: 'Hire a top-rated magician in San Diego for unforgettable corporate events, parties, and trade shows.'
};

export default function SanDiegoMagicianPage() {
  return (
    <>
      <SDStructuredData />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-screen bg-black" style={{ 
          backgroundImage: "url('/images/edit.png')",
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Navigation */}
          <nav className="relative z-10 bg-black/30 backdrop-blur-sm shadow-md text-white py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <div className="text-xl font-semibold">
                James Kenyon | Corporate Illusionist
              </div>
              <div className="hidden md:flex space-x-6">
                <Link href="/about" className="hover:text-gray-300 transition">About</Link>
                <Link href="#performances" className="hover:text-gray-300 transition">Performances</Link>
                <Link href="#clients" className="hover:text-gray-300 transition">Clients</Link>
                <Link href="#testimonials" className="hover:text-gray-300 transition">Testimonials</Link>
                <Link href="#contact" className="hover:text-gray-300 transition">Contact</Link>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="relative z-10 h-[calc(100vh-4rem)] flex flex-col items-center justify-start text-white text-center px-4 pt-24">
            <div className="space-y-6 max-w-3xl">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                Elite Corporate Entertainment
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                Hire a Magician in San Diego – Corporate Events
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md mt-12">
                James Kenyon brings high-energy magic to San Diego corporate events, trade shows, weddings, and private parties. As San Diego's most sought-after corporate magician, he creates unforgettable experiences that leave lasting impressions. Whether you're planning an event in downtown San Diego or the surrounding areas, James delivers world-class entertainment that elevates any occasion. Trust San Diego's premier magician to make your next event truly magical.
              </p>
              <div className="pt-8">
                <Link 
                  href="#contact"
                  className="inline-block bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border border-gray-700"
                >
                  Check Availability
                </Link>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 pt-8 text-gray-200">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">✨</span>
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🏢</span>
                  <span>Fortune 500 Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🌍</span>
                  <span>International Performer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

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

        {/* Performances Section */}
        <section id="performances" className="w-full bg-black py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Tailored magical experiences for every corporate occasion
            </h2>
            <p className="text-lg md:text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              From intimate executive dinners to large-scale conferences, James offers customized performances to suit your specific event needs.
            </p>
            {/* Images Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
              {/* Close-Up Magic Image */}
              <div className="flex flex-col relative h-full border-2 border-gray-700 rounded-2xl bg-black/80">
                <img src="/images/edit5.png" alt="Close-Up Magic" className="w-full aspect-square object-cover" />
                <div className="flex-1 flex flex-col items-center p-8 text-center h-full">
                  <div className="flex-1 flex flex-col justify-start">
                    <h3 className="text-2xl font-bold text-white mb-2 mt-4">Close-Up Magic</h3>
                    <p className="text-gray-200 mb-4 text-lg">Interactive magic performed up-close at tables during dinners, receptions, or networking events. Perfect for creating conversation and breaking the ice.</p>
                  </div>
                  <ul className="text-left space-y-6 w-full max-w-xs mx-auto mt-auto mb-6">
                    <li className="flex flex-col">
                      <div className="flex items-center text-gray-100"><span className="mr-2 text-lg">👥</span> Ideal for groups of 10–300</div>
                      <div className="text-gray-400 text-sm pl-7">Small to medium events</div>
                    </li>
                    <li className="flex flex-col">
                      <div className="flex items-center text-gray-100"><span className="mr-2 text-lg">⏱️</span> 30–2 hour+ minute performances</div>
                      <div className="text-gray-400 text-sm pl-7">Flexible set lengths</div>
                    </li>
                  </ul>
                  <Link href="/close-up-magic" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg">Learn More</Link>
                </div>
              </div>

              {/* Stage Show Image */}
              <div className="flex flex-col relative h-full border-2 border-gray-700 rounded-2xl bg-black/80">
                <img src="/images/edit.png" alt="Stage Show Magic" className="w-full aspect-square object-cover" />
                <div className="flex-1 flex flex-col items-center p-8 text-center h-full">
                  <div className="flex-1 flex flex-col justify-start">
                    <h3 className="text-2xl font-bold text-white mb-2 mt-4">Stage Show Magic</h3>
                    <p className="text-gray-200 mb-4 text-lg">A captivating stage performance that combines illusions, mind reading, and audience participation for larger events and conferences.</p>
                  </div>
                  <ul className="text-left space-y-6 w-full max-w-xs mx-auto mt-auto mb-6">
                    <li className="flex flex-col">
                      <div className="flex items-center text-gray-100"><span className="mr-2 text-lg">👥</span> Ideal for groups of 50–1000+</div>
                      <div className="text-gray-400 text-sm pl-7">Large events</div>
                    </li>
                    <li className="flex flex-col">
                      <div className="flex items-center text-gray-100"><span className="mr-2 text-lg">⏱️</span> 30–45 minute performances</div>
                      <div className="text-gray-400 text-sm pl-7">Perfect for keynotes</div>
                    </li>
                  </ul>
                  <Link href="/stage-show-magic" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg">Learn More</Link>
                </div>
              </div>

              {/* Trade Show Image */}
              <div className="flex flex-col relative h-full border-2 border-gray-700 rounded-2xl bg-black/80">
                <img src="/images/IMG_5401.JPG" alt="Trade Show Magic" className="w-full aspect-square object-cover" />
                <div className="flex-1 flex flex-col items-center p-8 text-center h-full">
                  <div className="flex-1 flex flex-col justify-start">
                    <h3 className="text-2xl font-bold text-white mb-2 mt-4">Trade Show Magic</h3>
                    <p className="text-gray-200 mb-4 text-lg">Drive traffic to your booth and communicate key messages through customized magical presentations that highlight your products or services.</p>
                  </div>
                  <ul className="text-left space-y-6 w-full max-w-xs mx-auto mt-auto mb-6">
                    <li className="flex flex-col">
                      <div className="flex items-center text-gray-100"><span className="mr-2 text-lg">📈</span> Increases booth traffic by 30–50%</div>
                      <div className="text-gray-400 text-sm pl-7">Boosts engagement</div>
                    </li>
                    <li className="flex flex-col">
                      <div className="flex items-center text-gray-100"><span className="mr-2 text-lg">⏱️</span> 5–7 minute presentations</div>
                      <div className="text-gray-400 text-sm pl-7">Quick, repeatable sets</div>
                    </li>
                  </ul>
                  <Link href="/trade-show-magic" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seamless Booking Experience Section */}
        <section className="w-full bg-black py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Link href="#contact" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg mb-8">Check Availability</Link>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">A seamless booking experience</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl mx-auto">From initial inquiry to post-event follow-up, we ensure a professional and straightforward process.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1: Consultation */}
              <div className="flex flex-col items-center bg-[#181818] rounded-2xl p-8 shadow-lg">
                {/* Icon */}
                <div className="bg-black rounded-xl p-4 mb-4 flex items-center justify-center">
                  {/* Clipboard with speech bubble (Heroicons outline) */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 2.25h6M9 2.25A2.25 2.25 0 006.75 4.5v15A2.25 2.25 0 009 21.75h6a2.25 2.25 0 002.25-2.25v-15A2.25 2.25 0 0015 2.25M9 2.25v1.5A2.25 2.25 0 0011.25 6h1.5A2.25 2.25 0 0015 3.75v-1.5M8.25 9.75h7.5m-7.5 3h4.5" />
                    <circle cx="17" cy="17" r="3" fill="white" stroke="black" strokeWidth="1.5" />
                    <path d="M17 16v1h1" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                {/* Step Number */}
                <div className="flex items-center justify-center mb-4">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black font-bold text-lg">01</span>
                </div>
                <div className="font-bold text-xl text-white mb-2">Consultation</div>
                <div className="text-gray-300 text-base">We&apos;ll discuss your event objectives, audience, and specific requirements to determine the perfect magical experience.</div>
              </div>
              {/* Step 2: Customization */}
              <div className="flex flex-col items-center bg-[#181818] rounded-2xl p-8 shadow-lg">
                {/* Icon */}
                <div className="bg-black rounded-xl p-4 mb-4 flex items-center justify-center">
                  {/* Pencil and paper (Heroicons outline) */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.212l-4.5 1.5 1.5-4.5 12.362-12.225z" />
                    <rect x="2" y="20" width="20" height="2" rx="1" fill="white" />
                  </svg>
                </div>
                {/* Step Number */}
                <div className="flex items-center justify-center mb-4">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black font-bold text-lg">02</span>
                </div>
                <div className="font-bold text-xl text-white mb-2">Customization</div>
                <div className="text-gray-300 text-base">James will design a tailored performance that incorporates your brand messaging and aligns with your event goals.</div>
              </div>
              {/* Step 3: Performance */}
              <div className="flex flex-col items-center bg-[#181818] rounded-2xl p-8 shadow-lg">
                {/* Icon */}
                <div className="bg-black rounded-xl p-4 mb-4 flex items-center justify-center">
                  {/* Stage with sparkles (custom simple SVG) */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <rect x="4" y="15" width="16" height="4" rx="2" fill="white" stroke="white" />
                    <circle cx="12" cy="11" r="3" stroke="white" strokeWidth="1.5" />
                    <path d="M8 8l.5-1M16 8l-.5-1M12 6V4M10 10l-1 .5M14 10l1 .5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                {/* Step Number */}
                <div className="flex items-center justify-center mb-4">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black font-bold text-lg">03</span>
                </div>
                <div className="font-bold text-xl text-white mb-2">Performance</div>
                <div className="text-gray-300 text-base">James delivers a flawless, memorable experience that exceeds expectations and achieves your event goals.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted by Industry Leaders Section */}
        <section id="clients" className="w-full bg-black py-20 px-4">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Trusted by industry leaders</h2>
            <p className="text-lg md:text-xl text-gray-300 text-center mb-10 max-w-2xl">James has performed for some of the world&apos;s most recognizable brands and at exclusive corporate events.</p>
            <div className="flex flex-col items-center space-y-4 mb-10 w-full">
              <Link href="#contact" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg">Contact / Check Availability</Link>
            </div>
            {/* Past Clients Logo Grid */}
            <div className="bg-black p-6 rounded-xl max-w-5xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-0 items-center justify-center">
                <Image src="/logos/hermes-1.svg" alt="Hermes Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
                <Image src="/logos/nike-11.svg" alt="Nike Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
                <Image src="/logos/nissan-6.svg" alt="Nissan Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
                <Image src="/logos/p-g-2.svg" alt="P&G Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
                <Image src="/logos/virgin-1.svg" alt="Virgin Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
                <Image src="/logos/hbo-max-logo-1.svg" alt="HBO Max Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
                <Image src="/logos/fox-news-channel-logo-1.svg" alt="Fox News Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
                <Image src="/logos/fedex-express-6.svg" alt="FedEx Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
                <Image src="/logos/chase.svg" alt="Chase Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
                <Image src="/logos/american-express-1.svg" alt="American Express Logo" width={160} height={80} className="h-20 w-auto object-contain mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* About James Section */}
        <section id="about" className="relative w-full min-h-[480px] bg-black py-20 flex items-center justify-center" style={{ backgroundImage: "url('/images/image about.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70" />
          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center text-white px-4 pt-80 pb-12 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Not just a magician, an experience creator</h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-10">
              With over a decade of experience performing for Fortune 500 companies and at prestigious events and worldwide, James Kenyon has established himself as the premier choice for corporate entertainment.<br /><br />
              Combining sophisticated sleight of hand, psychological illusions, and engaging storytelling, James creates unforgettable moments that align with your brand message and event objectives.
            </p>
            <ul className="space-y-6 mb-8 w-full flex flex-col items-center">
              <li className="flex items-start space-x-4">
                <span className="text-2xl">🏆</span>
                <div>
                  <div className="font-semibold text-white">Award-Winning</div>
                  <div className="text-gray-300 text-sm">International Magic Champion</div>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-2xl">👔</span>
                <div>
                  <div className="font-semibold text-white">Corporate Specialist</div>
                  <div className="text-gray-300 text-sm">Tailored for business audiences</div>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-2xl">🌍</span>
                <div>
                  <div className="font-semibold text-white">Global Performer</div>
                  <div className="text-gray-300 text-sm">International performances</div>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-2xl">🎩</span>
                <div>
                  <div className="font-semibold text-white">VIP Experience</div>
                  <div className="text-gray-300 text-sm">Performed for celebrities & CEOs</div>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-2xl">📌</span>
                <div>
                  <div className="font-semibold text-white">Learn More About James</div>
                  <div className="text-gray-300 text-sm">Discover his story and approach</div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full bg-black py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              Don't take our word for it — hear what <span className="text-[#b0c4de]">event planners and executives</span> say about James's performances
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-black rounded-xl border border-gray-800 shadow-lg p-8 flex flex-col items-center text-center">
                <div className="flex mb-4">{Array(5).fill(0).map((_, i) => (<span key={i} className="text-white text-xl">★</span>))}</div>
                <p className="italic text-white mb-6">"James's performance was the highlight of our annual conference. His ability to engage our audience and incorporate our brand messaging was exceptional."</p>
                <div className="font-bold text-white">Aiden Nakamura</div>
                <div className="text-gray-400 text-sm">Event Director, Pinnacle Solutions</div>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-black rounded-xl border border-gray-800 shadow-lg p-8 flex flex-col items-center text-center">
                <div className="flex mb-4">{Array(5).fill(0).map((_, i) => (<span key={i} className="text-white text-xl">★</span>))}</div>
                <p className="italic text-white mb-6">"We've hired many entertainers over the years, but none have delivered the level of sophistication and audience engagement that James provided."</p>
                <div className="font-bold text-white">Leila Patel</div>
                <div className="text-gray-400 text-sm">Marketing Manager, Horizon Media Group</div>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-black rounded-xl border border-gray-800 shadow-lg p-8 flex flex-col items-center text-center">
                <div className="flex mb-4">{Array(5).fill(0).map((_, i) => (<span key={i} className="text-white text-xl">★</span>))}</div>
                <p className="italic text-white mb-6">"James seamlessly incorporated our product messaging into his performance, making it both entertaining and impactful for our sales conference."</p>
                <div className="font-bold text-white">Marcus Chen</div>
                <div className="text-gray-400 text-sm">Chief Marketing Officer, Lakefront Partners</div>
              </div>
              {/* Testimonial 4 */}
              <div className="bg-black rounded-xl border border-gray-800 shadow-lg p-8 flex flex-col items-center text-center">
                <div className="flex mb-4">{Array(5).fill(0).map((_, i) => (<span key={i} className="text-white text-xl">★</span>))}</div>
                <p className="italic text-white mb-6">"Our trade show booth saw 45% more traffic when James was performing. His ability to attract and engage potential clients was remarkable."</p>
                <div className="font-bold text-white">Sophia Rodriguez</div>
                <div className="text-gray-400 text-sm">Event Manager</div>
              </div>
              {/* Testimonial 5 */}
              <div className="bg-black rounded-xl border border-gray-800 shadow-lg p-8 flex flex-col items-center text-center">
                <div className="flex mb-4">{Array(5).fill(0).map((_, i) => (<span key={i} className="text-white text-xl">★</span>))}</div>
                <p className="italic text-white mb-6">"James's virtual show for our remote team was exactly what we needed. Interactive, engaging, and it brought everyone together despite the distance."</p>
                <div className="font-bold text-white">Jamal Washington</div>
                <div className="text-gray-400 text-sm">HR Director</div>
              </div>
              {/* Testimonial 6 */}
              <div className="bg-black rounded-xl border border-gray-800 shadow-lg p-8 flex flex-col items-center text-center">
                <div className="flex mb-4">{Array(5).fill(0).map((_, i) => (<span key={i} className="text-white text-xl">★</span>))}</div>
                <p className="italic text-white mb-6">"The level of professionalism from initial contact to post-event follow-up was exceptional. James and his team are true professionals."</p>
                <div className="font-bold text-white">Olivia Nguyen</div>
                <div className="text-gray-400 text-sm">Events Coordinator</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section (split screen) */}
        <section id="contact" className="w-full relative py-28 px-4 min-h-[1100px] flex items-center justify-center">
          <img src="/images/IMG_5400.JPG" alt="Contact" className="absolute inset-0 w-full h-full object-cover object-top z-0" />
          <div className="relative z-20 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left: Prompt */}
            <div className="flex flex-col items-center justify-center text-center md:text-left px-8 py-20">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to amaze your guests?</h2>
              <p className="text-2xl md:text-3xl text-gray-200 mb-10">Contact us today to check availability for your upcoming corporate event and discover how James can create an unforgettable experience.</p>
              <div className="flex items-center justify-center md:justify-start text-white text-2xl font-bold gap-4 bg-black/50 rounded-full px-8 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h15a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 17.25V6.75z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75l9.72 7.29a.75.75 0 00.86 0l9.72-7.29" />
                </svg>
                737-235-4182
              </div>
            </div>
            {/* Right: Contact Form */}
            <div className="backdrop-blur-sm rounded-2xl p-8 md:p-12 flex flex-col justify-center">
              <form action="https://formspree.io/f/xvgagbja" method="POST" className="space-y-6 border border-white/10 rounded-2xl p-10 w-full max-w-lg mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Name *" required className="bg-zinc-900 text-white rounded-lg p-3 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="text" name="company" placeholder="Company" className="bg-zinc-900 text-white rounded-lg p-3 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="email" name="email" placeholder="Email *" required className="bg-zinc-900 text-white rounded-lg p-3 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="tel" name="phone" placeholder="Phone *" required className="bg-zinc-900 text-white rounded-lg p-3 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="date" name="eventDate" placeholder="Event Date" required className="bg-zinc-900 text-white rounded-lg p-3 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <select name="eventType" required className="bg-zinc-900 text-white rounded-lg p-3 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Event Type</option>
                    <option>Trade Show</option>
                    <option>Corporate Function</option>
                    <option>Gala</option>
                    <option>Product Launch</option>
                    <option>Conference</option>
                    <option>Holiday Party</option>
                    <option>VIP Dinner</option>
                    <option>Fundraiser</option>
                    <option>Employee Appreciation</option>
                    <option>Private Party</option>
                  </select>
                  <select name="budget" required className="bg-zinc-900 text-white rounded-lg p-3 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Budget Range</option>
                    <option>$1,000–$2,500</option>
                    <option>$2,500–$5,000</option>
                    <option>$5,000–$7,500</option>
                    <option>$7,500+</option>
                  </select>
                  <select name="guests" className="bg-zinc-900 text-white rounded-lg p-3 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Number of Guests</option>
                    <option>1-25</option>
                    <option>26-50</option>
                    <option>51-100</option>
                    <option>101-250</option>
                    <option>251-500</option>
                    <option>500+</option>
                  </select>
                </div>
                <textarea name="message" placeholder="Additional Details" rows={4} className="bg-zinc-900 text-white rounded-lg p-3 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"></textarea>
                <button type="submit" className="w-full bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg border border-gray-700 text-lg">Check Availability</button>
              </form>
            </div>
          </div>
        </section>

        {/* Cities We Serve Footnote */}
        <footer className="w-full py-8 bg-black text-center">
          <div className="text-gray-400 text-sm">
            <span className="font-semibold text-white">Now performing in:</span>{' '}
            <Link href="/austin-magician" className="hover:underline hover:text-white transition">Austin</Link>{', '}
            <Link href="/dallas-magician" className="hover:underline hover:text-white transition">Dallas</Link>{', '}
            <Link href="/houston-magician" className="hover:underline hover:text-white transition">Houston</Link>{', '}
            <Link href="/san-antonio-magician" className="hover:underline hover:text-white transition">San Antonio</Link>{', '}
            <Link href="/cities/orlando-magician" className="hover:underline hover:text-white transition">Orlando</Link>{', '}
            <Link href="/cities/miami-magician" className="hover:underline hover:text-white transition">Miami</Link>{', '}
            <Link href="/cities/tampa-magician" className="hover:underline hover:text-white transition">Tampa</Link>{', '}
            <Link href="/cities/los-angeles-magician" className="hover:underline hover:text-white transition">Los Angeles</Link>{', '}
            <Link href="/cities/san-diego-magician" className="hover:underline hover:text-white transition">San Diego</Link>{', '}
            <Link href="/cities/chicago-magician" className="hover:underline hover:text-white transition">Chicago</Link>{', '}
            <Link href="/cities/new-york-magician" className="hover:underline hover:text-white transition">New York</Link>{', '}
            <Link href="/cities/phoenix-magician" className="hover:underline hover:text-white transition">Phoenix</Link>{', '}
            <Link href="/cities/atlanta-magician" className="hover:underline hover:text-white transition">Atlanta</Link>{', '}
            <Link href="/cities/denver-magician" className="hover:underline hover:text-white transition">Denver</Link>
          </div>
        </footer>
      </main>
    </>
  );
} 