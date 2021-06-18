import { FC, MouseEventHandler } from "react";

import { useRandomIncrementHook } from "./hooks/random-increment";

export const FmRandomIncrement: FC = () => {
  const generateRandom = useRandomIncrementHook();

  const onRandomIncrement: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    generateRandom();
  };

  return (
    <button type="button" onClick={onRandomIncrement}>
      Random Increment
    </button>
  );
};
