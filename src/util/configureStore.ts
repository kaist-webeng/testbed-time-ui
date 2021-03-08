import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../modules';

const persistConfig = {
    key: 'root',
    storage: storage,
    // whitelist: ['userId']
    whitelist: []
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

export default () => {
    const store = createStore(persistedReducer);
    const persistor = persistStore(store);

    return { store, persistor };
}