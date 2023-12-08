import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), { ssr: false });

export const metadata = {
  title: 'Map',
};

export default async function MapPage() {
  return <Map />;
}
