'use client';

import { useCities } from '@/contexts/CitiesContext';

import FavouritesListItem from './FavouritesListItem';
import Link from 'next/link';
import Button from '@/components/Button';

export default function FavouritesList() {
  const { cities, dispatch } = useCities();

  return (
    <div className="flex flex-col">
      {cities.length !== 0 && (
        <div className="mr-2 self-end">
          <Button
            type="secondary"
            onClick={() => dispatch({ type: 'cities/deleted' })}
          >
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
          <FavouritesListItem key={city.id} {...city} />
        ))}
      </ul>
    </div>
  );
}
