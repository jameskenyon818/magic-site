"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const logos = [
  { src: "/logos/hermes-1.svg", alt: "Hermes Logo" },
  { src: "/logos/nike-11.svg", alt: "Nike Logo" },
  { src: "/logos/nissan-6.svg", alt: "Nissan Logo" },
  { src: "/logos/p-g-2.svg", alt: "P&G Logo" },
  { src: "/logos/sxsw-stack-logo.svg", alt: "SXSW Logo" },
  { src: "/logos/virgin-1.svg", alt: "Virgin Logo" },
  { src: "/logos/hbo-max-logo-1.svg", alt: "HBO Max Logo" },
  { src: "/logos/fox-news-channel-logo-1.svg", alt: "Fox News Logo" },
  { src: "/logos/fedex-express-6.svg", alt: "FedEx Logo" },
  { src: "/logos/chase.svg", alt: "Chase Logo" },
  { src: "/logos/american-express-1.svg", alt: "American Express Logo" },
];

// Duplicate the logos for seamless looping
const allLogos = [...logos, ...logos];

export default function LogoCarousel() {
  const [offset, setOffset] = useState(0);
  const logoWidth = 160; // px (exactly the image width)
  const visibleCount = 3;
  const total = logos.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 20); // smaller interval for smoothness
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Reset offset for seamless loop
  useEffect(() => {
    if (offset >= total * logoWidth) {
      setOffset(0);
    }
  }, [offset, total]);

  return (
    <div className="bg-black p-6 rounded-xl w-full max-w-4xl overflow-hidden">
      <div className="relative w-full h-20">
        <div
          className="flex items-center absolute left-0 top-0"
          style={{
            width: `${allLogos.length * logoWidth}px`,
            transform: `translateX(-${offset}px)`,
            transition: 'transform 0.02s linear',
          }}
        >
          {allLogos.map((logo, idx) => (
            <div
              key={logo.src + idx}
              style={{ width: logoWidth, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}
              className="flex-shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="h-20 w-auto object-contain object-center p-0 m-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 