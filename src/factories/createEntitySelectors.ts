import { createSelector } from "@reduxjs/toolkit";

import { EntityState } from "./createEntityReducer";
import Entity from "./Entity";

export interface EntitySelectors<T extends Entity> {
  detailsSelector: (state: unknown, id: string) => T | undefined;
  listSelector: (state: unknown) => T[];
}

interface Input {
  plural: string;
}

const isEntityState = <T extends Entity>(
  state: any
): state is EntityState<T> => {
  return (
    state !== undefined &&
    typeof state.details === "object" &&
    typeof state.list === "object"
  );
};

const createEntitySelector = <T extends Entity>({
  plural
}: Input): EntitySelectors<T> => {
  const entitySelector = (state: any): unknown => state[plural.toLowerCase()];

  const detailsSelector = (state: unknown, id: string): T | undefined => {
    const entity = entitySelector(state);
    if (isEntityState<T>(entity)) {
      return entity.details[id];
    }
    return undefined;
  };

  const listSelector = createSelector(entitySelector, entity => {
    if (isEntityState<T>(entity)) {
      return entity.list;
    }
    return [];
  });

  return {
    detailsSelector,
    listSelector
  };
};

export default createEntitySelector;
