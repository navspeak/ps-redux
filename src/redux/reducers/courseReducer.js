import * as types from "../actions/actionTypes"
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      //debugger; //redux-flow-4
      return [...state, { ...action.course }];
    default:
      return state;
  }
}

// In Redux you handle action with a Reducer
// Reducer is a function that accepts state and action
// and retutns a new state