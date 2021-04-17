import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import userId from './userId';
import { user, userSaga } from './user';
import { status, statusSaga } from './status';
import { trigger, triggerSaga } from './trigger';

const rootReducer = combineReducers({
  userId,
  user,
  status,
  trigger,
});
export function* rootSaga() {
  yield all([
    userSaga(),
    statusSaga(),
    triggerSaga(),
  ]);
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
