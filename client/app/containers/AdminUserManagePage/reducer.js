/*
 *
 * AdminUserManagePage reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {
  all: {
    data: [],
    page: 1,
    size: 10,
    totaldata: 0,
    msg: '',
  },
  one: {
    users: {
      email: '',
      name: '',
      email_verified: false,
      roles: [],
    },
    roles: [],
    rolesNormalized: {},
  },
  query: { find_name: '' },
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const adminUserManagePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    const normalizedData = {};
    switch (action.type) {
      case types.SET_ONE_VALUE:
        draft.one[action.payload.key] = action.payload.value;
        break;
      case types.SET_QUERY_VALUE:
        draft.query[action.payload.key] = action.payload.value;
        break;
      case types.CLEAR_ONE:
        draft.one = initialState.one;
        break;
      case types.LOAD_ALL_REQUEST:
        draft.loading = true;
        break;
      case types.LOAD_ALL_SUCCESS:
        draft.loading = false;
        draft.all = action.payload;
        break;
      case types.LOAD_ONE_SUCCESS:
        draft.loading = false;
        action.payload.data.roles.map(each => {
          normalizedData[each._id] = each;
          return null;
        });
        draft.one = { ...action.payload.data, rolesNormalized: normalizedData };
        break;
      case types.LOAD_ONE_REQUEST:
        draft.loading = true;
        break;
      case types.LOAD_ONE_FAILURE:
        draft.loading = false;
        break;
    }
  });

export default adminUserManagePageReducer;
