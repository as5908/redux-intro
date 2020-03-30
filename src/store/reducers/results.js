import * as actionTypes from '../actions/actionTypes';

const deleteResult = (state, action) => {
  const newArray = state.filter(item => item.id !== action.resultElementId);
  return newArray;
};
const reducer = (state = [], action) => {
  if (action.type === actionTypes.STORE_RESULT) {
    return state.concat({ id: new Date(), value: action.result });
  }
  if (action.type === actionTypes.DELETE_RESULT) {
    return deleteResult(state, action);
  }
  return state;
};

export default reducer;
