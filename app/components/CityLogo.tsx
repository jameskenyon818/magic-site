import Image from 'next/image';
import Link from 'next/link';

interface CityLogoProps {
  city?: string;
  position?: 'top' | 'bottom';
}

export default function CityLogo({ city, position = 'top' }: CityLogoProps) {
  // If city is provided, link to that city's homepage; otherwise, link to root
  const href = city ? `/cities/${city.toLowerCase().replace(/ /g, '-')}-magician` : '/';
  
  return (
    <div className={`fixed ${position === 'top' ? 'top-4' : 'bottom-4'} right-4 z-50`}>
      <Link href={href}>
        <Image
          src="/images/logo.webp"
          alt="James Kenyon Magic Logo"
          width={48}
          height={48}
          className="hover:scale-105 transition-transform"
          priority
        />
      </Link>
    </div>
  );
} 