import Link from 'next/link';

export default function CitiesPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Cities We Serve</h1>
      <p className="text-lg text-gray-300 mb-10 text-center max-w-2xl">
        James Kenyon is now performing for corporate events, conferences, and galas in the following cities. Click a city to learn more about magical entertainment in your area!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
        <Link href="/cities/austin-magician" className="block py-4 px-6 bg-gray-900 rounded-lg hover:bg-[#b0c4de] hover:text-black font-semibold text-center transition">Austin</Link>
        <Link href="/cities/dallas-magician" className="block py-4 px-6 bg-gray-900 rounded-lg hover:bg-[#b0c4de] hover:text-black font-semibold text-center transition">Dallas</Link>
        <Link href="/cities/houston-magician" className="block py-4 px-6 bg-gray-900 rounded-lg hover:bg-[#b0c4de] hover:text-black font-semibold text-center transition">Houston</Link>
        <Link href="/cities/san-antonio-magician" className="block py-4 px-6 bg-gray-900 rounded-lg hover:bg-[#b0c4de] hover:text-black font-semibold text-center transition">San Antonio</Link>
        <Link href="/cities/orlando-magician" className="block py-4 px-6 bg-gray-900 rounded-lg hover:bg-[#b0c4de] hover:text-black font-semibold text-center transition">Orlando</Link>
        <Link href="/cities/miami-magician" className="block py-4 px-6 bg-gray-900 rounded-lg hover:bg-[#b0c4de] hover:text-black font-semibold text-center transition">Miami</Link>
        <Link href="/cities/tampa-magician" className="block py-4 px-6 bg-gray-900 rounded-lg hover:bg-[#b0c4de] hover:text-black font-semibold text-center transition">Tampa</Link>
        <Link href="/cities/los-angeles-magician" className="block py-4 px-6 bg-gray-900 rounded-lg hover:bg-[#b0c4de] hover:text-black font-semibold text-center transition">Los Angeles</Link>
        <Link href="/cities/san-diego-magician" className="block py-4 px-6 bg-gray-900 rounded-lg hover:bg-[#b0c4de] hover:text-black font-semibold text-center transition">San Diego</Link>
        <Link href="/cities/chicago-magician" className="block py-4 px-6 bg-gray-900 rounded-lg hover:bg-[#b0c4de] hover:text-black font-semibold text-center transition">Chicago</Link>
        <Link href="/cities/new-york-magician" className="block py-4 px-6 bg-gray-900 rounded-lg hover:bg-[#b0c4de] hover:text-black font-semibold text-center transition">New York</Link>
        <Link href="/cities/phoenix-magician" className="block py-4 px-6 bg-gray-900 rounded-lg hover:bg-[#b0c4de] hover:text-black font-semibold text-center transition">Phoenix</Link>
        <Link href="/cities/atlanta-magician" className="block py-4 px-6 bg-gray-900 rounded-lg hover:bg-[#b0c4de] hover:text-black font-semibold text-center transition">Atlanta</Link>
        <Link href="/cities/denver-magician" className="block py-4 px-6 bg-gray-900 rounded-lg hover:bg-[#b0c4de] hover:text-black font-semibold text-center transition">Denver</Link>
      </div>
    </main>
  );
} 