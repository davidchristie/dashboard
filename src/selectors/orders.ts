import { createSelector } from "@reduxjs/toolkit";

import Product from "../types/Product";
import State from "../types/State";

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
