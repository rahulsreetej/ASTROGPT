import { Suspense } from 'react';
import ResultPageClient from './ResultPageClient';

export const dynamic = 'force-dynamic'; // ⬅️ This prevents static generation

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="text-white p-6">Loading result...</div>}>
      <ResultPageClient />
    </Suspense>
  );
}
