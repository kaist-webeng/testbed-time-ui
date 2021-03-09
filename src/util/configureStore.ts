import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../modules';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userId'],
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

const configureStore = () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
