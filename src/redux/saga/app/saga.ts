import {
  call,
  put,
  takeLatest,
  delay,
  take,
  fork,
  select,
  cancel,
  actionChannel,
} from 'redux-saga/effects';
import { FETCH_FORECAST, FETCH_LIST_OF_CITIES } from '../../store/types';
import { getForecast, getListOfCities } from '../../../requests/getForecast';
import { setForecast, setListOfCities } from './actions';
import { eventChannel } from 'redux-saga';

function* fetchForecastWorker(action) {
  delay(2000);
  console.log('FETCHING FORECAST');
  const { lat, lon } = action;
  console.log(action);
  const { data } = yield call(getForecast, lat, lon);
  yield put(setForecast(data));
}

function* fetchCityNameListWorker(action) {
  delay(2000);
  const { data } = yield call(getListOfCities, action.cityName);
  yield put(setListOfCities(data));
}

export function* fetchForecastWatcher() {
  yield takeLatest(FETCH_FORECAST, fetchForecastWorker);
  yield takeLatest(FETCH_LIST_OF_CITIES, fetchCityNameListWorker);
}

function countdown() {
  return eventChannel(emitter => {
    let seconds = 0;
    const intervalId = setInterval(() => {
      emitter(seconds++);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });
}

function* saga(action) {
  const channel = yield call(countdown);
  try {
    while (true) {
      const seconds = yield take(channel);
      if (seconds === 5) {
        channel.close();
        yield fork(saga, action);
        yield call(fetchForecastWorker, action);
      }
    }
  } finally {
    channel.close();
  }
}

export function* autoFetchForecast() {
  const channel = yield actionChannel(FETCH_FORECAST);

  while (true) {
    const coords = yield take(channel);
    const task = yield fork(saga, coords);

    yield take(FETCH_LIST_OF_CITIES);
    yield cancel(task);
  }
}
