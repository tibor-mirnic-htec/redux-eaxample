import { createStore, combineReducers, Store } from "redux";

import { IRootState } from "./models/store";
import { fmComplexReducer } from "src/modules/feature-module";

export * from "./models/store";

export const store: Store<IRootState> = createStore(
  combineReducers<IRootState>({
    fmComplexReducer,
  })
);
