import { createStore, combineReducers, Store, compose } from "redux";

import { IRootState } from "./models/store";
import { fmComplexReducer } from "src/modules/feature-module";

export * from "./models/store";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store<IRootState> = createStore(
  combineReducers<IRootState>({
    fmComplexReducer,
  }),
  composeEnhancers()
);
