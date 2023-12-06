import { getAllCities } from '@/lib/helpers';
import CityGeography from './CityGeography';
import CityWeather from './CityWeather';

export default async function CityPage({ params }) {
  const { city: name } = params;

  const { cities } = (await getAllCities()) || [];

  return (
    <div className="mx-auto flex w-5/6 flex-col px-4 py-2">
      <h2 className="mt-2 text-center">Stats about {name}</h2>
      <CityGeography cities={cities} />
      <CityWeather />
    </div>
  );
}
