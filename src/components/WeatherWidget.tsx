// src/components/WeatherWidget.tsx
import React from 'react';
import { WeatherData } from '../types/types';

interface WeatherWidgetProps {
  weather: WeatherData;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ weather }) => {
  return (
    <div className="border p-4 rounded bg-gray-100">
      <h3 className="font-bold">Today's Weather in American Fork</h3>
      <p>{weather.temperature}°F - {weather.description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.description}
        width={50}
        height={50}
      />
    </div>
  );
};

export default WeatherWidget;
