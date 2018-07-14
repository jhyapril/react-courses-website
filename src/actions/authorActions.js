import AuthorApi from "../api/mockAuthorApi";
import * as types from "./actionTypes";
import {beginAjaxCall} from "./ajaxStatusAction";

export function loadAuthorsSuccess(allAuthors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, payload: {allAuthors}};
}

export function loadAuthors() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
