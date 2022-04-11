import { fetchRequest } from './request';

export async function getForecast(lat: string, lon: string) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
  return await fetchRequest(url);
}

export async function getListOfCities(cityName: string) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?limit=10&q=${cityName}`;
  return await fetchRequest(url);
}
