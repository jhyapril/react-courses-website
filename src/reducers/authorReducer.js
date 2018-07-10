import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function courseReducer(state = initialState.authors, action) {
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.payload.allAuthors;

    default:
      return state;
  }
}
