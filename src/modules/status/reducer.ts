import { createReducer } from 'typesafe-actions';

import { StatusState, StatusAction } from './types';
import {
  GET_TRIGGER_LIST,
  GET_TRIGGER_LIST_SUCCESS,
  GET_TRIGGER_LIST_FAILURE,
} from './actions';

const initialState: StatusState = {
  statusResponse: {
    loading: false,
    error: null,
    data: null,
  },
};

const status = createReducer<StatusState, StatusAction>(initialState, {
  [GET_TRIGGER_LIST]: (state) => ({
    ...state,
    statusResponse: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [GET_TRIGGER_LIST_SUCCESS]: (state, action) => ({
    ...state,
    statusResponse: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [GET_TRIGGER_LIST_FAILURE]: (state, action) => ({
    ...state,
    statusResponse: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

export default status;
