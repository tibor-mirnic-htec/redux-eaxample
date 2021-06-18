import { FC } from "react";

import { useRootStateSelector } from "src/modules/store";

export const FmOutput: FC = () => {
  const count = useRootStateSelector((state) => {
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
