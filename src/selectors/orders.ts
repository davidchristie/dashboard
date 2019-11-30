import { createSelector } from "@reduxjs/toolkit";

import { Product } from "../models/product";
import { State } from "../store";

export const ordersSelector = (state: State) => state.orders;

export const orderDetailsSelector = (
  state: State,
  orderId: string
): Product | undefined => {
  return ordersSelector(state).details[orderId];
};

export const orderListSelector = createSelector(
  ordersSelector,
  orders => orders.list
);
