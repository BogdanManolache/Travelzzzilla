import { HiOutlineMapPin } from 'react-icons/hi2';
import { SlPeople } from 'react-icons/sl';
import { TbMountain, TbWorldLatitude, TbWorldLongitude } from 'react-icons/tb';
import Flag from 'react-world-flags';

export default function CityGeography({ city }) {
  const { country, country_code, population, elevation, latitude, longitude } =
    city;

  return (
    <div className="mb-10">
      <h4 className="mb-4 font-semibold">Geography:</h4>
      <ul className="flex flex-col items-center gap-2">
        <li className="flex items-center gap-2">
          <p className="flex items-center gap-2">
            <HiOutlineMapPin className="stroke-slate-500" />
            <span>Country: {country}</span>
          </p>
          <Flag as="image" code={country_code} className="h-4" />
        </li>
        <li>
          {population && (
            <p className="flex items-center gap-2">
              <SlPeople className="fill-slate-500" />
              <span>Population: {population}</span>
            </p>
          )}
        </li>
        <li className="flex items-center justify-center gap-8">
          <p className="flex items-center justify-center gap-2">
            <TbWorldLatitude className="stroke-slate-500" />
            <span>Latitude: {latitude}&deg;</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <TbWorldLongitude className="stroke-slate-500" />
            <span>Longitude: {longitude}&deg;</span>
          </p>
        </li>
        <li>
          <p className="flex items-center gap-2">
            <TbMountain className="stroke-slate-500" />
            <span>Elevation: {elevation} m</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
