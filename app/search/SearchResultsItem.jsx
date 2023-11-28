'use client';

import { useState } from 'react';
import { HiOutlineStar, HiStar } from 'react-icons/hi2';
import Flag from 'react-world-flags';

export default function SearchResultsItem({ city }) {
  const [isFavourite, setIsFavourite] = useState(false);

  function handleClickFavourite() {
    setIsFavourite(isFavourite => !isFavourite);
  }

  return (
    <li className="search__item relative flex items-center gap-1 px-4 py-2">
      <span>
        {city.name}, {city?.admin1} ({city.country || city.country_code})
      </span>
      <span>
        <Flag code={city.country_code} className="h-4" />
      </span>
      {!isFavourite ? (
        <HiOutlineStar
          className="ml-auto cursor-pointer stroke-orange-500"
          size={28}
          onClick={handleClickFavourite}
        />
      ) : (
        <HiStar
          className="ml-auto cursor-pointer fill-orange-500"
          size={28}
          onClick={handleClickFavourite}
        />
      )}
    </li>
  );
}
