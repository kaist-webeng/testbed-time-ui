import { combineReducers } from 'redux';
import userId from './userId';

const rootReducer = combineReducers({
  userId,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
