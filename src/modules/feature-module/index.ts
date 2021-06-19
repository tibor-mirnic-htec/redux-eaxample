import { combineReducers } from "redux";

import { fmComplex } from "./components/fm-complex/state/reducer";

export * from "./components/fm-complex/FmComplex";

export const featureModule = combineReducers({
  fmComplex,
});
