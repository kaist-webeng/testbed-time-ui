import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { rootSaga } from '../modules';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userId'],
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    persistedReducer,
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware,
        logger,
      ),
    ),
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};

export default configureStore;
