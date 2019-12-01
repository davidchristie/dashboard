import { ComponentType } from "react";

import createEntityActions, { EntityActions } from "./createEntityActions";
import createEntityComponents, {
  EntityComponents
} from "./createEntityComponents";
import createEntityHooks, { EntityHooks } from "./createEntityHooks";
import createEntityReducer, { EntityReducer } from "./createEntityReducer";
import createEntitySelectors, {
  EntitySelectors
} from "./createEntitySelectors";
import Entity from "./Entity";

export type EntityModel<T extends Entity> = EntityActions<T> &
  EntityComponents &
  EntityHooks<T> &
  EntitySelectors<T> &
  EntityReducer<T>;

export interface Input<T> {
  Create: ComponentType<{
    onSave: (values: Omit<T, "id">) => void;
  }>;
  List: React.ComponentType<{
    list: T[];
    onDelete: (entity: T) => void;
  }>;
  plural: string;
  singular: string;
}

const createEntityModel = <T extends Entity>(
  input: Input<T>
): EntityModel<T> => {
  const actions = createEntityActions<T>(input.singular);
  const selectors = createEntitySelectors<T>({
    plural: input.plural
  });
  const reducer = createEntityReducer<T>(actions);
  const hooks = createEntityHooks({
    actions,
    plural: input.plural,
    selectors
  });
  const components = createEntityComponents({
    Create: input.Create,
    List: input.List,
    hooks,
    plural: input.plural,
    singular: input.singular
  });
  return {
    ...actions,
    ...components,
    ...hooks,
    ...selectors,
    ...reducer
  };
};

export default createEntityModel;
