import { WeatherData } from '../types/types';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = async (): Promise<WeatherData> => {
  const lat = 40.40323854998008;
  const lon = -111.78802404231071;

  console.log(`Calling: https://api.openweathermap.org/data/2.5/weather?lat=40.40323854998008&lon=-111.78802404231071&units=imperial&appid=${API_KEY}`);

  const response = await fetch(
    `https://corsproxy.io/?https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`
  );

  if (!response.ok) throw new Error('Weather API failed');

  const data = await response.json();

  return {
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
  };
};