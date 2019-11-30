import createEntityActions, { EntityActions } from "./createEntityActions";
import createEntityReducer, { EntityReducer } from "./createEntityReducer";
import Entity from "./Entity";

export type EntityModel<T extends Entity> = EntityActions<T> & {
  reducer: EntityReducer<T>;
};

const createEntityModel = <T extends Entity>(
  singular: string
): EntityModel<T> => {
  const actions = createEntityActions<T>(singular);
  return {
    ...actions,
    reducer: createEntityReducer<T>(actions)
  };
};

export default createEntityModel;
