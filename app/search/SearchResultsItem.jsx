'use client';

import { useCities } from '@/contexts/CitiesContext';
import { useState } from 'react';
import { HiOutlineStar, HiStar } from 'react-icons/hi2';
import Flag from 'react-world-flags';

export default function SearchResultsItem({ city }) {
  const { dispatch } = useCities();

  const [isFavourite, setIsFavourite] = useState(false);

  function handleClickFavourite() {
    setIsFavourite(isFavourite => !isFavourite);

    if (!isFavourite)
      dispatch({
        type: 'city/added',
        payload: { ...city },
      });

    if (isFavourite) dispatch({ type: 'city/deleted', payload: city.id });
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
