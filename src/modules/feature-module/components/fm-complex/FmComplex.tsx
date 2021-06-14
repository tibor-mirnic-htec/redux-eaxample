import { FC } from "react";

import { FmIncrement } from "./fm-increment/FmIncrement";
import { FmDecrement } from "./fm-decrement/FmDecrement";
import { FmOutput } from "./fm-output/FmOutput";
import { FmRandomIncrement } from "./fm-random-increment/FmRandomIncrement";

export const FmComplexComponent: FC = () => {
  return (
    <div>
      <h1>Complex Component</h1>
      <div>
        <FmOutput />
      </div>
      <div>
        <FmIncrement />
      </div>
      <div>
        <FmDecrement />
      </div>
      <div>
        <FmRandomIncrement />
      </div>
    </div>
  );
};
