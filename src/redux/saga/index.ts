import { all } from 'redux-saga/effects';
import { autoFetchForecast, fetchForecastWatcher } from './app/saga';
import { countdownSaga } from './test/testSaga';

export function* rootWatcher() {
  yield all([fetchForecastWatcher(), countdownSaga(), autoFetchForecast()]);
}
