/*
 *
 * AdminBlogCategoryManagePage actions
 *
 */

import * as types from './constants';

export const loadAllRequest = payload => ({
  type: types.LOAD_ALL_REQUEST,
  payload,
});
export const loadAllSuccess = payload => ({
  type: types.LOAD_ALL_SUCCESS,
  payload,
});
export const loadAllFailure = payload => ({
  type: types.LOAD_ALL_FAILURE,
  payload,
});
export const loadOneRequest = payload => ({
  type: types.LOAD_ONE_REQUEST,
  payload,
});
export const loadOneSuccess = payload => ({
  type: types.LOAD_ONE_SUCCESS,
  payload,
});
export const loadOneFailure = payload => ({
  type: types.LOAD_ONE_FAILURE,
  payload,
});
export const setQueryValue = payload => ({
  type: types.SET_QUERY_VALUE,
  payload,
});
export const addEditRequest = payload => ({
  type: types.ADD_EDIT_REQUEST,
  payload,
});
export const addEditSuccess = payload => ({
  type: types.ADD_EDIT_SUCCESS,
  payload,
});
export const addEditFailure = payload => ({
  type: types.ADD_EDIT_FAILURE,
  payload,
});
export const setOneValue = payload => ({
  type: types.SET_ONE_VALUE,
  payload,
});

export const deleteCatRequest = payload => ({
  type: types.DELETE_CAT_REQUEST,
  payload,
});
export const deleteCatSuccess = payload => ({
  type: types.DELETE_CAT_SUCCESS,
  payload,
});
export const deleteCatFailure = payload => ({
  type: types.DELETE_CAT_FAILURE,
  payload,
});
export const clearOne = () => ({
  type: types.CLEAR_ONE,
});
export const clearQuery = () => ({
  type: types.CLEAR_QUERY,
});
