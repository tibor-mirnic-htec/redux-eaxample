import { FC, MouseEventHandler } from "react";

import { useDecrementHook } from "./hooks/decrement";

export const FmDecrement: FC = () => {
  const decrement = useDecrementHook();

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
