import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import order, { Order } from "../../../entities/order";

export default createReducer<{ [id: string]: Order }>(
  {},
  {
    [order.createdActionType]: (state, action: PayloadAction<Order>) => {
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    },
    [order.deletedActionType]: (state, action: PayloadAction<Order>) => {
      const { [action.payload.id]: deletedOrder, ...otherOrders } = state;
      return otherOrders;
    }
  }
);
