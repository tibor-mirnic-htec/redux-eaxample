import { createStore, combineReducers, compose } from "redux";

import { featureModule } from "src/modules/feature-module";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    featureModule,
  }),
  composeEnhancers()
);
