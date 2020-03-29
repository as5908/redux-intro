import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.INCREMENT) {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === actionTypes.DECREMENT) {
    return {
      ...state,
      counter: state.counter - 1
    };
  }
  if (action.type === actionTypes.ADD) {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  if (action.type === actionTypes.SUBTRACT) {
    return {
      ...state,
      counter: state.counter - action.value
    };
  }
  if (action.type === actionTypes.STORE_RESULT) {
    return {
      ...state,
      results: state.results.concat({ id: new Date(), value: state.counter })
    };
  }
  if (action.type === actionTypes.DELETE_RESULT) {
    const id = 1;
    const newArray = state.results.filter(
      item => item.id !== action.resultElementId
    );
    return {
      ...state,
      results: newArray
    };
  }
  return state;
};

export default reducer;
