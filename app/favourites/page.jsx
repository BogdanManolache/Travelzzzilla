import { getSessionToken } from '@/lib/auth';
import FavouritesList from './FavouritesList';

export const metadata = {
  title: 'Favourites',
};

export default async function Favourites() {
  const userToken = await getSessionToken();

  return (
    <>
      <h2 className="mb-10 mt-4 text-center">Your favourite destinations</h2>

      <FavouritesList userToken={userToken} />
    </>
  );
}
