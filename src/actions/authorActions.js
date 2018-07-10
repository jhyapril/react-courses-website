import AuthorApi from "../api/mockAuthorApi";
import * as types from "./actionTypes";

export function loadAuthorsSuccess(allAuthors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, payload: {allAuthors}};
}

export function loadAuthors() {
  return (dispatch) => {
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
