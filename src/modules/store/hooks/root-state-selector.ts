import { TypedUseSelectorHook, useSelector } from "react-redux";

import { store } from "../store";

type RootState = ReturnType<typeof store.getState>;

export const useRootStateSelector: TypedUseSelectorHook<RootState> =
  useSelector;
