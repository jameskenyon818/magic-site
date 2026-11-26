'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { FC } from 'react';
import { usePathname } from 'next/navigation';

const Navigation: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    // Close mobile menu first
    setIsMenuOpen(false);
    
    // Wait a moment for menu to close, then scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Scroll to the element with offset for fixed header
        const headerHeight = 80; // Approximate header height
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      } else {
        // If section doesn't exist on current page, navigate to main page with hash
        if (pathname !== '/') {
          window.location.href = `/#${sectionId}`;
        } else {
          // If on main page but section still not found, try again after a short delay
          setTimeout(() => {
            const retryElement = document.getElementById(sectionId);
            if (retryElement) {
              const headerHeight = 80;
              const elementPosition = retryElement.offsetTop - headerHeight;
              window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
              });
            }
          }, 100);
        }
      }
    }, 100);
  };

  // Determine if we're on a city page and get the city name
  const isCityPage = pathname?.includes('/cities/');
  const cityName = isCityPage ? pathname.split('/')[2]?.split('-')[0] : null;
  const cityPath = isCityPage ? `/cities/${pathname.split('/')[2]}` : null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          href={cityPath || "/"} 
          className="hover:text-gray-300 transition"
        >
          <h1 className="text-lg sm:text-xl font-semibold">
            James Kenyon | Corporate Magician
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition">About</Link>
          <Link href="/blog" className="hover:text-gray-300 transition">Blog</Link>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-gray-300 transition">Testimonials</button>
          <button onClick={() => scrollToSection('clients')} className="hover:text-gray-300 transition">Clients</button>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm shadow-lg border-t border-white/10 transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-3">
            <Link
              href="/"
              className="hover:text-gray-300 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-300 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="hover:text-gray-300 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="hover:text-gray-300 transition py-2 text-left"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('clients')}
              className="hover:text-gray-300 transition py-2 text-left"
            >
              Clients
            </button>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition py-2 text-left block"
            >
              Contact
            </Link>
          </div>
        </div>
    </nav>
  );
};

export default Navigation; 