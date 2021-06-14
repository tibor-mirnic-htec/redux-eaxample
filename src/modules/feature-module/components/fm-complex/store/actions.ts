import { Action } from "../../../../../common/core-ui/models/store/action";

export enum FmComplexActions {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

type Incerement = Action<FmComplexActions.INCREMENT, number>;
type Decrement = Action<FmComplexActions.DECREMENT, number>;

export type FmComplexAction = Incerement | Decrement;
