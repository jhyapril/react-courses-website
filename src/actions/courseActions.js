import courseApi from "../api/mockCourseApi";
import * as types from "./actionTypes";

function loadCoursesSuccess(allCourses) {
  return {type: types.LOAD_COURSES_SUCCESS, payload: {allCourses}};
}

export function loadCourses() {
  return (dispatch) => {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
