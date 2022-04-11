import { combineReducers } from 'redux';
import { reducer } from '../saga/app/reducer';

export const rootReducer = combineReducers({
  app: reducer,
});
