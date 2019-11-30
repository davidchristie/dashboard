import { createAction } from "@reduxjs/toolkit";

import Entity from "./Entity";

const createEntityActions = <E extends Entity = Entity>(singular: string) => {
  const singularUpperCase = singular.toUpperCase();
  const createdActionType = `${singularUpperCase}_CREATED`;
  const deletedActionType = `${singularUpperCase}_DELETED`;

  return {
    created: createAction<E>(createdActionType),
    createdActionType,
    deleted: createAction<E>(deletedActionType),
    deletedActionType
  };
};

export default createEntityActions;
