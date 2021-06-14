import { FC, MouseEventHandler, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import { FmComplexAction, FmComplexActions } from "../store/actions";

export const FmIncrement: FC = () => {
  const dispatch = useDispatch<Dispatch<FmComplexAction>>();

  const increment = useCallback(
    (increment: number) =>
      dispatch({
        type: FmComplexActions.INCREMENT,
        payload: increment,
      }),
    [dispatch]
  );

  const onIncrement: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    increment(10);
  };

  return (
    <button type="button" onClick={onIncrement}>
      Increment by 10
    </button>
  );
};
