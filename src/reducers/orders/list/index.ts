import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import order, { Order } from "../../../entities/order";

export default createReducer<Order[]>([], {
  [order.createdActionType]: (state, action: PayloadAction<Order>) => {
    state.push(action.payload);
  },
  [order.deletedActionType]: (state, action: PayloadAction<Order>) =>
    state.filter(({ id }) => id !== action.payload.id)
});
