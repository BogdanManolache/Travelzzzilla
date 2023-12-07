import { getAllCities } from '@/lib/helpers';
import CityGeography from './CityGeography';
import CityWeather from './CityWeather';
import NotFound from '@/app/not-found';

export default async function CityPage({ params, searchParams }) {
  const { city: name } = params;
  const { lat: latitude, long: longitude } = searchParams;

  const { cities } = (await getAllCities()) || [];

  const city = cities.find(city => city.latitude === +latitude);

  if (!city) return <NotFound />;
  if (!latitude || !longitude) return <NotFound />;

  return (
    <div className="mx-auto flex w-5/6 flex-col px-4 py-2">
      <h2 className="mt-2 text-center">Stats about {decodeURI(name)}</h2>
      <CityGeography city={city} />
      <CityWeather latitude={latitude} longitude={longitude} />
    </div>
  );
}
