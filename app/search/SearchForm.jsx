import Button from '@/components/Button';

export default function SearchForm() {
  return (
    <form className="flex gap-4">
      <input
        className="w-60 rounded-full px-4 py-2 shadow duration-200 placeholder:text-sm focus:w-72 focus:outline-none focus-visible:ring focus-visible:ring-slate-200"
        type="text"
        name="cityName"
        placeholder="Write a city name..."
        required
      />
      <Button>Search</Button>
    </form>
  );
}
