export default function SearchResults({ results }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-medium">Search results:</h3>
      <ul>
        {results.map(city => (
          <li key={city.id}>
            {city.name}, {city.country_code}
          </li>
        ))}
      </ul>
    </div>
  );
}
