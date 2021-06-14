import { FC, MouseEventHandler, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { IRootState } from "src/modules/store";

import { FmIncrement } from "./fm-increment/FmIncrement";
import { FmDecrement } from "./fm-decrement/fm-decrement";
import { FmComplexAction, FmComplexActions } from "./store/actions";
import { CounterService } from "../../services/counter";

export const FmComplexComponent: FC = () => {
  const [getRandom, setGetRandom] = useState<string>("");
  const dispatch = useDispatch<Dispatch<FmComplexAction>>();

  const count = useSelector<IRootState, number>((state) => {
    return state.fmComplexReducer.count;
  });

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
      <h3>{count}</h3>
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
