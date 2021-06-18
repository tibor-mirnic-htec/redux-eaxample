import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import { FmComplexAction, FmComplexActions } from "../../state/actions";
import { IncrementHook } from "../models/hooks/increment";

export const useIncrementHook = (): IncrementHook => {
  const dispatch = useDispatch<Dispatch<FmComplexAction>>();

  const increment = useCallback(
    (increment: number) =>
      dispatch({
        type: FmComplexActions.INCREMENT,
        payload: increment,
      }),
    [dispatch]
  );

  return increment;
};
