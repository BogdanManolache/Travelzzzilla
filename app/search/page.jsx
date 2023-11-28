import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export const metadata = {
  title: 'Search cities',
};

export default async function SearchPage({ searchParams }) {
  const { cityName } = searchParams;

  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=100&language=en&format=json`,
  );

  const { results: cities } = await res.json();

  return (
    <div className="flex flex-col items-center gap-10 px-6 py-4">
      <h2>Find your next travel destination</h2>
      <SearchForm />

      <SearchResults cities={cities} city={cityName} />
    </div>
  );
}
