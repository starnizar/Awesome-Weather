import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { FETCH_FORECAST } from '../../store/types';
import { getForecast } from '../../../requests/getForecast';
import { setForecast } from '../../store/actions';

function* fetchForecastWorker(action) {
  const { lat, lon } = action;
  delay(1000);
  const fetchedForecast = yield call(getForecast, lon, lat);
  console.log('START FETCHED');
  yield put(setForecast(fetchedForecast.data));
}

export function* fetchForecastWatcher() {
  yield takeLatest(FETCH_FORECAST, fetchForecastWorker);
}
