import { createReducer } from 'typesafe-actions';

import { UserState, UserAction } from './types';
import {
  BIND_RESOURCE,
  BIND_RESOURCE_SUCCESS,
  BIND_RESOURCE_FAILURE,
  UNBIND_RESOURCE,
  UNBIND_RESOURCE_SUCCESS,
  UNBIND_RESOURCE_FAILURE,
  GET_BOUND_STATUS,
  GET_BOUND_STATUS_SUCCESS,
  GET_BOUND_STATUS_FAILURE,
} from './actions';

const initialState: UserState = {
  bindingResponse: {
    loading: false,
    error: null,
    data: null,
  },
  boundStatus: {
    loading: false,
    error: null,
    data: null,
  },
};

const user = createReducer<UserState, UserAction>(initialState, {
  [BIND_RESOURCE]: (state) => ({
    ...state,
    bindingResponse: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [BIND_RESOURCE_SUCCESS]: (state, action) => ({
    ...state,
    bindingResponse: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [BIND_RESOURCE_FAILURE]: (state, action) => ({
    ...state,
    bindingResponse: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
  [UNBIND_RESOURCE]: (state) => ({
    ...state,
    bindingResponse: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [UNBIND_RESOURCE_SUCCESS]: (state, action) => ({
    ...state,
    bindingResponse: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [UNBIND_RESOURCE_FAILURE]: (state, action) => ({
    ...state,
    bindingResponse: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
  [GET_BOUND_STATUS]: (state) => ({
    ...state,
    boundStatus: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [GET_BOUND_STATUS_SUCCESS]: (state, action) => ({
    ...state,
    boundStatus: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [GET_BOUND_STATUS_FAILURE]: (state, action) => ({
    ...state,
    boundStatus: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

export default user;
