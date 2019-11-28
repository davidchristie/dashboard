import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { PRODUCT_CREATED, PRODUCT_DELETED } from "../../../actions/products";
import Product from "../../../types/Product";

export default createReducer<Product[]>([], {
  [PRODUCT_CREATED]: (state, action: PayloadAction<Product>) => {
    state.push(action.payload);
  },
  [PRODUCT_DELETED]: (state, action: PayloadAction<Product>) =>
    state.filter(({ id }) => id !== action.payload.id)
});
