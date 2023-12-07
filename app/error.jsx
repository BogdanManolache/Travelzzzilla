'use client';

import Button from '@/components/Button';

export default function Error({ error, reset }) {
  return (
    <div className="grid min-h-full place-items-center bg-slate-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          {error.message}
        </h1>
        <p className="mb-10 mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn&apos;t retrieve the requested information.
        </p>
        <Button type="secondary" onClick={() => reset()}>
          Try again
        </Button>
      </div>
    </div>
  );
}
