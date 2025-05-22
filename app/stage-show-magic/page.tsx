"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function StageShowMagicPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-4 flex flex-col items-center">
      <nav className="w-full max-w-6xl mx-auto flex justify-between items-center mb-16">
        <Link href="/" className="text-xl font-semibold">James Kenyon | Corporate Illusionist</Link>
        <Link href="/" className="bg-black border border-gray-700 px-5 py-2 rounded-lg font-semibold hover:bg-gray-900 transition-colors shadow-lg">Back to Home</Link>
      </nav>
      <div className="w-full max-w-5xl mx-auto bg-zinc-900/80 rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-zinc-900/80 pointer-events-none rounded-3xl z-0" />
        <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold mb-12 text-center tracking-tight">Stage Show Magic</h1>
        <div className="relative z-10 flex flex-col gap-6 justify-center items-center mb-12 w-full">
          <div className="flex flex-row gap-6 justify-center w-full">
            <div className="w-[500px] h-[350px] relative border border-gray-700 rounded-2xl bg-black flex-shrink-0">
              <Image src="/images/edit.png" alt="Stage Show 1" fill className="rounded-2xl object-contain bg-black" />
            </div>
            <div className="w-[500px] h-[350px] relative border border-gray-700 rounded-2xl bg-black flex-shrink-0">
              <Image src="/images/JamesKenyon_Magic_0092.jpg" alt="Stage Show 2" fill className="rounded-2xl object-contain bg-black" />
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="w-[500px] h-[350px] relative border border-gray-700 rounded-2xl bg-black flex-shrink-0">
              <Image src="/images/edit6.png" alt="Stage Show 3" fill className="rounded-2xl object-contain bg-black" />
            </div>
          </div>
        </div>
        <p className="relative z-10 text-2xl md:text-3xl text-gray-200 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          The stage show blends polished performance with audience participation, combining mind-reading, illusions, and comedy into one powerful presentation. Ideal for conferences, galas, and client events, it's designed to leave guests amazed and talking about your event long after it ends. James's stage presence, humor, and ability to connect with large audiences ensure a show that's both impressive and deeply memorable.
        </p>
        <div className="relative z-10 w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-700 mb-8">
          <video autoPlay loop muted playsInline className="w-full h-[400px] md:h-[600px] object-cover" poster="/images/edit.png">
            <source src="/videos/websitie - Made with Clipchamp.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-center items-center mt-8 w-full">
          <Link href="/#contact" className="inline-block bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg border border-gray-700 text-lg">Contact James</Link>
          <Link href="/about" className="inline-block bg-zinc-800 hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg border border-gray-700 text-lg">Learn More About James</Link>
        </div>
      </div>
    </main>
  );
} 