import { message } from 'antd';
import { call, select } from 'redux-saga/effects';

import { RootState } from '../modules';
import { bindResourceSaga, unbindResourceSaga, getBoundStatusSaga } from '../modules/user/sagas';
import { bindResourceAsync, unbindResourceAsync } from '../modules/user';

const boundStatusSelector = (state: RootState) => state.user.boundStatus;
const bindingResponseSelector = (state: RootState) => state.user.bindingResponse;

export default function* bindCallback<Fn extends(...args: any[]) => any>(
  id: number,
  callback: Fn,
  ...callbackArgs: Parameters<Fn>) {
  yield call(getBoundStatusSaga);
  const boundStatus: ReturnType<typeof boundStatusSelector> = yield select(boundStatusSelector);
  if (boundStatus.error !== null) {
    throw boundStatus.error;
  }

  // check whether bounded and try binding
  const { bound, userId } = boundStatus.data!;
  const currentUserId: number = id;
  if (bound && userId !== currentUserId.toString()) {
    yield call(message.error, `The resource is occupied by the following user: ${userId}`);
    throw Error(`The resource is occupied by the following user: ${userId}`);
  }
  if (!bound) {
    yield call(bindResourceSaga, bindResourceAsync.request(currentUserId));
  }

  const bindingResponse: ReturnType<typeof bindingResponseSelector> = yield select(
    bindingResponseSelector,
  );
  if (bindingResponse.error !== null) {
    throw bindingResponse.error;
  }

  // successfully bound, so run callback
  const callbackResult: ReturnType<typeof callback> = yield call<Fn>(callback, ...callbackArgs);

  // unbind the resource
  yield call(unbindResourceSaga, unbindResourceAsync.request(currentUserId));
  yield call(message.success, 'Success');

  return callbackResult;
}
