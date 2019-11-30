import { createAction, PayloadActionCreator } from "@reduxjs/toolkit";

import Entity from "./Entity";

export interface EntityActions<T extends Entity> {
  created: PayloadActionCreator<T>;
  createdActionType: string;
  deleted: PayloadActionCreator<T>;
  deletedActionType: string;
}

const createEntityActions = <T extends Entity>(
  singular: string
): EntityActions<T> => {
  const singularUpperCase = singular.toUpperCase();
  const createdActionType = `${singularUpperCase}_CREATED`;
  const deletedActionType = `${singularUpperCase}_DELETED`;
  return {
    created: createAction<T>(createdActionType),
    createdActionType,
    deleted: createAction<T>(deletedActionType),
    deletedActionType
  };
};

export default createEntityActions;
