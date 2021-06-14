import { FC, MouseEventHandler, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import { FmComplexAction, FmComplexActions } from "../state/actions";
import { CounterService } from "../../../services/counter";

export const FmRandomIncrement: FC = () => {
  const [getRandom, setGetRandom] = useState<string>("");
  const dispatch = useDispatch<Dispatch<FmComplexAction>>();

  const randomIncrement = useCallback(
    (increment: number) =>
      dispatch({
        type: FmComplexActions.RANDOM_INCREMENT,
        payload: increment,
      }),
    [dispatch]
  );

  useEffect(() => {
    const getRandomIncrement = async () => {
      try {
        const response = await CounterService.getRandomIncrement();

        randomIncrement(response.increment);
      } catch (error) {
        alert("Error: getCountIncrement");
      }
    };

    getRandomIncrement();
  }, [getRandom, randomIncrement]);

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
