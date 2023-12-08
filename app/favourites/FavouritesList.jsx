'use client';

import { useRouter } from 'next/navigation';
import useCities from '@/hooks/useCities';
import FavouritesListItem from './FavouritesListItem';
import Button from '@/components/Button';
import Loader from '../loading';
import Error from '../error';
import { HiTrash } from 'react-icons/hi2';

export default function FavouritesList() {
  const { cities, isLoading, error } = useCities();

  const router = useRouter();

  async function handleDeleteAll() {
    await fetch(`/api/cities/`, {
      method: 'DELETE',
    });

    router.push('/search');
  }

  if (error) return <Error />;
  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col">
      {cities.length !== 0 && (
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
      <ul role="list" className="mb-2 divide-y divide-slate-200">
        {cities.map(city => (
          <FavouritesListItem key={city._id} {...city} />
        ))}
      </ul>
    </div>
  );
}
