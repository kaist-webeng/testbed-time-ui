import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import { TriggerResponse } from '../../api/trigger';

export type TriggerAction = ActionType<typeof actions>;
export type TriggerStateTriplet = {
  loading: boolean;
  error: Error | null;
  data: TriggerResponse | null;
};
export type TriggerState = {
  addTriggerResponse: TriggerStateTriplet;
  removeTriggerResponse: TriggerStateTriplet;
};
