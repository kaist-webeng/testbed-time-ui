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
  AddTriggerProps,
  removeTrigger,
  RemoveTriggerProps,
  TriggerResponse,
} from '../../api/trigger';
import bindCallback from '../../util/bindCallback';

function* addTriggerCallback(param: AddTriggerProps) {
  const addResult: TriggerResponse = yield call(addTrigger, param);
  yield put(addTriggerAsync.success(addResult));
}

function* removeTriggerCallback(param: RemoveTriggerProps) {
  const removeResult: TriggerResponse = yield call(removeTrigger, param);
  yield put(removeTriggerAsync.success(removeResult));
}

function* addTriggerSaga(action: ReturnType<typeof addTriggerAsync.request>) {
  try {
    const { id } = action.payload;
    yield call(bindCallback, id, addTriggerCallback, action.payload);
  } catch (e) {
    yield put(addTriggerAsync.failure(e));
  }
}

function* removeTriggerSaga(action: ReturnType<typeof removeTriggerAsync.request>) {
  try {
    const { id } = action.payload;
    yield call(bindCallback, id, removeTriggerCallback, action.payload);
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
