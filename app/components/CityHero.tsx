import Navigation from './Navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { FC } from 'react';

interface CityHeroProps {
  cityName: string;
  heroImage: string;
}

const texts: { [key: string]: string } = {
  'Austin': "James Kenyon is Austin's leading corporate magician, delivering interactive magic that energizes meetings, conferences, and company events.",
  'Dallas': "Looking for a corporate magician in Dallas? James Kenyon brings high-impact magic to business events, trade shows, and corporate celebrations.",
  'Houston': "James Kenyon brings high-energy magic to Houston corporate events, private parties, weddings, and trade shows. As Houston's most sought-after magician, he creates unforgettable experiences that leave lasting impressions. Whether you're planning an event in downtown Houston or the surrounding areas, James delivers world-class entertainment that elevates any occasion. Trust Houston's premier magician to make your next event truly magical.",
  'San Antonio': "From executive retreats to company parties, James Kenyon brings professional corporate magic to San Antonio's most important events.",
  'Orlando': "James Kenyon is the go-to corporate magician in Orlando, helping businesses stand out at trade shows and energize team events.",
  'Miami': "Add world-class magic to your next Miami corporate function. James Kenyon delivers tailored performances that elevate business events.",
  'Tampa': "Make your Tampa corporate event unforgettable. James Kenyon's polished magic is perfect for company parties, client mixers, and brand activations.",
  'Los Angeles': "In LA's competitive event scene, James Kenyon stands out with corporate magic that captivates professional audiences.",
  'San Diego': "James Kenyon brings dynamic corporate magic to San Diego businesses, perfect for conferences, team-building, and trade shows.",
  'Chicago': "Trusted by top Chicago companies, James Kenyon delivers clean, clever corporate magic that energizes events and builds buzz.",
  'New York': "New York firms rely on James Kenyon for unforgettable corporate magic that impresses clients, executives, and event guests.",
  'Phoenix': "James Kenyon performs elite corporate magic across Phoenix, helping businesses break the ice and wow their audiences.",
  'Atlanta': "Elevate your Atlanta corporate event with James Kenyon — a magician known for energizing company parties and trade show booths.",
  'Denver': "James Kenyon is Denver's go-to magician for corporate events, offering engaging entertainment that makes business gatherings memorable."
};

const CityHero: FC<CityHeroProps> = ({ cityName, heroImage }) => {
  const defaultText = `James Kenyon brings high-energy magic to ${cityName} corporate events, private parties, weddings, and trade shows. As ${cityName}'s most sought-after magician, he creates unforgettable experiences that leave lasting impressions. Whether you're planning an event in downtown ${cityName} or the surrounding areas, James delivers world-class entertainment that elevates any occasion. Trust ${cityName}'s premier magician to make your next event truly magical.`;
  return (
    <div className="relative min-h-screen bg-black" style={{ 
      backgroundImage: `url('${heroImage}')`,
      backgroundPosition: "center top",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Navigation */}
      <Navigation />

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 pt-20 sm:pt-24">
        <div className="space-y-4 sm:space-y-6 max-w-3xl">
          <Link href="/corporate-magician" className="inline-block bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-white/20 transition">
            Corporate Magician
          </Link>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Hire a Corporate Magician in {cityName}
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-200 drop-shadow-md mt-4 sm:mt-12">
            {texts[cityName] || defaultText}
          </p>
          <div className="pt-6 sm:pt-8">
            <Link 
              href="/contact"
              className="inline-block text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors shadow-lg border border-white/30 hover:border-white/50"
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

export default CityHero; 