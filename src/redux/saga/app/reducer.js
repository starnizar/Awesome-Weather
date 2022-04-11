import {
  SET_CITIES_LIST,
  SET_COORDS,
  SET_FORECAST,
  TOGGLE_CITY_INPUT,
  TOGGLE_TEMPERATURE_UNIT,
} from '../../store/types';

const initialState = {
  city: '',
  isCityInputVisible: false,
  citiesList: [],
  temperatureUnit: true,
  forecast: null,
  coords: {
    lon: null,
    lat: null,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COORDS:
      return { ...state, coords: action.payload };
    case SET_FORECAST:
      return { ...state, forecast: action.payload };
    case TOGGLE_TEMPERATURE_UNIT:
      return { ...state, temperatureUnit: !state.temperatureUnit };
    case TOGGLE_CITY_INPUT:
      return { ...state, isCityInputVisible: !state.isCityInputVisible };
    case SET_CITIES_LIST:
      return { ...state, citiesList: action.payload };
    default:
      return state;
  }
};
