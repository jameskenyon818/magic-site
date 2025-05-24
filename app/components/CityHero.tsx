import Link from 'next/link';
import Image from 'next/image';

interface CityHeroProps {
  cityName: string;
  heroImage: string;
}

export default function CityHero({ cityName, heroImage }: CityHeroProps) {
  return (
    <div className="relative h-screen bg-black" style={{ 
      backgroundImage: `url('${heroImage}')`,
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
      <div className="relative z-10 h-[calc(100vh-4rem)] flex flex-col items-center justify-start text-white text-center px-4 sm:px-6 pt-12 sm:pt-24">
        <div className="space-y-4 sm:space-y-6 max-w-3xl">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
            Elite Corporate Entertainment
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Hire a Magician in {cityName} – Corporate Events
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-200 drop-shadow-md mt-4 sm:mt-12">
            James Kenyon brings high-energy magic to {cityName} corporate events, trade shows, weddings, and private parties. As {cityName}'s most sought-after corporate magician, he creates unforgettable experiences that leave lasting impressions. Whether you're planning an event in downtown {cityName} or the surrounding areas, James delivers world-class entertainment that elevates any occasion. Trust {cityName}'s premier magician to make your next event truly magical.
          </p>
          <div className="pt-6 sm:pt-8">
            <Link 
              href="#contact"
              className="inline-block bg-black hover:bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors shadow-lg border border-gray-700"
            >
              Check Availability
            </Link>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-6 sm:pt-8 text-gray-200">
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl">✨</span>
              <span className="text-sm sm:text-base">10+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl">🏢</span>
              <span className="text-sm sm:text-base">Fortune 500 Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl">🌍</span>
              <span className="text-sm sm:text-base">International Performer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 