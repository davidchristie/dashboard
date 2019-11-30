import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import history from "../history";
import rootReducer from "../reducers";

export const createReduxStore = () => {
  const composedEnhancers = composeWithDevTools(
    applyMiddleware(routerMiddleware(history))
  );
  return createStore(rootReducer, composedEnhancers);
};
