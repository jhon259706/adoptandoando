import { configureStore } from '@reduxjs/toolkit';

import countReducer from './slices/countSlice';

let store: any;

const createStore = (preloadedState: any) => {
  return configureStore({
    reducer: { count: countReducer },
    preloadedState,
  });
};

export const initializeStore = (preloadedState: any) => {
  let _store = store ?? createStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = createStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
