import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import { ValidationResult } from '../../util/validateAddInput';

export type AddInputChangeAction = ActionType<typeof actions>;

export type AddInputChangeState = {
  schedule: ValidationResult;
  header: ValidationResult;
  form: ValidationResult;
}
