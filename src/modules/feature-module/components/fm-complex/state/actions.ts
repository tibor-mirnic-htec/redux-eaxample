import { Action } from "src/common/core-ui";

export enum FmComplexActions {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RANDOM_INCREMENT = "RANDOM_INCREMENT",
}

type Incerement = Action<FmComplexActions.INCREMENT, number>;
type Decrement = Action<FmComplexActions.DECREMENT, number>;
type RandomIncrement = Action<FmComplexActions.RANDOM_INCREMENT, number>;

export type FmComplexAction = Incerement | Decrement | RandomIncrement;
