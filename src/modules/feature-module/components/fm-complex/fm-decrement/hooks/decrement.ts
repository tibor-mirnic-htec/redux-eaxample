import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import { FmComplexAction, FmComplexActions } from "../../state/actions";
import { DecrementHook } from "../models/hooks/decrement";

export const useDecrementHook = (): DecrementHook => {
  const dispatch = useDispatch<Dispatch<FmComplexAction>>();

  const decrement = useCallback(
    (decrement: number) =>
      dispatch({
        type: FmComplexActions.DECREMENT,
        payload: decrement,
      }),
    [dispatch]
  );

  return decrement;
};
