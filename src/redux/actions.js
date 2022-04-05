import { SET_COORDS, SET_FORECAST, TOGGLE_TEMPERATURE_UNIT } from './types';

export const setCoords = coords => ({ type: SET_COORDS, payload: coords });
export const setForecast = forecast => ({
  type: SET_FORECAST,
  payload: forecast,
});
export const toggleTemperatureUnit = () => ({ type: TOGGLE_TEMPERATURE_UNIT });
