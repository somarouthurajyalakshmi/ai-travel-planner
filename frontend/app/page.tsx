import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center px-8">
        <h1 className="text-6xl font-bold mb-6 text-gray-900">AI Travel Planner</h1>
        <p className="text-xl mb-8 text-gray-600">Plan your dream trip with intelligent AI</p>
        <div className="space-x-4">
          <Link href="/login" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}