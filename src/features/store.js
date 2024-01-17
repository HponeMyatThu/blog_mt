import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import counterReducer from 'src/features/Slice/counterSlice';
import storage from 'redux-persist/lib/storage/session';
import userReducer from 'src/features/Slice/userSlice';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const userPersistConfig = {
  key: 'user',
  storage,
};

const counterPersistConfig = {
  key: 'counter',
  storage,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  counter: persistReducer(counterPersistConfig, counterReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
