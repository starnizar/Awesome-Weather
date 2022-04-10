import { all } from 'redux-saga/effects';
import { fetchForecastWatcher } from './app/appSaga';

export function* rootWatcher() {
  yield all([fetchForecastWatcher()]);
}
