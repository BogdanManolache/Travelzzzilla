'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import Flag from 'react-world-flags';
import {
  TbBrandBooking,
  TbWorldLatitude,
  TbWorldLongitude,
} from 'react-icons/tb';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi2';

export default function FavouritesListItem({ city, topCities }) {
  const { country_code, name, latitude, longitude, admin1 } = city;

  const [isTop, setIsTop] = useState(false);
  const router = useRouter();

  useEffect(
    function () {
      if (
        topCities.find(
          c =>
            c.name === name &&
            c.latitude === latitude &&
            c.longitude === longitude,
        )
      )
        setIsTop(true);
    },
    [name, latitude, longitude, topCities],
  );

  async function handleClickHeart() {
    setIsTop(prev => !prev);

    if (!isTop) {
      await fetch(`/api/top`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, latitude, longitude, country_code }),
      });
    }

    if (isTop) {
      await fetch(`/api/top/${name}?lat=${latitude}&long=${longitude}`, {
        method: 'DELETE',
      });
    }

    router.refresh();
  }

  return (
    <li className="flex items-center justify-between gap-x-6 px-2 py-5 duration-300 hover:shadow-lg">
      <Link
        href={`/favourites/${name}?lat=${latitude}&long=${longitude}`}
        className="flex min-w-0 grow items-center gap-8"
      >
        <Flag
          as="image"
          code={country_code}
          className="w-16 flex-none rounded"
        />
        <div className="min-w-0 basis-48">
          <p className="text-sm font-semibold leading-6">{name}</p>
          <p className="mt-1 truncate text-xs leading-5 text-slate-600">
            {admin1}
          </p>
        </div>
        <div className="hidden shrink-0 grow sm:flex sm:flex-col sm:items-center">
          <p className="flex items-center gap-2 text-sm leading-6">
            <TbWorldLatitude className="stroke-slate-500" />
            <span>{latitude}&deg;</span>
          </p>
          <p className="flex items-center gap-2 text-sm leading-6">
            <TbWorldLongitude className="stroke-slate-500" />
            <span>{longitude}&deg;</span>
          </p>
        </div>
      </Link>
      <a
        href={`https://www.booking.com/searchresults.html?ss=${name}`}
        target="_blank"
      >
        <TbBrandBooking className="fill-booking stroke-white" size={48} />
      </a>
      {!isTop ? (
        <HiOutlineHeart
          size={32}
          className="cursor-pointer stroke-red-500"
          onClick={handleClickHeart}
        />
      ) : (
        <div className="group relative">
          <HiHeart
            size={32}
            className="cursor-pointer fill-red-500"
            onClick={handleClickHeart}
          />
          <p className="max-w-32 absolute -left-[150%] -top-[80%] z-10 hidden rounded-bl-md rounded-tl-md rounded-tr-xl bg-slate-200/90 px-2 py-1 text-center text-[10px] font-semibold uppercase tracking-wide text-red-500  duration-300 group-hover:block">
            Top city!
          </p>
        </div>
      )}
    </li>
  );
}
