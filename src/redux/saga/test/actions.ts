import {
  RESET_COUNTDOWN,
  START_COUNTDOWN,
} from '../../store/types';

export const startCountdown = (seconds: number) => ({
  type: START_COUNTDOWN,
  payload: seconds,
});

export const resetCountdown = (seconds: number, isActive: boolean) => ({
  type: RESET_COUNTDOWN,
  payload: { seconds, isActive },
});
