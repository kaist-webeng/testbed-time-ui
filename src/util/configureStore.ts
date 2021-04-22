import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from '../modules';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userId'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware),
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};

export default configureStore;
