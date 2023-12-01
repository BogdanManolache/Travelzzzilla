'use client';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useCities } from '@/contexts/CitiesContext';
import Flag from 'react-world-flags';

const markerIcon = new L.Icon({
  iconUrl: 'marker.png',
  iconRetinaUrl: 'marker.png',
  iconSize: [24, 41],
  iconAnchor: [12, 41],
  popupAnchor: [-3, -38],
});

export default function Map() {
  const { cities } = useCities();

  const initialLat = cities.at(-1)?.latitude || 51.478;
  const initialLong = cities.at(-1)?.longitude || 0.0014;

  return (
    <MapContainer
      center={[initialLat, initialLong]}
      zoom={8}
      scrollWheelZoom={true}
      className="h-full pl-2"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        noWrap={true}
      />
      {cities.map(city => (
        <Marker
          key={city.id}
          position={[city.latitude, city.longitude]}
          icon={markerIcon}
        >
          <Popup>
            <span>{city.name}</span>
            <Flag code={city.country_code} className="h-6 rounded-full" />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
