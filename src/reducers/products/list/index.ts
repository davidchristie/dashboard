import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import product, { Product } from "../../../entities/product";

export default createReducer<Product[]>([], {
  [product.createdActionType]: (state, action: PayloadAction<Product>) => {
    state.push(action.payload);
  },
  [product.deletedActionType]: (state, action: PayloadAction<Product>) =>
    state.filter(({ id }) => id !== action.payload.id)
});
