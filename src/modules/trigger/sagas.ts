import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import {
  addTriggerAsync,
  removeTriggerAsync,
  ADD_TRIGGER,
  REMOVE_TRIGGER,
} from './actions';
import {
  addTrigger,
  removeTrigger,
  TriggerResponse,
} from '../../api/trigger';
import bindCallback from '../../util/bindCallback';

function* addTriggerSaga(action: ReturnType<typeof addTriggerAsync.request>) {
  try {
    const { id } = action.payload;
    const addResult: TriggerResponse = yield call(bindCallback, id, addTrigger, action.payload);
    yield put(addTriggerAsync.success(addResult));
  } catch (e) {
    yield put(addTriggerAsync.failure(e));
  }
}

function* removeTriggerSaga(action: ReturnType<typeof removeTriggerAsync.request>) {
  try {
    const { id } = action.payload;
    const removeResult: TriggerResponse = yield call(
      bindCallback,
      id,
      removeTrigger,
      action.payload,
    );
    yield put(removeTriggerAsync.success(removeResult));
  } catch (e) {
    yield put(removeTriggerAsync.failure(e));
  }
}

export default function* triggerSaga() {
  yield all([
    takeLatest(ADD_TRIGGER, addTriggerSaga),
    takeLatest(REMOVE_TRIGGER, removeTriggerSaga),
  ]);
}
