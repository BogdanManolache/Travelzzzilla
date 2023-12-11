'use client';

import { useEffect, useState } from 'react';

import { getTime, getWeather } from '@/lib/helpers';

import { GiWindsock } from 'react-icons/gi';
import { IoRainyOutline } from 'react-icons/io5';
import { TbClockHour3, TbDroplet, TbTemperatureCelsius } from 'react-icons/tb';
import Loader from '@/app/loading';

export default function CityWeather({ latitude, longitude }) {
  const [isLoading, setIsLoading] = useState(true);

  const [weatherData, setWeatherData] = useState({});
  const {
    temperature_2m: temperature,
    apparent_temperature: realFeel,
    precipitation,
    wind_speed_10m: windSpeed,
    relative_humidity_2m: humidity,
    time,
  } = weatherData;

  useEffect(
    function () {
      try {
        getWeather(latitude, longitude, setWeatherData);
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [latitude, longitude],
  );

  if (isLoading) return <Loader />;

  return (
    <div>
      <h4 className="mb-4 text-center font-semibold">Current weather</h4>
      <ul className="flex flex-col items-center justify-between gap-4 p-4 text-sm lg:flex-row">
        <li className="flex w-full flex-col items-center gap-3 self-stretch rounded-sm bg-slate-100 p-4 shadow-md lg:flex-1">
          <TbTemperatureCelsius size={40} className="stroke-slate-500" />
          <span>
            {temperature} (real feel: {realFeel})
          </span>
        </li>
        <li className="flex w-full flex-col items-center gap-3 self-stretch rounded-sm bg-slate-100 p-4 shadow-md lg:flex-1">
          <GiWindsock size={40} className="fill-slate-500" />
          <span>{windSpeed} km/h</span>
        </li>
        <li className="flex w-full flex-col items-center gap-3 self-stretch rounded-sm bg-slate-100 p-4 shadow-md lg:flex-1">
          <IoRainyOutline size={40} className="stroke-slate-500" />
          <span>{precipitation} mm</span>
        </li>
        <li className="flex w-full flex-col items-center gap-3 self-stretch rounded-sm bg-slate-100 p-4 shadow-md lg:flex-1">
          <TbDroplet size={40} className="stroke-slate-500" />
          <span>{humidity} %</span>
        </li>
        <li className="flex w-full flex-col items-center gap-3 self-stretch rounded-sm bg-slate-100 p-4 shadow-md lg:flex-1">
          <TbClockHour3 size={40} className="stroke-slate-500" />
          <span>Updated at {getTime(time)}</span>
        </li>
      </ul>
    </div>
  );
}
