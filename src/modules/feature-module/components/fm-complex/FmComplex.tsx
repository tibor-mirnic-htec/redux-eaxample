import { FC, MouseEventHandler, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import { FmIncrement } from "./fm-increment/FmIncrement";
import { FmDecrement } from "./fm-decrement/FmDecrement";
import { FmOutput } from "./fm-output/FmOutput";
import { FmComplexAction, FmComplexActions } from "./store/actions";
import { CounterService } from "../../services/counter";

export const FmComplexComponent: FC = () => {
  const [getRandom, setGetRandom] = useState<string>("");
  const dispatch = useDispatch<Dispatch<FmComplexAction>>();

  const increment = useCallback(
    (increment: number) =>
      dispatch({
        type: FmComplexActions.INCREMENT,
        payload: increment,
      }),
    [dispatch]
  );

  useEffect(() => {
    const getRandomIncrement = async () => {
      try {
        const response = await CounterService.getCountIncrement();

        increment(response.count);
      } catch (error) {
        alert("Error: getCountIncrement");
      }
    };

    getRandomIncrement();
  }, [getRandom, increment]);

  const onRandomIncrement: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    setGetRandom(`random-${Math.random() * 1000000000000}`);
  };

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
        <button type="button" onClick={onRandomIncrement}>
          Get Random Increment
        </button>
      </div>
    </div>
  );
};
