import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import { FmComplexAction, FmComplexActions } from "../../state/actions";
import { RandomIncrementHook } from "../models/hooks/random-increment";
import { CounterService } from "../../../../services/counter";

export const useRandomIncrementHook = (): RandomIncrementHook => {
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

  return setGetRandom;
};
