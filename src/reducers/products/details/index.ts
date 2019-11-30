import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import product, { Product } from "../../../entities/product";

export default createReducer<{ [id: string]: Product }>(
  {},
  {
    [product.createdActionType]: (state, action: PayloadAction<Product>) => {
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    },
    [product.deletedActionType]: (state, action: PayloadAction<Product>) => {
      const { [action.payload.id]: deletedProduct, ...otherProducts } = state;
      return otherProducts;
    }
  }
);
