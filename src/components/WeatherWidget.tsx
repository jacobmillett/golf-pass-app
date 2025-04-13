// src/components/WeatherWidget.tsx
import { WeatherData } from '../types/types';

const WeatherWidget = ({ weather }: { weather: WeatherData }) => (
<div className="flex items-center gap-4 bg-white rounded shadow p-4 max-w-md mx-auto mb-6 border">
  <img
    src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
    alt={weather.description}
    className="w-12 h-12"
  />
  <div>
    <p className="text-lg font-semibold">{weather.temperature}°F</p>
    <p className="text-sm text-gray-600 capitalize">{weather.description}</p>
    <p className="text-xs text-gray-500">Feels like {weather.feelsLike}°F</p>
  </div>
</div>

);

export default WeatherWidget;