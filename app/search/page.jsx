import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export const metadata = {
  title: 'Search cities',
};

// const cities = [
//   {
//     id: 683844,
//     name: 'Brasov',
//     latitude: 45.64861,
//     longitude: 25.60613,
//     elevation: 573,
//     feature_code: 'PPLA',
//     country_code: 'RO',
//     admin1_id: 683843,
//     admin2_id: 6691648,
//     timezone: 'Europe/Bucharest',
//     population: 276088,
//     country_id: 798549,
//     country: 'Romania',
//     admin1: 'Braşov',
//     admin2: 'Municipiul Braşov',
//   },
//   {
//     id: 571747,
//     name: 'Brasovo',
//     latitude: 52.5887,
//     longitude: 34.6099,
//     elevation: 179,
//     feature_code: 'PPL',
//     country_code: 'RU',
//     admin1_id: 571473,
//     timezone: 'Europe/Moscow',
//     country_id: 2017370,
//     country: 'Russia',
//     admin1: 'Bryansk Oblast',
//   },
//   {
//     id: 8989752,
//     name: 'Brașov-Ghimbav International Airport',
//     latitude: 45.70354,
//     longitude: 25.5209,
//     elevation: 530,
//     feature_code: 'AIRP',
//     country_code: 'RO',
//     admin1_id: 683843,
//     admin2_id: 677381,
//     timezone: 'Europe/Bucharest',
//     country_id: 798549,
//     country: 'Romania',
//     admin1: 'Braşov',
//     admin2: 'Oraş Ghimbav',
//   },
//   {
//     id: 11500079,
//     name: 'Brasov Heliport',
//     latitude: 45.65777,
//     longitude: 25.55702,
//     elevation: 543,
//     feature_code: 'AIRH',
//     country_code: 'RO',
//     admin1_id: 683843,
//     timezone: 'Europe/Bucharest',
//     country_id: 798549,
//     country: 'Romania',
//     admin1: 'Braşov',
//   },
// ];

export default async function SearchPage({ searchParams }) {
  // const cityName = 'Brasov';
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
