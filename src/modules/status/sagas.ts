import { message } from 'antd';
import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import { getTriggerListAsync, GET_TRIGGER_LIST } from './actions';
import { getStatus, StatusResponse } from '../../api/status';
import bindCallback from '../../util/bindCallback';

function* retrieveTriggerCallback(id: number) {
  const statusResult: StatusResponse = yield call(getStatus, id);
  yield put(getTriggerListAsync.success(statusResult));
}

function* getTriggerListSaga(action: ReturnType<typeof getTriggerListAsync.request>) {
  try {
    const id = action.payload;
    yield call(bindCallback, id, retrieveTriggerCallback, id);
  } catch (e) {
    yield put(getTriggerListAsync.failure(e));
    yield call(message.error, 'Error occurred while loading.');
  }
}

export default function* statusSaga() {
  yield all([
    takeLatest(GET_TRIGGER_LIST, getTriggerListSaga),
  ]);
}
