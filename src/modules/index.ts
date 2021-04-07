import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import userId from './userId';
import { user, userSaga } from './user';
import { status, statusSaga } from './status';

const rootReducer = combineReducers({
  userId,
  user,
  status,
});
export function* rootSaga() {
  yield all([
    userSaga(),
    statusSaga(),
  ]);
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
