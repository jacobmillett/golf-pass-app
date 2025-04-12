// src/hooks/useWeather.ts
import { useEffect, useState } from 'react';
import { WeatherData } from '../types/types';
import { fetchWeather } from '../utils/api';

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWeather('American Fork')
      .then(setWeather)
      .catch(() => setError('Failed to fetch weather'))
      .finally(() => setLoading(false));
  }, []);

  return { weather, loading, error };
};
