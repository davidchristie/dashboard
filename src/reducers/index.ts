import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import history from "../history";
import products from "./products";

export default combineReducers({
  products,
  router: connectRouter(history)
});
