import { connectRouter, routerMiddleware } from "connected-react-router";
import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import history from "../history";
import { EntityModel } from "./createEntityModel";
import Entity from "./Entity";

export const createReduxStore = (models: EntityModel<Entity>[]) => {
  const entityReducers = models.reduce<{ [plural: string]: Reducer }>(
    (accumulator, current) => {
      accumulator[current.plural] = current.reducer;
      return accumulator;
    },
    {}
  );
  const rootReducer = combineReducers({
    ...entityReducers,
    router: connectRouter(history)
  });
  const composedEnhancers = composeWithDevTools(
    applyMiddleware(routerMiddleware(history))
  );
  return createStore(rootReducer, composedEnhancers);
};
