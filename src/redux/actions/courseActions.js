//action creater
import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
export function createCourse(course) {
  //debugger; //redux-flow-3
  return { type: types.CREATE_COURSE, course: course };
}

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch(err => {
        throw err
      });
  };
}
