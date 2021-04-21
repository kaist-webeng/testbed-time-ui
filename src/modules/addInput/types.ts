import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import { AddInputType, ValidationResult } from '../../util/validateAddInput';

export type ChangeAddInputAction = ActionType<typeof actions>;

export type ChangeAddInputState = {
  schedule: ValidationResult;
  header: ValidationResult;
  form: ValidationResult;
}

export type ChangeAddInputResult =
  & ValidationResult
  & { inputType: AddInputType }
