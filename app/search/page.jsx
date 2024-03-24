import { getCitiesFromAPI } from '@/lib/helpers';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { getSessionToken } from '@/lib/auth';

export const metadata = {
  title: 'Search cities',
};

export default async function SearchPage({ searchParams }) {
  const { cityName } = searchParams;

  const cities = await getCitiesFromAPI(cityName);

  const userToken = await getSessionToken();

  return (
    <div className="flex flex-col items-center gap-10 px-6 py-4">
      <h2>Find your next travel destination</h2>
      <SearchForm />

      <SearchResults
        cities={cities}
        cityName={cityName}
        userToken={userToken}
      />
    </div>
  );
}
