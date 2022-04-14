import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { FETCH_FORECAST, FETCH_LIST_OF_CITIES } from '../../store/types';
import { getForecast, getListOfCities } from '../../../requests/getForecast';
import { setForecast, setListOfCities } from './actions';

function* fetchForecastWorker(action) {
  delay(2000);
  const { lat, lon } = action;
  const { data } = yield call(getForecast, lat, lon);
  console.log('FETCHED FORECAST');
  yield put(setForecast(data));
}

function* fetchCityNameListWorker(action) {
  delay(2000);
  const { data } = yield call(getListOfCities, action.cityName);
  console.log('FETCHED CITIES LIST');
  yield put(setListOfCities(data));
}

export function* fetchForecastWatcher() {
  yield takeLatest(FETCH_FORECAST, fetchForecastWorker);
  // yield takeLatest(FETCH_LIST_OF_CITIES, fetchCityNameListWorker);
}
