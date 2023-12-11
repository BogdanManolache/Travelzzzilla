'use client';

import useCities from '@/hooks/useCities';

import { HiFlag, HiOutlineFlag, HiOutlineMapPin } from 'react-icons/hi2';
import { SlPeople } from 'react-icons/sl';
import { TbMountain, TbWorldLatitude, TbWorldLongitude } from 'react-icons/tb';
import Flag from 'react-world-flags';
import Loader from '@/app/loading';

export default function CityGeography({ latitude, longitude }) {
  const { cities } = useCities();

  const city = cities.find(city => city.latitude === +latitude);

  if (!city) return <Loader />;

  const { country, country_code, population, elevation } = city;

  return (
    <div className="mb-10 mt-2">
      <h4 className="mb-4 text-center font-semibold">Geography</h4>
      <ul className="flex flex-col items-center gap-4 p-4 text-sm lg:flex-row">
        <li className="flex w-full flex-col items-center gap-2 rounded-sm bg-slate-100 p-4 shadow-md lg:flex-1">
          <HiOutlineFlag className="stroke-slate-500" size={40} />
          <div className="flex items-center gap-2">
            <span>{country}</span>
            <Flag as="image" code={country_code} className="h-4" />
          </div>
        </li>
        {population && (
          <li className="flex w-full flex-col items-center gap-2 rounded-sm bg-slate-100 p-4 shadow-md lg:flex-1">
            <SlPeople className="fill-slate-500" size={40} />
            <span>{population}</span>
          </li>
        )}
        <li className="flex w-full items-center justify-center gap-4 rounded-sm bg-slate-100 p-4 shadow-md lg:flex-1">
          <div className="flex flex-col items-center gap-2">
            <TbWorldLatitude className="stroke-slate-500" size={40} />
            <span>{latitude}&deg;</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <TbWorldLongitude className="stroke-slate-500" size={40} />
            <span>{longitude}&deg;</span>
          </div>
        </li>
        <li className="flex w-full flex-col items-center gap-2 rounded-sm bg-slate-100 p-4 shadow-md lg:flex-1">
          <TbMountain className="stroke-slate-500" size={40} />
          <span>{elevation} m</span>
        </li>
      </ul>
    </div>
  );
}
