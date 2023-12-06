import SearchResultsItem from './SearchResultsItem';

export default function SearchResults({ cities, cityName }) {
  if (!cities)
    return (
      <p className="text-sm text-slate-600">
        🗺️ Start your search by writing the name of the city you want to visit
        🗺️
      </p>
    );

  return (
    <div className="flex w-full flex-col gap-6">
      <h3 className="text-center">
        We were able to retrieve {cities.length} results for &quot;{cityName}
        &quot;:
      </h3>

      <ul className="flex w-full flex-col gap-1">
        {cities.map(city => (
          <SearchResultsItem city={city} key={city.id} />
        ))}
      </ul>
    </div>
  );
}
