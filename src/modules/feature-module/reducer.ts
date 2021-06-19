import { combineReducers } from "redux";

import { fmComplex } from "./components/fm-complex/state/reducer";

export const featureModule = combineReducers({
  fmComplex,
});
