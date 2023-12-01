import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), { ssr: false });

export const metadata = {
  title: 'Map',
};

export default function MapPage() {
  return <Map />;
}
