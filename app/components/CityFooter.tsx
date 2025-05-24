import Link from 'next/link';

const cities = [
  { name: 'Austin', path: '/cities/austin-magician' },
  { name: 'Dallas', path: '/cities/dallas-magician' },
  { name: 'Houston', path: '/cities/houston-magician' },
  { name: 'San Antonio', path: '/cities/san-antonio-magician' },
  { name: 'Orlando', path: '/cities/orlando-magician' },
  { name: 'Miami', path: '/cities/miami-magician' },
  { name: 'Tampa', path: '/cities/tampa-magician' },
  { name: 'Los Angeles', path: '/cities/los-angeles-magician' },
  { name: 'San Diego', path: '/cities/san-diego-magician' },
  { name: 'Chicago', path: '/cities/chicago-magician' },
  { name: 'New York', path: '/cities/new-york-magician' },
  { name: 'Phoenix', path: '/cities/phoenix-magician' },
  { name: 'Atlanta', path: '/cities/atlanta-magician' },
  { name: 'Denver', path: '/cities/denver-magician' }
];

export default function CityFooter() {
  return (
    <footer className="text-center text-sm bg-black text-gray-300 pb-4 pt-8">
      <p className="mb-2">
        <strong className="text-white">Now performing in:</strong>{' '}
        {cities.map((city, index) => (
          <span key={city.name}>
            <Link 
              href={city.path}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {city.name}
            </Link>
            {index < cities.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
    </footer>
  );
} 