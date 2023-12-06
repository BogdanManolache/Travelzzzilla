'use client';

import { useRouter } from 'next/navigation';
import FavouritesListItem from './FavouritesListItem';
import Button from '@/components/Button';

export default function FavouritesList({ cities = [] }) {
  const router = useRouter();

  async function handleDeleteAll() {
    await fetch(`http://localhost:3000/api/cities/`, {
      method: 'DELETE',
    });
    router.refresh();
  }

  return (
    <div className="flex flex-col">
      {cities.length !== 0 && (
        <div className="mr-2 self-end">
          <Button type="secondary" onClick={handleDeleteAll}>
            Clear All
          </Button>
        </div>
      )}

      {cities.length === 0 && (
        <p className="mt-40 text-center">
          It seems like your list is empty. You should probably search for new
          destinations. 😁
        </p>
      )}
      <ul role="list" className="mb-2 divide-y divide-slate-200">
        {cities.map(city => (
          <FavouritesListItem key={city._id} {...city} />
        ))}
      </ul>
    </div>
  );
}
