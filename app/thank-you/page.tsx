export default function ThankYou() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">
          Thanks! Your request has been received. We'll be in touch shortly.
        </h1>
        <a 
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Return to Home
        </a>
      </div>
    </main>
  );
} 