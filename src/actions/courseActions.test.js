import expect from "expect";
import * as types from "./actionTypes";
import * as courseActions from "./courseActions";
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Course Actions', () => {
  describe('createCoursesSuccess', () => {
    it('should create a CREATE_COURSES_SUCCESS action', () => {
      //arrange
      const newCourse = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSES_SUCCESS,
        payload: { newCourse }
      };
      //act
      const action = courseActions.createCourseSuccess(newCourse);
      //assert
      expect(action).toEqual(expectedAction);
    })
  });
});

const middleWare = [thunk];
const mockStore = configureMockStore(middleWare);

describe('Async Action', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200, {body: { course: [{id: 1, firstName: 'Jason', lastName: 'Yang'}]}});

    const expectedAction = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, body: { courses: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];

    const store = mockStore({courses: []}, expectedAction);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    })
  })
});

