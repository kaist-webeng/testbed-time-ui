import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import { StatusResponse } from '../../api/status';

export type StatusAction = ActionType<typeof actions>;

export type StatusState = {
  statusResponse: {
    loading: boolean;
    error: Error | null;
    data: StatusResponse | null;
  };
};
