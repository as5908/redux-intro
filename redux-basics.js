const redux = require('redux');
// import * as redux from 'redux';
const createStore = redux.createStore;

const initialState = {
  counter: 0
};
// 1 - Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER')
    return {
      ...state,
      counter: state.counter + 1
    };
  if (action.type === 'ADD_COUNTER')
    return {
      ...state,
      counter: state.counter + action.value
    };
  return state;
};
// 2 - Store
const store = createStore(rootReducer);
console.log(store.getState());
// 3 - Subscrciption
store.subscribe(() => {
  console.log('[subscription]', store.getState());
});

// 4 - Dispatch Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());
