'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (!href?.startsWith('#')) return;
      
      e.preventDefault();
      const element = document.querySelector(href);
      if (!element) return;
      
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
} 