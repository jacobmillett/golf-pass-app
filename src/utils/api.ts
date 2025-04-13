// src/utils/api.ts
import { WeatherData } from '../types/types';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=40.40323854998008&lon=-111.78802404231071&appid=${API_KEY}`
  );
  if (!response.ok) throw new Error('Weather API failed');
  const data = await response.json();
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;

  return {
    temperature: temperature,
    description: description,
    icon: icon,
  };
};
