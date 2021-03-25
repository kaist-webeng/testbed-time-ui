import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import { BindingResponse, BoundStatus } from '../../api/user';

export const BIND_RESOURCE = 'user/BIND_RESOURCE';
export const BIND_RESOURCE_SUCCESS = 'user/BIND_RESOURCE_SUCCESS';
export const BIND_RESOURCE_FAILURE = 'user/BIND_RESOURCE_FAILURE';

export const UNBIND_RESOURCE = 'user/UNBIND_RESOURCE';
export const UNBIND_RESOURCE_SUCCESS = 'user/UNBIND_RESOURCE_SUCCESS';
export const UNBIND_RESOURCE_FAILURE = 'user/UNBIND_RESOURCE_FAILURE';

export const GET_BOUND_STATUS = 'user/GET_BOUND_STATUS';
export const GET_BOUND_STATUS_SUCCESS = 'user/GET_BOUND_STATUS_SUCCESS';
export const GET_BOUND_STATUS_FAILURE = 'user/GET_BOUND_STATUS_FAILURE';

export const bindResourceAsync = createAsyncAction(
  BIND_RESOURCE,
  BIND_RESOURCE_SUCCESS,
  BIND_RESOURCE_FAILURE,
)<number, BindingResponse, AxiosError>();

export const unbindResourceAsync = createAsyncAction(
  UNBIND_RESOURCE,
  UNBIND_RESOURCE_SUCCESS,
  UNBIND_RESOURCE_FAILURE,
)<number, BindingResponse, AxiosError>();

export const getBoundStatusAsync = createAsyncAction(
  GET_BOUND_STATUS,
  GET_BOUND_STATUS_SUCCESS,
  GET_BOUND_STATUS_FAILURE,
)<undefined, BoundStatus, AxiosError>();
