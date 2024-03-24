'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { HiOutlineStar, HiStar } from 'react-icons/hi2';
import Flag from 'react-world-flags';

export default function SearchResultsItem({ city, citiesFromDb, userToken }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const router = useRouter();

  useEffect(
    function () {
      if (
        citiesFromDb.find(
          c =>
            c.name === city.name &&
            c.latitude === city.latitude &&
            c.longitude === city.longitude,
        )
      )
        setIsFavourite(true);
    },
    [city.name, city.latitude, city.longitude, citiesFromDb],
  );

  async function handleClickFavourite() {
    setIsFavourite(isFavourite => !isFavourite);

    if (!isFavourite) {
      await fetch(`/api/cities`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(city),
      });
    }

    if (isFavourite) {
      await fetch(
        `/api/cities/${city.name}?lat=${city.latitude}&long=${city.longitude}`,
        {
          method: 'DELETE',
        },
      );
    }

    router.refresh();
  }

  return (
    <li className="search__item relative flex items-center gap-1 px-4 py-2">
      <span className="sm:text-md text-sm">
        {city.name}, {city?.admin1}
      </span>
      <Flag as="image" code={city.country_code} className="h-4" />

      {!isFavourite
        ? userToken?.email && (
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
          )
        : userToken?.email && (
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
