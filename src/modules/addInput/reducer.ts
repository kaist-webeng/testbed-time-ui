import { createReducer } from 'typesafe-actions';

import { AddInputChangeState, AddInputChangeAction } from './types';
import {
  CHANGE_ADD_INPUT,
  CHANGE_ADD_INPUT_OK,
  CHANGE_ADD_INPUT_FAIL,
} from './actions';

const initialState: AddInputChangeState = {
  schedule: {},
  header: {},
  form: {},
};

const addInput = createReducer<AddInputChangeState, AddInputChangeAction>(initialState, {
  [CHANGE_ADD_INPUT]: (state, action) => ({
    ...state,
    [action.payload.inputType]: {
      validateStatus: 'validating',
      help: undefined,
    },
  }),
  [CHANGE_ADD_INPUT_OK]: (state, action) => ({
    ...state,
    [action.payload.inputType!]: action.payload,
  }),
  [CHANGE_ADD_INPUT_FAIL]: (state, action) => ({
    ...state,
    [action.payload.inputType!]: action.payload,
  }),
});

export default addInput;
