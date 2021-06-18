import { FC, MouseEventHandler } from "react";

import { useIncrementHook } from "./hooks/increment";

export const FmIncrement: FC = () => {
  const increment = useIncrementHook();
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
