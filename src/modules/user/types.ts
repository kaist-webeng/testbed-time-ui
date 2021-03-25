import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import { BindingResponse, BoundStatus } from '../../api/user';

export type UserAction = ActionType<typeof actions>;

export type UserState = {
  bindingResponse: {
    loading: boolean;
    error: Error | null;
    data: BindingResponse | null;
  };
  boundStatus: {
    loading: boolean;
    error: Error | null;
    data: BoundStatus | null;
  };
};
