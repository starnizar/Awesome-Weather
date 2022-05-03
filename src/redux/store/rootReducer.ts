import { combineReducers } from 'redux';
import { reducer } from '../saga/app/reducer';
import { testReducer } from '../saga/test/reducer';

export const rootReducer = combineReducers({
  app: reducer,
  test: testReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
