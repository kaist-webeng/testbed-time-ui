import { createAsyncAction } from 'typesafe-actions';
import { ValidateAddInputProps, ValidationResult } from '../../util/validateAddInput';

export const CHANGE_ADD_INPUT = 'addInput/CHANGE_ADD_INPUT';
export const CHANGE_ADD_INPUT_OK = 'addInput/CHANGE_ADD_INPUT_OK';
export const CHANGE_ADD_INPUT_FAIL = 'addInput/CHANGE_ADD_INPUT_FAIL';

export const changeAddInputAsync = createAsyncAction(
  CHANGE_ADD_INPUT,
  CHANGE_ADD_INPUT_OK,
  CHANGE_ADD_INPUT_FAIL,
)<ValidateAddInputProps, ValidationResult, ValidationResult>();
