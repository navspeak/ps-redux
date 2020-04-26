//action creater
import * as types from "./actionTypes"
export function createCourse(course) {
  //debugger; //redux-flow-3
  return { type: types.CREATE_COURSE, course: course };
}
