import * as types from "../actions/actionTypes"
import initialState from "./initialState";
export default function courseReducer(state = initialState.course, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      //debugger; //redux-flow-4
      return [...state, { ...action.course }];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}

// In Redux you handle action with a Reducer
// Reducer is a function that accepts state and action
// and retutns a new state