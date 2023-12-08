import { getAllCities } from '@/lib/helpers';
import { useEffect, useState } from 'react';

export default function useCities() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(function () {
    async function fetchCities() {
      setIsLoading(true);
      setError('');
      try {
        const { cities } = await getAllCities();
        setCities(cities);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return { cities, isLoading, error };
}
