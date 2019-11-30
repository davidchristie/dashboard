import { createAction, PayloadActionCreator } from "@reduxjs/toolkit";

import Entity from "./Entity";

export interface EntityActions<T extends Entity> {
  created: PayloadActionCreator<T>;
  createdActionType: string;
  deleted: PayloadActionCreator<T>;
  deletedActionType: string;
}

const createEntityActions = <T extends Entity>(
  entityType: string
): EntityActions<T> => {
  const entityTypeUpperCase = entityType.toUpperCase();
  const createdActionType = `${entityTypeUpperCase}_CREATED`;
  const deletedActionType = `${entityTypeUpperCase}_DELETED`;
  return {
    created: createAction<T>(createdActionType),
    createdActionType,
    deleted: createAction<T>(deletedActionType),
    deletedActionType
  };
};

export default createEntityActions;
