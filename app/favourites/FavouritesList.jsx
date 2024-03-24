'use client';

import { useRouter } from 'next/navigation';
import useCities from '@/hooks/useCities';
import useTopCities from '@/hooks/useTopCities';
import FavouritesListItem from './FavouritesListItem';
import Button from '@/components/Button';
import Loader from '../loading';
import Error from '../error';
import { HiTrash } from 'react-icons/hi2';

export default function FavouritesList({ userToken }) {
  const { cities, isLoading, error } = useCities();
  const {
    cities: topCities,
    isLoading: isLoadingTopCities,
    error: errorTopCities,
  } = useTopCities();

  const router = useRouter();

  async function handleDeleteAll() {
    await fetch(`/api/cities/`, {
      method: 'DELETE',
    });
    await fetch(`/api/top/`, {
      method: 'DELETE',
    });

    router.push('/search');
  }

  if (error || errorTopCities) return <Error />;
  if (isLoading || isLoadingTopCities) return <Loader />;

  return (
    <div className="flex flex-col">
      {cities.length !== 0 && userToken?.email && (
        <div className="mr-2 self-end">
          <Button type="secondary" onClick={handleDeleteAll}>
            <span>Clear All</span>
            <HiTrash
              size={16}
              className="cursor-pointer fill-slate-800 duration-300 group-hover:fill-slate-50"
            />
          </Button>
        </div>
      )}

      {cities.length === 0 && (
        <p className="mt-40 text-center">
          It seems like your list is empty. You should probably search for new
          destinations. 😁
        </p>
      )}
      <ul role="list" className="mb-2 mt-4 divide-y divide-slate-200">
        {cities.map(city => (
          <FavouritesListItem
            key={city._id}
            city={city}
            topCities={topCities}
            userToken={userToken}
          />
        ))}
      </ul>
    </div>
  );
}
