import { supabase } from '@/app/db/supabase';

export async function getWeather(lat, long, setFn) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m`,
  );

  const data = await res.json();

  setFn(data.current);
}

export function getTime(utcDateStr) {
  const timezoneOffset = new Date(utcDateStr).getTimezoneOffset();
  const localTime = new Date(
    new Date(utcDateStr).getTime() - timezoneOffset * 60 * 1000,
  );

  const hours = localTime.getHours() + '';
  const minutes = localTime.getMinutes() + '';

  return `${hours.length < 2 ? hours.padStart(2, '0') : hours}:${
    minutes.length < 2 ? minutes.padStart(2, '0') : minutes
  }`;
}

// {
//   error: null,
//   data: [
//     {
//       id: 1,
//       created_at: '2023-12-04T20:59:38.272138+00:00',
//       name: 'Brasov',
//       latitude: 45.6486,
//       longitude: 25.6061,
//       elevation: 573,
//       country_code: 'RO',
//       country: 'Romania',
//       admin1: 'Brasov',
//       population: 276088
//     }
//   ],
//   count: null,
//   status: 200,
//   statusText: ''
// }
