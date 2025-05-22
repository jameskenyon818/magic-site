"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

const slideshowImages = [
  '/images/IMG_0006.PNG',
  '/images/IMG_0007.PNG',
  '/images/IMG_0008.PNG',
  '/images/IMG_0009.PNG',
  '/images/IMG_0015.PNG',
  '/images/webiste.PNG',
];

export default function AboutPage() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slideshowImages.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [current, slideshowImages.length]);

  return (
    <main className="min-h-screen bg-black text-white py-20 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-10">More Than Magic: Meet James the Person</h1>
        {/* Large Slideshow */}
        <div className="relative flex flex-col items-center mb-12">
          <div className="w-full flex justify-center items-center relative" style={{ aspectRatio: '16/9', maxWidth: '700px', minHeight: 'unset', height: '400px' }}>
            <button onClick={prevSlide} className="absolute left-0 z-10 bg-black/60 hover:bg-black text-white rounded-full p-3 top-1/2 -translate-y-1/2"><span className="text-3xl">&#8592;</span></button>
            <div className="w-full h-full flex items-center justify-center">
              <Image src={slideshowImages[current]} alt={`James Kenyon personal ${current+1}`} fill style={{ objectFit: 'cover' }} className="rounded-3xl shadow-2xl border-4 border-white/10" />
            </div>
            <button onClick={nextSlide} className="absolute right-0 z-10 bg-black/60 hover:bg-black text-white rounded-full p-3 top-1/2 -translate-y-1/2"><span className="text-3xl">&#8594;</span></button>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {slideshowImages.map((_, idx) => (
              <button key={idx} onClick={() => setCurrent(idx)} className={`w-4 h-4 rounded-full ${current === idx ? 'bg-white' : 'bg-gray-600'}`}></button>
            ))}
          </div>
        </div>
        <div className="bg-zinc-900/80 rounded-2xl p-10 mb-10 shadow-lg text-left text-lg md:text-xl max-w-2xl mx-auto">
          <p className="mb-6">
            Off stage, I&apos;m a husband and a dad to four amazing kids. Life at home is full of energy, noise, and little moments that remind me what really matters. My wife and I have been building our life together for over ten years, and everything I do—on stage or off—is shaped by the love and chaos we share as a family.
          </p>
          <p className="mb-6">
            Our days are full of card tricks at the breakfast table, story time that turns into pillow fights, and kitchen counters cluttered with school projects and half-shuffled decks. It&apos;s perfectly imperfect, and I wouldn&apos;t trade it for anything. And it&apos;s in that everyday mess that I find the kind of joy and connection that inspires everything I bring to my shows.
          </p>
          <p className="mb-6">
            My family keeps me grounded. They remind me that the most meaningful moments usually happen when no one&apos;s watching—when you&apos;re present, paying attention, and really seeing the people around you. That&apos;s what I try to bring into every performance. Not just entertainment, but something that feels real and personal.
          </p>
          <p>
            At the end of the day, I don&apos;t see magic as something that sets me apart—it&apos;s something that helps me connect. And that starts with the people I come home to.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center mt-8">
        <a href="/#contact" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg border border-gray-700 text-lg">Contact James</a>
      </div>
    </main>
  );
} 