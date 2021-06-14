import { EnumType } from "../enum/enum-type";

export type Action<E extends typeof EnumType, T> = {
  type: E;
  payload: T;
};
