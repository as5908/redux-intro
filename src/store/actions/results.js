import * as actionTypes from './actionTypes';

export const saveResult = result => {
  return { type: actionTypes.STORE_RESULT, result: result };
};
export const storeResult = result => {
  // console.log(result);
  // return { type: STORE_RESULT, result: result };
  return function(dispatch) {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = id => {
  return { type: actionTypes.DELETE_RESULT, resultElementId: id };
};
