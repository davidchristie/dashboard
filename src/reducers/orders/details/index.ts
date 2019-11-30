import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { ORDER_CREATED, ORDER_DELETED } from "../../../actions/orders";
import Order from "../../../types/Order";

export default createReducer<{ [id: string]: Order }>(
  {},
  {
    [ORDER_CREATED]: (state, action: PayloadAction<Order>) => {
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    },
    [ORDER_DELETED]: (state, action: PayloadAction<Order>) => {
      const { [action.payload.id]: deletedOrder, ...otherOrders } = state;
      return otherOrders;
    }
  }
);
