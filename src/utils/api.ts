// src/utils/api.ts
import { WeatherData } from '../types/types';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
  );
  if (!response.ok) throw new Error('Weather API failed');
  const data = await response.json();
  return {
    temperature: data.main.temp,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
  };
};
