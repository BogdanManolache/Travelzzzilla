'use client';

import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchForm() {
  const [city, setCity] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/search?cityName=${city}`);
    setCity('');
  }

  return (
    <form
      className="mb-8 flex flex-col gap-4 sm:flex-row"
      onSubmit={handleSubmit}
    >
      <input
        className="w-60 rounded-full px-4 py-2 shadow duration-200 placeholder:text-sm focus:outline-none focus-visible:ring focus-visible:ring-slate-200 sm:focus:w-72"
        type="text"
        name="cityName"
        placeholder="Write a city name..."
        required
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <Button type="primary">Search</Button>
    </form>
  );
}
