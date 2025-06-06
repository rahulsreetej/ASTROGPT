'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ResultPageClient() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const birthdate = searchParams.get('birthdate');

  const [message, setMessage] = useState('');

  useEffect(() => {
    const goodNews = [
      "You're destined for success 🌟",
      "A financial surprise is coming 💰",
      "Love is around the corner ❤️",
      "Your dreams are closer than ever 🌈",
      "A big opportunity is heading your way 🚀"
    ];

    const random = Math.floor(Math.random() * goodNews.length);
    setMessage(goodNews[random]);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">🔮 Good News for {name}</h1>
      <p className="text-xl">{message}</p>
      <p className="text-sm mt-4 text-gray-400">Born on: {birthdate}</p>
    </main>
  );
}

