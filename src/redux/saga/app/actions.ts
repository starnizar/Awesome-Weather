import {
  FETCH_FORECAST,
  FETCH_LIST_OF_CITIES,
  SET_CITIES_LIST,
  TOGGLE_CITY_INPUT,
} from '../../store/types';
import {
  SET_COORDS,
  SET_FORECAST,
  TOGGLE_TEMPERATURE_UNIT,
} from '../../store/types';

export const fetchForecast = (lat, lon) => ({ type: FETCH_FORECAST, lat, lon });
export const fetchListOfCities = cityName => ({
  type: FETCH_LIST_OF_CITIES,
  cityName,
});

export const setCoords = coords => ({ type: SET_COORDS, payload: coords });
export const setForecast = forecast => ({
  type: SET_FORECAST,
  payload: forecast,
});
export const toggleTemperatureUnit = () => ({ type: TOGGLE_TEMPERATURE_UNIT });
export const toggleCityInput = () => ({ type: TOGGLE_CITY_INPUT });
export const setListOfCities = list => ({
  type: SET_CITIES_LIST,
  payload: list,
});
