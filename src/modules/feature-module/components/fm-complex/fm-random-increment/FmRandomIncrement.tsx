import { FC, MouseEventHandler } from "react";

import { useRandomIncrementHook } from "./hooks/random-increment";

export const FmRandomIncrement: FC = () => {
  const setGetRandom = useRandomIncrementHook();

  const onRandomIncrement: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    setGetRandom(`random-${Math.random() * 1000000000000}`);
  };

  return (
    <button type="button" onClick={onRandomIncrement}>
      Random Increment
    </button>
  );
};
