import * as actionTypes from '../actions/actionTypes';

const reducer = (state = [], action) => {
  if (action.type === actionTypes.STORE_RESULT) {
    return state.concat({ id: new Date(), value: action.result });
  }
  if (action.type === actionTypes.DELETE_RESULT) {
    const id = 1;
    const newArray = state.filter(item => item.id !== action.resultElementId);
    return newArray;
  }
  return state;
};

export default reducer;
