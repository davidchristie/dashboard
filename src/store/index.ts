import { connectRouter, routerMiddleware } from "connected-react-router";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import history from "../history";
import order from "../models/order";
import product from "../models/product";

export const createReduxStore = () => {
  const rootReducer = combineReducers({
    orders: order.reducer,
    products: product.reducer,
    router: connectRouter(history)
  });

  const composedEnhancers = composeWithDevTools(
    applyMiddleware(routerMiddleware(history))
  );
  return createStore(rootReducer, composedEnhancers);
};
