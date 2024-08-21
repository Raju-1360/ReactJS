import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productApi } from '../service/dummyData';

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Counter slice reducer
    [productApi.reducerPath]: productApi.reducer, // API slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

// Optional: This enables refetching behavior based on certain conditions (like focus or reconnect).
setupListeners(store.dispatch);
