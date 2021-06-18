import { createStore, combineReducers, compose } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { fmComplexReducer } from "src/modules/feature-module";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    fmComplexReducer,
  }),
  composeEnhancers()
);

type RootState = ReturnType<typeof store.getState>;

export const useRootStateSelector: TypedUseSelectorHook<RootState> =
  useSelector;
