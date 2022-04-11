import { all } from 'redux-saga/effects';
import { fetchForecastWatcher } from './app/saga';

export function* rootWatcher() {
  yield all([fetchForecastWatcher()]);
}
