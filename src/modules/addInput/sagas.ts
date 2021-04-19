import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import { changeAddInputAsync, CHANGE_ADD_INPUT } from './actions';
import { validateAddInput, ValidationResult } from '../../util/validateAddInput';

function* changeAddInputSaga(action: ReturnType<typeof changeAddInputAsync.request>) {
  const validationResult: ValidationResult = yield call(validateAddInput, action.payload);
  if (validationResult.validateStatus === 'success') {
    yield put(changeAddInputAsync.success(validationResult));
  }
  yield put(changeAddInputAsync.failure(validationResult));
}

export default function* addInputSaga() {
  yield all([
    takeLatest(CHANGE_ADD_INPUT, changeAddInputSaga),
  ]);
}
