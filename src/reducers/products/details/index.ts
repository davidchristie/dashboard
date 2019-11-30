import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { PRODUCT_CREATED, PRODUCT_DELETED } from "../../../actions/products";
import Product from "../../../types/Product";

export default createReducer<{ [id: string]: Product }>(
  {},
  {
    [PRODUCT_CREATED]: (state, action: PayloadAction<Product>) => {
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    },
    [PRODUCT_DELETED]: (state, action: PayloadAction<Product>) => {
      const { [action.payload.id]: deletedProduct, ...otherProducts } = state;
      return otherProducts;
    }
  }
);
