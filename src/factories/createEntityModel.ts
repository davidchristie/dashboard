import createEntityActions, { EntityActions } from "./createEntityActions";
import createEntityHooks, { EntityHooks } from "./createEntityHooks";
import createEntityReducer, { EntityReducer } from "./createEntityReducer";
import createEntitySelectors, {
  EntitySelectors
} from "./createEntitySelectors";
import Entity from "./Entity";

export type EntityModel<T extends Entity> = EntityActions<T> &
  EntityHooks<T> &
  EntitySelectors<T> &
  EntityReducer<T> & {
    entityType: string;
  };

const createEntityModel = <T extends Entity>(
  entityType: string
): EntityModel<T> => {
  const actions = createEntityActions<T>(entityType);
  return {
    ...actions,
    ...createEntityHooks(actions),
    ...createEntitySelectors(entityType),
    ...createEntityReducer<T>(actions),
    entityType
  };
};

export default createEntityModel;
