import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import userId from './userId';
import { user, userSaga } from './user';

const rootReducer = combineReducers({
  userId,
  user,
});
export function* rootSaga() {
  yield all([userSaga()]);
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
