'use client';
// hooks
import { useEffect, useState } from 'react';
import { useCities } from '@/contexts/CitiesContext';
import { useSearchParams } from 'next/navigation';
//helper functions
import { getTime, getWeather } from '@/lib/helpers';
// components
import NotFound from '@/app/not-found';
import Flag from 'react-world-flags';
import { SlPeople } from 'react-icons/sl';
import { HiOutlineMapPin } from 'react-icons/hi2';
import {
  TbMountain,
  TbWorldLatitude,
  TbWorldLongitude,
  TbTemperatureCelsius,
  TbDroplet,
  TbClockHour3,
} from 'react-icons/tb';
import { GiWindsock } from 'react-icons/gi';
import { IoRainyOutline } from 'react-icons/io5';

export default function CityPage() {
  const [weatherData, setWeatherData] = useState({});
  const {
    temperature_2m: temperature,
    apparent_temperature: realFeel,
    precipitation,
    wind_speed_10m: windSpeed,
    relative_humidity_2m: humidity,
    time,
  } = weatherData;

  console.log(weatherData);
  const params = useSearchParams();
  const lat = +params.get('lat');
  const long = +params.get('long');

  const { cities } = useCities();
  const city = cities.find(city => city.latitude === lat);
  const { name, country, country_code, population, elevation } = city;

  useEffect(
    function () {
      getWeather(lat, long, setWeatherData);
    },
    [lat, long],
  );

  if (!lat || !long) return <NotFound />;

  return (
    <div className="mx-auto flex w-5/6 flex-col px-4 py-2">
      <h2 className="mt-2 text-center">Stats about {name}</h2>
      <div className="mb-10">
        <h4 className="mb-4 font-semibold">Geography:</h4>
        <ul className="flex flex-col items-center gap-2">
          <li className="flex items-center gap-2">
            <p className="flex items-center gap-2">
              <HiOutlineMapPin className="stroke-slate-500" />
              <span>Country: {country}</span>
            </p>
            <Flag as="image" code={country_code} className="h-4" />
          </li>
          <li>
            {population && (
              <p className="flex items-center gap-2">
                <SlPeople className="fill-slate-500" />
                <span>Population: {population}</span>
              </p>
            )}
          </li>
          <li className="flex items-center justify-center gap-8">
            <p className="flex items-center justify-center gap-2">
              <TbWorldLatitude className="stroke-slate-500" />
              <span>Latitude: {lat}&deg;</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <TbWorldLongitude className="stroke-slate-500" />
              <span>Longitude: {long}&deg;</span>
            </p>
          </li>
          <li>
            <p className="flex items-center gap-2">
              <TbMountain className="stroke-slate-500" />
              <span>Elevation: {elevation} m</span>
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="mb-4 font-semibold">Current weather:</h4>
        <ul className="grid grid-cols-fluid gap-4">
          <li className="flex flex-col items-center gap-2">
            <TbTemperatureCelsius size={40} className="stroke-slate-500" />
            <span>
              {temperature} (real feel: {realFeel})
              {/* 2.5&deg;C (real feel: 1.2&deg;C) */}
            </span>
          </li>
          <li className="flex flex-col items-center gap-2">
            <GiWindsock size={40} className="fill-slate-500" />
            <span>{windSpeed} km/h</span>
            {/* <span>20 km/h</span> */}
          </li>
          <li className="flex flex-col items-center gap-2">
            <IoRainyOutline size={40} className="stroke-slate-500" />
            <span>{precipitation} mm</span>
            {/* <span>0 mm</span> */}
          </li>
          <li className="flex flex-col items-center gap-2">
            <TbDroplet size={40} className="stroke-slate-500" />
            <span>{humidity} %</span>
            {/* <span>22 %</span> */}
          </li>
          <li className="flex flex-col items-center gap-2">
            <TbClockHour3 size={40} className="stroke-slate-500" />
            <span>Updated at {getTime(time)}</span>
            {/* <span>Updated at 15:15 </span> */}
          </li>
        </ul>
      </div>
    </div>
  );
}
