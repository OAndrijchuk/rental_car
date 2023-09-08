import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { advertsReducer } from './adverts/advertsSlice';
import { filterReducer } from './filteredAdverts/filteredAdvertsSlice';
import { carDetailsReducer } from './carDetails/carDetailsSlice';

const persistAdverts = {
  key: 'faivoriteAdverts',
  version: 1,
  storage,
  whitelist: ['favoritesAdverts'],
};

export const store = configureStore({
  reducer: {
    adverts: persistReducer(persistAdverts, advertsReducer),
    filter: filterReducer,
    carDetails: carDetailsReducer,
  },
  // reducer: persistReducer(persistAdverts, advertsReducer),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV !== 'production',
});

export let persistor = persistStore(store);
