import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import history from "../history";
import order from "../models/order";
import product from "../models/product";

export default combineReducers({
  orders: order.reducer,
  products: product.reducer,
  router: connectRouter(history)
});
