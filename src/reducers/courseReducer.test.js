import expect from 'expect';
import * as courseActions from "../actions/courseActions";
import courseReducer from "./courseReducer";

describe('Course Reducers', () => {
  it('should add course when passed CREATE_COURSES_SUCCESS', () => {
    //arrange
    const initialState = [
      { title: 'A' },
      { title: 'B' }
    ];
    const newCourse = {
      title: 'C'
    };
    //act
    const action = courseActions.createCourseSuccess(newCourse);
    const newState = courseReducer(initialState, action);
    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });
});
