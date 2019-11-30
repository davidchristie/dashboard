import { createSelector } from "@reduxjs/toolkit";

import { Product } from "../models/product";
import { State } from "../store";

export const productsSelector = (state: State) => state.products;

export const productDetailsSelector = (
  state: State,
  productId: string
): Product | undefined => {
  return productsSelector(state).details[productId];
};

export const productListSelector = createSelector(
  productsSelector,
  products => products.list
);
