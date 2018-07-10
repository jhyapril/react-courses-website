import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.payload.allCourses;

    case types.CREATE_COURSES_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.payload.newCourse)
      ];

    case types.UPDATE_COURSES_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.payload.courseId),
        Object.assign({}, action.payload.updatedCourse)
      ];

    default:
      return state;
  }
}
