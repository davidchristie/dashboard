import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import history from "../history";
import orders from "./orders";
import products from "./products";

export default combineReducers({
  orders,
  products,
  router: connectRouter(history)
});
