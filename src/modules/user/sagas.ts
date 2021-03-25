import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import {
  bindResourceAsync,
  unbindResourceAsync,
  getBoundStatusAsync,
  BIND_RESOURCE,
  UNBIND_RESOURCE,
  GET_BOUND_STATUS,
} from './actions';
import {
  isBound,
  bind,
  unbind,
  BindingResponse,
  BoundStatus,
} from '../../api/user';

function* bindResourceSaga(action: ReturnType<typeof bindResourceAsync.request>) {
  try {
    const bindResult: BindingResponse = yield call(bind, action.payload);
    yield put(bindResourceAsync.success(bindResult));
  } catch (e) {
    yield put(bindResourceAsync.failure(e));
  }
}

function* unbindResourceSaga(action: ReturnType<typeof unbindResourceAsync.request>) {
  try {
    const unbindResult: BindingResponse = yield call(unbind, action.payload);
    yield put(unbindResourceAsync.success(unbindResult));
  } catch (e) {
    yield put(unbindResourceAsync.failure(e));
  }
}

function* getBoundStatusSaga() {
  try {
    const boundStatus: BoundStatus = yield call(isBound);
    yield put(getBoundStatusAsync.success(boundStatus));
  } catch (e) {
    yield put(getBoundStatusAsync.failure(e));
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(BIND_RESOURCE, bindResourceSaga),
    takeLatest(UNBIND_RESOURCE, unbindResourceSaga),
    takeLatest(GET_BOUND_STATUS, getBoundStatusSaga),
  ]);
}
