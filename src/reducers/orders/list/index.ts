import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { ORDER_CREATED, ORDER_DELETED } from "../../../actions/orders";
import Order from "../../../types/Order";

export default createReducer<Order[]>([], {
  [ORDER_CREATED]: (state, action: PayloadAction<Order>) => {
    state.push(action.payload);
  },
  [ORDER_DELETED]: (state, action: PayloadAction<Order>) =>
    state.filter(({ id }) => id !== action.payload.id)
});
