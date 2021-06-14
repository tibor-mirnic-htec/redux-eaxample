import { FC } from "react";
import { useSelector } from "react-redux";

import { IRootState } from "src/modules/store";

export const FmOutput: FC = () => {
  const count = useSelector<IRootState, number>((state) => {
    return state.fmComplexReducer.count;
  });

  return (
    <div
      style={{
        fontWeight: "bold",
      }}
    >
      {count}
    </div>
  );
};
