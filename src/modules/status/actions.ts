import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import { StatusResponse } from '../../api/status';

export const GET_TRIGGER_LIST = 'status/GET_TRIGGER_LIST';
export const GET_TRIGGER_LIST_SUCCESS = 'status/GET_TRIGGER_LIST_SUCCESS';
export const GET_TRIGGER_LIST_FAILURE = 'status/GET_TRIGGER_LIST_FAILURE';

export const getTriggerListAsync = createAsyncAction(
  GET_TRIGGER_LIST,
  GET_TRIGGER_LIST_SUCCESS,
  GET_TRIGGER_LIST_FAILURE,
)<number, StatusResponse, AxiosError>();
