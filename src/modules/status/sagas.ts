import { message } from 'antd';
import {
  all,
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';

import { RootState } from '..';
import { getTriggerListAsync, GET_TRIGGER_LIST } from './actions';
import { getStatus, StatusResponse } from '../../api/status';
import { bindResourceSaga, unbindResourceSaga, getBoundStatusSaga } from '../user/sagas';
import { bindResourceAsync, unbindResourceAsync } from '../user';

const boundStatusSelector = (store: RootState) => store.user.boundStatus;

function* getTriggerListSaga(action: ReturnType<typeof getTriggerListAsync.request>) {
  try {
    yield call(getBoundStatusSaga);
    const boundStatus: ReturnType<typeof boundStatusSelector> = yield select(boundStatusSelector);
    if (boundStatus.error !== null) {
      throw boundStatus.error;
    }

    // check whether bounded and try binding
    const { bound, userId } = boundStatus.data!;
    const currentUserId: number = action.payload;
    if (bound && userId !== currentUserId.toString()) {
      yield call(message.error, `The resource is occupied by the following user: ${userId}`);
      throw Error(`The resource is occupied by the following user: ${userId}`);
    }
    if (!bound) {
      yield call(bindResourceSaga, bindResourceAsync.request(currentUserId));
    }

    // start retrieving trigger list
    const statusResult: StatusResponse = yield call(getStatus, currentUserId);
    yield put(getTriggerListAsync.success(statusResult));

    // unbind the resource
    yield call(unbindResourceSaga, unbindResourceAsync.request(currentUserId));
    yield call(message.success, 'Successfully loaded!');
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
