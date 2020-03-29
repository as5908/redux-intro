import * as actionTypes from '../actions/actions';

const reducer = (state = 0, action) => {
  if (action.type === actionTypes.INCREMENT) {
    return state + 1;
  }
  if (action.type === actionTypes.DECREMENT) {
    return state - 1;
  }
  if (action.type === actionTypes.ADD) {
    return state + action.value;
  }
  if (action.type === actionTypes.SUBTRACT) {
    return state - action.value;
  }
  return state;
};

export default reducer;
