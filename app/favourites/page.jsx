import { getAllCities } from '@/lib/helpers';
import FavouritesList from './FavouritesList';

export const metadata = {
  title: 'Favourites',
};

export default async function Favourites() {
  const { cities } = (await getAllCities()) || [];

  return (
    <>
      <h2 className="mb-10 mt-4 text-center">Your favourite cities</h2>

      <FavouritesList cities={cities} />
    </>
  );
}
