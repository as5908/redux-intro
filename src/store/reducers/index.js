import { combineReducers } from 'redux';
import counterReducer from './counter';
import resultsReducer from './results';

export default combineReducers({
  counter: counterReducer,
  results: resultsReducer
});
