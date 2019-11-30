import {
  combineReducers,
  createReducer,
  PayloadAction,
  Reducer
} from "@reduxjs/toolkit";

import { EntityActions } from "./createEntityActions";
import Entity from "./Entity";

export type EntityReducer<T extends Entity> = Reducer<{
  details: {
    [id: string]: T;
  };
  list: T[];
}>;

const createDetailsReducer = <T extends Entity>({
  createdActionType,
  deletedActionType
}: EntityActions<T>) => {
  return createReducer<{ [id: string]: T }>(
    {},
    {
      [createdActionType]: (state, action: PayloadAction<any>) => {
        return {
          ...state,
          [action.payload.id]: action.payload
        };
      },
      [deletedActionType]: (state, action: PayloadAction<any>) => {
        const { [action.payload.id]: deletedOrder, ...otherOrders } = state;
        return otherOrders;
      }
    }
  );
};

const createListReducer = <T extends Entity>({
  createdActionType,
  deletedActionType
}: EntityActions<T>) => {
  return createReducer<T[]>([], {
    [createdActionType]: (state, action: PayloadAction<any>) => {
      state.push(action.payload);
    },
    [deletedActionType]: (state, action: PayloadAction<any>) =>
      state.filter(({ id }) => id !== action.payload.id)
  });
};

const createEntityReducer = <T extends Entity>(
  actions: EntityActions<T>
): EntityReducer<T> => {
  return combineReducers({
    details: createDetailsReducer<T>(actions),
    list: createListReducer<T>(actions)
  });
};

export default createEntityReducer;
