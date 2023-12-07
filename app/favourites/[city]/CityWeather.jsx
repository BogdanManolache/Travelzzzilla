'use client';

import { useEffect, useState } from 'react';

import { getTime, getWeather } from '@/lib/helpers';

import { GiWindsock } from 'react-icons/gi';
import { IoRainyOutline } from 'react-icons/io5';
import { TbClockHour3, TbDroplet, TbTemperatureCelsius } from 'react-icons/tb';

export default function CityWeather({ latitude, longitude }) {
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
      getWeather(latitude, longitude, setWeatherData);
    },
    [latitude, longitude],
  );

  return (
    <div>
      <h4 className="mb-4 font-semibold">Current weather:</h4>
      <ul className="grid grid-cols-fluid gap-4">
        <li className="flex flex-col items-center gap-2">
          <TbTemperatureCelsius size={40} className="stroke-slate-500" />
          <span>
            {temperature} (real feel: {realFeel})
          </span>
        </li>
        <li className="flex flex-col items-center gap-2">
          <GiWindsock size={40} className="fill-slate-500" />
          <span>{windSpeed} km/h</span>
        </li>
        <li className="flex flex-col items-center gap-2">
          <IoRainyOutline size={40} className="stroke-slate-500" />
          <span>{precipitation} mm</span>
        </li>
        <li className="flex flex-col items-center gap-2">
          <TbDroplet size={40} className="stroke-slate-500" />
          <span>{humidity} %</span>
        </li>
        <li className="flex flex-col items-center gap-2">
          <TbClockHour3 size={40} className="stroke-slate-500" />
          <span>Updated at {getTime(time)}</span>
        </li>
      </ul>
    </div>
  );
}
