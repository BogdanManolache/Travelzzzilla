'use client';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const markerIcon = new L.Icon({
  iconUrl: 'marker.png',
  iconRetinaUrl: 'marker.png',
  iconSize: [24, 41],
  iconAnchor: [12, 41],
  popupAnchor: [-3, -38],
});

export default function Map() {
  return (
    <MapContainer
      center={[45.65, 25.6]}
      zoom={11}
      scrollWheelZoom={true}
      className="h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        noWrap={true}
      />
      <Marker position={[45.65, 25.6]} icon={markerIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
