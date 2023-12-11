'use client';

import { useRouter } from 'next/navigation';
import { HiTrash } from 'react-icons/hi2';

export default function CityDelete({ name, latitude, longitude }) {
  const router = useRouter();

  async function handleDeleteCity() {
    await fetch(`/api/cities/${name}?lat=${latitude}&long=${longitude}`, {
      method: 'DELETE',
    });
    await fetch(`/api/top/${name}?lat=${latitude}&long=${longitude}`, {
      method: 'DELETE',
    });

    router.push('/favourites');
  }

  return (
    <div className="group relative mb-6 self-end">
      <HiTrash
        size={32}
        className="cursor-pointer fill-orange-500 duration-300 hover:fill-orange-600"
        onClick={handleDeleteCity}
      />
      <p className="max-w-32 absolute -left-[350%] -top-[100%] z-10 hidden rounded-bl-md rounded-tl-md rounded-tr-xl bg-slate-400/25 px-2 py-1 text-center text-[10px] font-semibold uppercase tracking-wide text-orange-500  duration-300 group-hover:block">
        remove favourite
      </p>
    </div>
  );
}
