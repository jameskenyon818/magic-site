import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';

export default function OrlandoMagician() {
  return (
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
              Elite Corporate Entertainment in Orlando
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
              Captivate Your Orlando Audience with Extraordinary Magic
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md mt-12">
              Elevate your corporate events in Orlando with world-class entertainment that leaves a lasting impression
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

      <QuoteForm />

      {/* Performances Section */}
      <section id="performances" className="w-full bg-black py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Tailored magical experiences for every corporate occasion in Orlando
          </h2>
          <p className="text-lg md:text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            From intimate executive dinners to large-scale conferences, James offers customized performances to suit your specific event needs in Orlando.
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
              {/* Divider overlay right edge */}
              <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-white/20 z-10" />
            </div>
            {/* Stage Show Image */}
            <div className="flex flex-col relative h-full border-2 border-gray-700 rounded-2xl bg-black/80">
              <img src="/images/thumbtack 2.jpg" alt="Stage Show" className="w-full aspect-square object-cover" />
              <div className="flex-1 flex flex-col items-center p-8 text-center h-full">
                <div className="flex-1 flex flex-col justify-start">
                  <h3 className="text-2xl font-bold text-white mb-2 mt-4">Stage Show</h3>
                  <p className="text-gray-200 mb-4 text-lg">A sophisticated 30–45 minute performance combining mind-reading, illusions, and audience participation that will leave your guests amazed.</p>
                </div>
                <ul className="text-left space-y-6 w-full max-w-xs mx-auto mt-auto mb-6">
                  <li className="flex flex-col">
                    <div className="flex items-center text-gray-100"><span className="mr-2 text-lg">👥</span> Perfect for groups of 50–1000+</div>
                    <div className="text-gray-400 text-sm pl-7">Large events & conferences</div>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex items-center text-gray-100"><span className="mr-2 text-lg">⏱️</span> 30–45 minute show</div>
                    <div className="text-gray-400 text-sm pl-7">Full stage production</div>
                  </li>
                </ul>
                <Link href="/stage-show-magic" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg">Learn More</Link>
              </div>
              {/* Divider overlay right edge */}
              <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-white/20 z-10" />
            </div>
            {/* Trade Show Magic Image */}
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
      <section className="w-full bg-black py-20 px-4">
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About James Kenyon</h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            James Kenyon is a world-class corporate magician and mentalist who has performed for Fortune 500 companies and exclusive events across the globe. His unique blend of magic, mind-reading, and corporate messaging creates unforgettable experiences that leave lasting impressions.
          </p>
          <Link href="/about" className="inline-block bg-white hover:bg-gray-100 text-black font-semibold px-6 py-3 rounded-md transition-colors shadow-lg text-lg">Learn More About James</Link>
        </div>
      </section>
    </main>
  );
} 