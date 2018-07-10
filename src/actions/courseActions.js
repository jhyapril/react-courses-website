import courseApi from "../api/mockCourseApi";
import * as types from "./actionTypes";

function loadCoursesSuccess(allCourses) {
  return {type: types.LOAD_COURSES_SUCCESS, payload: {allCourses}};
}

export function updateCourseSuccess(courseId, updatedCourse) {
  return {type: types.UPDATE_COURSES_SUCCESS, payload: {courseId, updatedCourse}};
}

export function createCourseSuccess(newCourse) {
  return {type: types.CREATE_COURSES_SUCCESS, payload: {newCourse}};
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

export function saveCourse(course) {
  return (dispatch, getState) => {
    return courseApi.saveCourse(course).then(resp => {
      course.id ? dispatch(updateCourseSuccess(course.id, resp)) : dispatch(createCourseSuccess(resp));
    }).catch(error => {
      throw(error);
    });
  };
}
