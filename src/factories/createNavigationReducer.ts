import { createReducer, Reducer } from "@reduxjs/toolkit";

import { EntityModel } from "./createEntityModel";
import Entity from "./Entity";

const createNavigationReducer = (models: EntityModel<Entity>[]): Reducer => {
  const initialState = {
    items: [
      {
        text: "Overview",
        to: "/"
      },
      ...models.map(model => ({
        text: model.plural,
        to: `/${model.plural.toLowerCase()}`
      }))
    ]
  };
  return createReducer(initialState, {});
};

export default createNavigationReducer;
