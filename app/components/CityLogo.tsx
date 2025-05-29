import Image from 'next/image';
import Link from 'next/link';

interface CityLogoProps {
  city?: string;
}

export default function CityLogo({ city }: CityLogoProps) {
  // If city is provided, link to that city's homepage; otherwise, link to root
  const href = city ? `/cities/${city.toLowerCase().replace(/ /g, '-')}-magician` : '/';
  
  return (
    <div className="fixed top-4 right-4 z-50">
      <Link href={href}>
        <Image
          src="/images/logo.webp"
          alt="James Kenyon Magic Logo"
          width={96}
          height={96}
          className="hover:scale-105 transition-transform"
          priority
        />
      </Link>
    </div>
  );
} 