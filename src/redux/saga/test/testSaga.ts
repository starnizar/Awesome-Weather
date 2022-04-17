import { eventChannel } from 'redux-saga';
import {
  actionChannel,
  all,
  call,
  cancel,
  fork,
  put,
  take,
} from 'redux-saga/effects';
import {
  RESET_COUNTDOWN,
  START_COUNTDOWN,
  UPDATE_COUNTDOWN,
} from '../../store/types';

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

function* saga() {
  const channel = yield call(countdown);
  try {
    while (true) {
      const seconds = yield take(channel);
      if (seconds === 5) {
        channel.close();
        yield fork(saga, 0);
      }
      yield put({ type: UPDATE_COUNTDOWN, payload: seconds });
    }
  } finally {
    channel.close();
  }
}

// function countdown(seconds) {
//   return eventChannel(emitter => {
//     const intervalId = setInterval(() => {
//       emitter(seconds++);
//     }, 1000);
//
//     return () => {
//       clearInterval(intervalId);
//     };
//   });
// }
//
// function* saga(value) {
//   const channel = yield call(countdown, value);
//   try {
//     while (true) {
//       const seconds = yield take(channel);
//       yield put({ type: UPDATE_COUNTDOWN, payload: seconds });
//     }
//   } finally {
//     channel.close();
//   }
// }
//
//
function* startCountdown() {
  while (true) {
    const { payload } = yield take(START_COUNTDOWN);
    const task = yield fork(saga, payload);

    yield take(RESET_COUNTDOWN);
    yield cancel(task);
  }
}

export function* countdownSaga() {
  yield all([call(startCountdown)]);
}
