import {
  RESET_COUNTDOWN,
  START_COUNTDOWN,
  UPDATE_COUNTDOWN,
} from '../../store/types';

const initialState = {
  countdownValue: 0,
  isActive: false,
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_COUNTDOWN:
      return { ...state, isActive: true, countdownValue: action.payload };
    case UPDATE_COUNTDOWN:
      return { ...state, countdownValue: action.payload };
    case RESET_COUNTDOWN:
      return {
        ...state,
        countdownValue: action.payload.seconds,
        isActive: action.payload.isActive,
      };
    default:
      return state;
  }
};
