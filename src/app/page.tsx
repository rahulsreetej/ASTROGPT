'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Step 1: Charge payment
    const paymentRes = await fetch('/api/payment', {
      method: 'POST',
      body: JSON.stringify({ name, birthdate }),
    });

    if (!paymentRes.ok) {
      alert('Payment failed. Please try again.');
      return;
    }

    // Step 2: Redirect to result page with query
    router.push(`/result?name=${encodeURIComponent(name)}&birthdate=${encodeURIComponent(birthdate)}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-6">🔮 AstroGPT</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md bg-white/10 p-6 rounded-xl shadow-xl">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded-md bg-white/20 backdrop-blur-md text-white"
        />
        <input
          type="date"
          value={birthdate}
          required
          onChange={(e) => setBirthdate(e.target.value)}
          className="p-3 rounded-md bg-white/20 backdrop-blur-md text-white"
        />
        <button
          type="submit"
          className="p-3 bg-purple-600 hover:bg-purple-800 text-white rounded-md font-semibold"
        >
          🔐 Get Good News ($0.50)
        </button>
      </form>
    </main>
  );
}
