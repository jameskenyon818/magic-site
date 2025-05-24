import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import Image from 'next/image';
import LogoCarousel from '../../components/LogoCarousel';
import ChicagoStructuredData from '../../components/ChicagoStructuredData';

export default function ChicagoMagicianPage() {
  return (
    <>
      <ChicagoStructuredData />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative min-h-screen bg-black" style={{ 
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
          <div className="relative z-10 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-start text-white text-center px-4 pt-24">
            <div className="space-y-6 max-w-3xl">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                Elite Corporate Entertainment
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
                Hire Magician in Chicago for Corporate Events & Parties
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md mt-12">
                James Kenyon brings high-energy magic to Chicago corporate events, trade shows, weddings, and private parties. As Chicago's most sought-after corporate magician, he creates unforgettable experiences that leave lasting impressions. Whether you're planning an event in downtown Chicago or the surrounding areas, James delivers world-class entertainment that elevates any occasion. Trust Chicago's premier magician to make your next event truly magical.
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

        {/* Performances Section */}
        <section id="performances" className="w-full bg-black py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Tailored magical experiences for every corporate occasion in Chicago
            </h2>
            <p className="text-lg md:text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              From intimate executive dinners to large-scale conferences, James offers customized performances to suit your specific event needs in Chicago.
            </p>
            {/* Images Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
              {/* Close-Up Magic Image */}
              <div className="flex flex-col relative h-full border-2 border-gray-700 rounded-2xl bg-black/80">
                <div className="relative w-full aspect-square">
                  <Image 
                    src="/images/edit5.png" 
                    alt="Close-Up Magic" 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                    quality={85}
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPj4+ODhAQEBAR0hHSEdIS0hISEhISEhISEj/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
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
                <div className="relative w-full aspect-square">
                  <Image 
                    src="/images/thumbtack 2.jpg" 
                    alt="Stage Show" 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                    quality={85}
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPj4+ODhAQEBAR0hHSEdIS0hISEhISEhISEj/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
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
                <div className="relative w-full aspect-square">
                  <Image 
                    src="/images/IMG_5401.JPG" 
                    alt="Trade Show Magic" 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                    quality={85}
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPj4+ODhAQEBAR0hHSEdIS0hISEhISEhISEj/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
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
      </main>
    </>
  );
} 