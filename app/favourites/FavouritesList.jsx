'use client';

import { useEffect } from 'react';
import { supabase } from '../db/supabase';
import FavouritesListItem from './FavouritesListItem';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function FavouritesList({ cities }) {
  const router = useRouter();
  useEffect(() => {
    const channel = supabase
      .channel('realtime-cities')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'cities' },
        () => router.refresh(),
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [router]);

  async function handleDeleteAll() {
    const { error, status, statusText } = await supabase
      .from('cities')
      .delete()
      .neq('id', 0);

    if (error) throw new Error(`${status}: ${statusText}`);
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
          <FavouritesListItem key={city.id} {...city} />
        ))}
      </ul>
    </div>
  );
}
