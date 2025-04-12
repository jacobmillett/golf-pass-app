// src/pages/CalendarsPage.tsx
import { useState } from 'react';
import Calendar from '../components/Calendar';
import WeatherWidget from '../components/WeatherWidget';
import { useWeather } from '../hooks/useWeather';
import { useAuth } from '../hooks/useAuth';

export const CalendarsPage = () => {
  const { weather, loading, error } = useWeather();
  const { user } = useAuth();

  const [filters, setFilters] = useState({
    foxHollow: user?.permissions.foxHollow || false,
    cedarHills: user?.permissions.cedarHills || false,
    topgolf: user?.permissions.topgolf || false,
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Golf Reservations</h1>

      {/* Weather Widget */}
      <div className="mb-4">
        {loading && <p>Loading weather...</p>}
        {error && <p>Error: {error}</p>}
        {weather && <WeatherWidget weather={weather} />}
      </div>

      {/* Filter toggles */}
      <div className="mb-4">
        <label className="mr-4">
          <input type="checkbox"
            checked={filters.foxHollow}
            onChange={(e) => setFilters({ ...filters, foxHollow: e.target.checked })}
          /> Fox Hollow
        </label>
        <label className="mr-4">
          <input type="checkbox"
            checked={filters.cedarHills}
            onChange={(e) => setFilters({ ...filters, cedarHills: e.target.checked })}
          /> Cedar Hills
        </label>
        <label>
          <input type="checkbox"
            checked={filters.topgolf}
            onChange={(e) => setFilters({ ...filters, topgolf: e.target.checked })}
          /> Topgolf
        </label>
      </div>

      {/* Calendars */}
      <Calendar filters={filters} />
    </div>
  );
};
