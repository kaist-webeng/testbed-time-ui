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
    yield put(changeAddInputAsync.success({
      ...validationResult,
      inputType: action.payload.inputType,
    }));
  }
  yield put(changeAddInputAsync.failure({
    ...validationResult,
    inputType: action.payload.inputType,
  }));
}

export default function* addInputSaga() {
  yield all([
    takeLatest(CHANGE_ADD_INPUT, changeAddInputSaga),
  ]);
}
