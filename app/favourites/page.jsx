import FavouritesList from './FavouritesList';
import { supabase } from '../db/supabase';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Favourites',
};
export default async function Favourites() {
  const { data, error, status, statusText } = await supabase
    .from('cities')
    .select('*');

  if (error) throw new Error(`${status}: ${statusText}`);

  return (
    <>
      <h2 className="mb-10 mt-4 text-center">Your favourite cities</h2>

      <FavouritesList cities={data} />
    </>
  );
}
