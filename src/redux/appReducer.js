import { SET_COORDS, SET_FORECAST, TOGGLE_TEMPERATURE_UNIT } from './types';

const initialState = {
  city: '',
  temperatureUnit: true,
  forecast: null,
  coords: {
    lon: null,
    lat: null,
  },
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COORDS:
      return { ...state, coords: action.payload };
    case SET_FORECAST:
      return { ...state, forecast: action.payload };
    case TOGGLE_TEMPERATURE_UNIT:
      return { ...state, temperatureUnit: !state.temperatureUnit };
    default:
      return state;
  }
};
