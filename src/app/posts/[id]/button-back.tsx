'use client';

import { useRouter } from 'next/navigation';

export default function ButtonBack() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push('/')}
      className="bg-blue-500 px-4 py-2 rounded text-white cursor-pointer">
      Back
    </button>
  );
}
