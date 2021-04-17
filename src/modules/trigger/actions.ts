import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import {
  TriggerResponse,
  AddTriggerProps,
  RemoveTriggerProps,
} from '../../api/trigger';

export const ADD_TRIGGER = 'trigger/ADD_TRIGGER';
export const ADD_TRIGGER_SUCCESS = 'trigger/ADD_TRIGGER_SUCCESS';
export const ADD_TRIGGER_FAILURE = 'trigger/ADD_TRIGGER_FAILURE';

export const REMOVE_TRIGGER = 'trigger/REMOVE_TRIGGER';
export const REMOVE_TRIGGER_SUCCESS = 'trigger/REMOVE_TRIGGER_SUCCESS';
export const REMOVE_TRIGGER_FAILURE = 'trigger/REMOVE_TRIGGER_FAILURE';

export const addTriggerAsync = createAsyncAction(
  ADD_TRIGGER,
  ADD_TRIGGER_SUCCESS,
  ADD_TRIGGER_FAILURE,
)<AddTriggerProps, TriggerResponse, AxiosError>();

export const removeTriggerAsync = createAsyncAction(
  REMOVE_TRIGGER,
  REMOVE_TRIGGER_SUCCESS,
  REMOVE_TRIGGER_FAILURE,
)<RemoveTriggerProps, TriggerResponse, AxiosError>();
