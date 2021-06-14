import { FC, MouseEventHandler, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import { FmComplexAction, FmComplexActions } from "../store/actions";

export const FmDecrement: FC = () => {
  const dispatch = useDispatch<Dispatch<FmComplexAction>>();

  const decrement = useCallback(
    (decrement: number) =>
      dispatch({
        type: FmComplexActions.DECREMENT,
        payload: decrement,
      }),
    [dispatch]
  );

  const onDecrement: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    decrement(5);
  };

  return (
    <button type="button" onClick={onDecrement}>
      Decrement by 5
    </button>
  );
};
