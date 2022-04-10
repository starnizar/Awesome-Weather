import { FETCH_FORECAST } from '../../store/types';

export const fetchForecast = (lat, lon) => ({ type: FETCH_FORECAST, lat, lon });
