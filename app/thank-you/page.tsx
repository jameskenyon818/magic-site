import type { Metadata } from "next";

export const metadata: Metadata = { robots: { index: false, follow: false } };

import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Thank you!</h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Thank you! Your message has been sent. I&apos;ll be in touch shortly.
        </p>
        <Link
          href="/"
          className="inline-block text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg border border-white/30 hover:border-white/50"
        >
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}
