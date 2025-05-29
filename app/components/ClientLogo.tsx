'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ClientLogo() {
  const pathname = usePathname();
  
  // Extract city from pathname if it exists
  const cityMatch = pathname.match(/\/cities\/([^\/]+)/);
  const city = cityMatch ? cityMatch[1].replace(/-magician$/, '') : undefined;
  
  // If city is provided, link to that city's homepage; otherwise, link to root
  const href = city ? `/cities/${city}-magician` : '/';
  
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