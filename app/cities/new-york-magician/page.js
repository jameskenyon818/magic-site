import Head from 'next/head';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';

export default function NewYorkMagicianPage() {
  return (
    <>
      <Head>
        <title>New York Magician | James Kenyon - Corporate Magic in New York</title>
        <meta name="description" content="Bring world-class magic to your New York event with James Kenyon, the premier New York magician for corporate events, galas, and private parties." />
      </Head>
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
          <div className="relative z-10 h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-white text-center px-4">
            <div className="space-y-8 max-w-3xl">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                Elite Corporate Entertainment in New York
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                New York's Premier Magician for Events & Trade Shows
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md">
                New York is known for its iconic skyline and vibrant business scene. James Kenyon brings world-class magic to the city's most exclusive events, from Manhattan to Brooklyn. Experience a show that will leave your guests talking long after your New York event ends.
              </p>
              <div>
                <Link 
                  href="#contact"
                  className="inline-block bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg border border-gray-700"
                >
                  Check Availability
                </Link>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 text-gray-200">
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
        {/* About Section */}
        <section id="about" className="relative w-full min-h-[480px] bg-black py-20 flex items-center justify-center" style={{ backgroundImage: "url('/images/image about.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 max-w-3xl mx-auto text-center text-white px-4 pt-80 pb-12 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Not just a magician, an experience creator</h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-10">
              With over a decade of experience performing for Fortune 500 companies and at New York's most prestigious events, James Kenyon is the top choice for corporate entertainment in New York. His unique style and engaging presence make every New York event unforgettable.
            </p>
          </div>
        </section>
        {/* Performances Section */}
        <section id="performances" className="w-full bg-black py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Tailored magical experiences for every New York occasion
            </h2>
            <p className="text-lg md:text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              From executive dinners to large-scale conferences, James offers customized performances to suit your New York event needs.
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
                  <a href="/close-up-magic" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg">Learn More</a>
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
                  <a href="/stage-show-magic" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg">Learn More</a>
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
                  <a href="/trade-show-magic" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-gray-700 text-lg">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trusted by Industry Leaders Section */}
        <section id="clients" className="w-full bg-black py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              What New York clients say about James
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-black rounded-xl border border-gray-800 shadow-lg p-8 flex flex-col items-center text-center">
                <div className="flex mb-4">{Array(5).fill(0).map((_, i) => (<span key={i} className="text-white text-xl">★</span>))}</div>
                <p className="italic text-white mb-6">"James's magic made our New York gala unforgettable. Our guests are still talking about it!"</p>
                <div className="font-bold text-white">Emily Johnson</div>
                <div className="text-gray-400 text-sm">Event Coordinator, New York Elite Events</div>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-black rounded-xl border border-gray-800 shadow-lg p-8 flex flex-col items-center text-center">
                <div className="flex mb-4">{Array(5).fill(0).map((_, i) => (<span key={i} className="text-white text-xl">★</span>))}</div>
                <p className="italic text-white mb-6">"We've hosted many events in New York, but James brought a level of sophistication and fun that was unmatched."</p>
                <div className="font-bold text-white">Brian Lee</div>
                <div className="text-gray-400 text-sm">Corporate Planner</div>
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
        {/* Booking Prompt Section */}
        <section className="w-full bg-black py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book New York's top magician for your next event</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl mx-auto">Contact James today to check availability for your New York event and discover how he can create an unforgettable experience for your guests.</p>
            <QuoteForm />
          </div>
        </section>
        {/* Cities Interlinking Footer */}
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