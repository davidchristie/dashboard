import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import history from "./history";
import rootReducer from "./reducers";

const composedEnhancers = composeWithDevTools(
  applyMiddleware(routerMiddleware(history))
);
const store = createStore(rootReducer, composedEnhancers);

export default store;
