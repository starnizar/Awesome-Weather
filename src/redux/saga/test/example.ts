import {
  all,
  call,
  delay,
  put,
  fork,
  take,
  cancel,
  select,
  actionChannel,
} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { INCREMENT_ACTION, START_OPERATION, STOP_OPERATION } from './duck';

function intervalChannel(n) {
  return eventChannel(emitter => {
    let initial = 0;

    const interval = setInterval(() => {
      emitter(initial++);
    }, n);

    return () => {
      console.log('cleared');
      clearInterval(interval);
    };
  });
}

function* incrementer(timeout) {
  const channel = yield call(intervalChannel, timeout);

  try {
    while (true) {
      const newValue = yield take(channel);
      yield put({ type: INCREMENT_ACTION, payload: newValue });
    }
  } finally {
    channel.close();
  }
}

function* operation(timeout) {
  while (true) {
    yield take(START_OPERATION);
    const task = yield fork(incrementer, timeout);

    yield take(STOP_OPERATION);
    yield cancel(task);
  }
}

function* exampleSaga() {
  yield all([call(operation, 1000)]);
}

export default exampleSaga;
