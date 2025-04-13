import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useWeather } from '../hooks/useWeather';
import Calendar from '../components/Calendar';
import WeatherWidget from '../components/WeatherWidget';

export const CalendarsPage = () => {
  const { weather, loading, error } = useWeather();
  const { user } = useAuth();

  const [filters, setFilters] = useState({
    foxHollow: user?.permissions.foxHollow || false,
    cedarHills: user?.permissions.cedarHills || false,
    topgolf: user?.permissions.topgolf || false,
  });

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Golf Reservations</h1>
  
        {loading && <p className="text-center text-gray-500">Loading weather...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        {weather && <WeatherWidget weather={weather} />}
  
        <div className="flex justify-center gap-6">
          <label className="flex items-center gap-2 text-gray-700 text-sm">
            <input type="checkbox" checked={filters.foxHollow} onChange={(e) => setFilters({ ...filters, foxHollow: e.target.checked })} />
            Fox Hollow
          </label>
          <label className="flex items-center gap-2 text-gray-700 text-sm">
            <input type="checkbox" checked={filters.cedarHills} onChange={(e) => setFilters({ ...filters, cedarHills: e.target.checked })} />
            Cedar Hills
          </label>
          <label className="flex items-center gap-2 text-gray-700 text-sm">
            <input type="checkbox" checked={filters.topgolf} onChange={(e) => setFilters({ ...filters, topgolf: e.target.checked })} />
            Topgolf
          </label>
        </div>
  
        <Calendar filters={filters} />
      </div>
    </div>
  );
  
};
