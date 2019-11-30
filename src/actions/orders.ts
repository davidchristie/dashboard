import { createAction } from "@reduxjs/toolkit";

import Order from "../types/Order";

export const ORDER_CREATED = "ORDER_CREATED";
export const ORDER_DELETED = "ORDER_DELETED";

export const orderCreated = createAction<Order>(ORDER_CREATED);
export const orderDeleted = createAction<Order>(ORDER_DELETED);
