import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch(action.type) {
    case types.LOAD_COURSE_SUCCESS:
      return action.payload.allCourses;

    default:
      return state;
  }
}
