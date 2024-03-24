import { notFound } from 'next/navigation';
import CityGeography from './CityGeography';
import CityWeather from './CityWeather';
import CityDelete from './CityDelete';
import { getSessionToken } from '@/lib/auth';

export async function generateMetadata({ params }) {
  return {
    title: decodeURI(params.city),
  };
}

export default async function CityPage({ params, searchParams }) {
  const userToken = await getSessionToken();

  const { city: name } = params;
  const { lat: latitude, long: longitude } = searchParams;

  if (!name || !latitude || !longitude) notFound();

  return (
    <div className="relative mx-auto flex w-5/6 flex-col px-4 py-2">
      <h2 className="mt-2 text-center">Stats about {decodeURI(name)}</h2>
      {userToken?.email && (
        <CityDelete name={name} latitude={latitude} longitude={longitude} />
      )}
      <CityGeography name={name} latitude={latitude} longitude={longitude} />
      <CityWeather latitude={latitude} longitude={longitude} />
    </div>
  );
}
