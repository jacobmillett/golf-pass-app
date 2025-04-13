import { useState } from 'react';
import Calendar from '../components/Calendar';
import WeatherWidget from '../components/WeatherWidget';
import { useWeather } from '../hooks/useWeather';

export const CalendarsPage = () => {
  const [filters, setFilters] = useState({
    foxHollow: true,
    cedarHills: true,
    topgolf: true,
  });

  const { weather, loading, error } = useWeather();

  return (
    <div className="min-h-screen bg-golf-bg px-4 py-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-soft p-6 space-y-6">

        <h1 className="text-3xl font-bold text-center text-golf-green">
          Golf Pass Calendar
        </h1>

        {/* Weather Widget */}
        {loading && <p className="text-center text-gray-500">Loading weather...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        {weather && <WeatherWidget weather={weather} />}

        {/* Filter Checkboxes */}
        <div className="flex justify-center gap-6 mb-4">
          {Object.entries(filters).map(([key, value]) => (
            <label key={key} className="flex items-center space-x-2 text-sm text-club-navy capitalize">
              <input
                type="checkbox"
                className="accent-golf-green w-4 h-4"
                checked={value}
                onChange={(e) => setFilters({ ...filters, [key]: e.target.checked })}
              />
              <span>{key.replace(/([A-Z])/g, ' $1')}</span>
            </label>
          ))}
        </div>

        {/* Calendar Component */}
        <Calendar filters={filters} />
      </div>
    </div>
  );
};
