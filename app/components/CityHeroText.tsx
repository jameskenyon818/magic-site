import type { FC } from 'react';

interface CityHeroTextProps {
  cityName: string;
}

const CityHeroText: FC<CityHeroTextProps> = ({ cityName }) => {
  const texts: { [key: string]: string } = {
    'Austin': "James Kenyon is Austin's leading corporate magician, delivering interactive magic that energizes meetings, conferences, and company events.",
    'Dallas': "Looking for a corporate magician in Dallas? James Kenyon brings high-impact magic to business events, trade shows, and corporate celebrations.",
    'Houston': "Houston companies trust James Kenyon to deliver corporate magic that entertains, engages, and leaves lasting impressions on clients and employees.",
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

  return (
    <p className="text-base sm:text-xl md:text-2xl text-gray-200 drop-shadow-md mt-4 sm:mt-12">
      {texts[cityName] || `James Kenyon brings high-energy magic to ${cityName} corporate events, private parties, weddings, and trade shows. As ${cityName}'s most sought-after magician, he creates unforgettable experiences that leave lasting impressions. Whether you're planning an event in downtown ${cityName} or the surrounding areas, James delivers world-class entertainment that elevates any occasion. Trust ${cityName}'s premier magician to make your next event truly magical.`}
    </p>
  );
};

export default CityHeroText; 