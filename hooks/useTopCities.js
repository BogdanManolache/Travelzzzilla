import { getAllTopCities } from '@/lib/helpers';
import { useEffect, useState } from 'react';

export default function useTopCities() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(function () {
    async function fetchCities() {
      setIsLoading(true);
      setError('');
      try {
        const { cities } = await getAllTopCities();
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
