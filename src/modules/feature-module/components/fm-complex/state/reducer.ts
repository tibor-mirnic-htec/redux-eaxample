import { FmComplexAction, FmComplexActions } from "./actions";
import { IFmComplexState, initialState } from "./state";

export const fmComplex = (
  state: IFmComplexState = initialState,
  action: FmComplexAction
): IFmComplexState => {
  switch (action.type) {
    case FmComplexActions.INCREMENT: {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }
    case FmComplexActions.DECREMENT: {
      return {
        ...state,
        count: state.count - action.payload,
      };
    }
    case FmComplexActions.RANDOM_INCREMENT: {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
