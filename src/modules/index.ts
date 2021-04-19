import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import userId from './userId';
import { user, userSaga } from './user';
import { status, statusSaga } from './status';
import { trigger, triggerSaga } from './trigger';
import { addInput, addInputSaga } from './addInput';

const rootReducer = combineReducers({
  userId,
  user,
  status,
  trigger,
  addInput,
});
export function* rootSaga() {
  yield all([
    userSaga(),
    statusSaga(),
    triggerSaga(),
    addInputSaga(),
  ]);
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
