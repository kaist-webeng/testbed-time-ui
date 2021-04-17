import { createReducer } from 'typesafe-actions';

import { TriggerState, TriggerAction } from './types';
import {
  ADD_TRIGGER,
  ADD_TRIGGER_SUCCESS,
  ADD_TRIGGER_FAILURE,
  REMOVE_TRIGGER,
  REMOVE_TRIGGER_SUCCESS,
  REMOVE_TRIGGER_FAILURE,
} from './actions';

const initialState: TriggerState = {
  triggerResponse: {
    loading: false,
    error: null,
    data: null,
  },
};

const trigger = createReducer<TriggerState, TriggerAction>(initialState, {
  [ADD_TRIGGER]: (state) => ({
    ...state,
    triggerResponse: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [ADD_TRIGGER_SUCCESS]: (state, action) => ({
    ...state,
    triggerResponse: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [ADD_TRIGGER_FAILURE]: (state, action) => ({
    ...state,
    triggerResponse: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
  [REMOVE_TRIGGER]: (state) => ({
    ...state,
    triggerResponse: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [REMOVE_TRIGGER_SUCCESS]: (state, action) => ({
    ...state,
    triggerResponse: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [REMOVE_TRIGGER_FAILURE]: (state, action) => ({
    ...state,
    triggerResponse: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

export default trigger;
