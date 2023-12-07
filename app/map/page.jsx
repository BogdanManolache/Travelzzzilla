import { getAllCities } from '@/lib/helpers';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), { ssr: false });

export const metadata = {
  title: 'Map',
};

export default async function MapPage() {
  const { cities } = (await getAllCities()) || [];
  return <Map cities={cities} />;
}
