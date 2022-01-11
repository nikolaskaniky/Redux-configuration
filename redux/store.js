import { useMemo } from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { categoryReducer } from "./reducers/category-reducers";
import thunk from "redux-thunk";

let store;

const reducers = combineReducers({
  category: categoryReducer,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["category"], // place to select which state you want to persist
};

const persistedReducer = persistReducer(persistConfig, reducers);

function makeStore(initialState) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

//! npm installs.
//redux
//redux-devtools-extension
//redux-persist
//redux-thunk
