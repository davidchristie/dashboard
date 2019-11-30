import { createAction } from "@reduxjs/toolkit";

import Product from "../types/Product";

export const PRODUCT_CREATED = "PRODUCT_CREATED";
export const PRODUCT_DELETED = "PRODUCT_DELETED";

export const productCreated = createAction<Product>(PRODUCT_CREATED);
export const productDeleted = createAction<Product>(PRODUCT_DELETED);
