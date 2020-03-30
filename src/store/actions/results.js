import * as actionTypes from './actionTypes';

export const saveResult = result => {
  return { type: actionTypes.STORE_RESULT, result: result };
};
export const storeResult = result => {
  // console.log(result);
  // return { type: STORE_RESULT, result: result };
  return function(dispatch, getState) {
    setTimeout(() => {
      console.log('****************', getState());
      dispatch(saveResult(getState().counter));
    }, 2000);
  };
};

export const deleteResult = id => {
  return { type: actionTypes.DELETE_RESULT, resultElementId: id };
};
