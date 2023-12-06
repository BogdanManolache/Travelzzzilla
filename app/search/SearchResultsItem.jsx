'use client';

import { useState } from 'react';
import { HiOutlineStar, HiStar } from 'react-icons/hi2';
import Flag from 'react-world-flags';
import { supabase } from '../db/supabase';

export default function SearchResultsItem({ city }) {
  const [isFavourite, setIsFavourite] = useState(false);

  async function handleClickFavourite() {
    setIsFavourite(isFavourite => !isFavourite);

    if (!isFavourite) {
      await supabase.from('cities').insert([
        {
          name: city.name,
          latitude: city.latitude,
          longitude: city.longitude,
          elevation: city.elevation,
          country_code: city.country_code,
          country: city.country,
          admin1: city.admin1,
          population: city?.population,
        },
      ]);
    }

    if (isFavourite) {
      await supabase.from('cities').delete().eq('id', city.id);
    }
  }

  return (
    <li className="search__item relative flex items-center gap-1 px-4 py-2">
      <span className="sm:text-md text-sm">
        {city.name}, {city?.admin1}
      </span>
      <Flag as="image" code={city.country_code} className="h-4" />

      {!isFavourite ? (
        <div className="group relative ml-auto">
          <HiOutlineStar
            className=" cursor-pointer stroke-orange-500"
            size={28}
            onClick={handleClickFavourite}
          />
          <p className="max-w-32 absolute -left-[375%] -top-[120%] z-10 hidden rounded-bl-md rounded-tl-md rounded-tr-xl bg-slate-400/25 px-2 py-1 text-center text-[10px] font-semibold uppercase tracking-wide text-orange-500  duration-300 group-hover:block">
            Add favourite
          </p>
        </div>
      ) : (
        <div className="group relative ml-auto">
          <HiStar
            className="ml-auto cursor-pointer fill-orange-500"
            size={28}
            onClick={handleClickFavourite}
          />
          <p className="max-w-32 absolute -left-[450%] -top-[120%] z-10 hidden rounded-bl-md rounded-tl-md rounded-tr-xl bg-slate-400/25 px-2 py-1 text-center text-[10px] font-semibold uppercase tracking-wide text-orange-500  duration-300 group-hover:block">
            remove favourite
          </p>
        </div>
      )}
    </li>
  );
}
