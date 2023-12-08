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

export async function getCitiesFromAPI(cityName) {
  try {
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=100&language=en&format=json`,
    );

    if (!res.ok)
      throw new Error('Something went wrong. Could not fetch cities data.');

    const { results: cities } = await res.json();
    return cities;
  } catch (error) {
    throw error;
  }
}

export async function getAllCities() {
  try {
    const res = await fetch(`/api/cities`, {
      cache: 'no-store',
    });
    if (!res.ok)
      throw new Error(
        'Something went wrong. Could not fetch cities from database.',
      );

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
