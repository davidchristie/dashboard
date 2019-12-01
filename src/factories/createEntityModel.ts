import { ComponentType } from "react";

import createEntityActions, { EntityActions } from "./createEntityActions";
import createEntityComponents, {
  CreateProps,
  EntityComponents,
  ListProps
} from "./createEntityComponents";
import createEntityHooks, { EntityHooks } from "./createEntityHooks";
import createEntityReducer, { EntityReducer } from "./createEntityReducer";
import createEntityRoutes, { EntityRoutes } from "./createEntityRoutes";
import createEntitySelectors, {
  EntitySelectors
} from "./createEntitySelectors";
import Entity from "./Entity";

export type EntityModel<T extends Entity> = EntityActions<T> &
  EntityComponents &
  EntityHooks<T> &
  EntitySelectors<T> &
  EntityReducer<T> &
  EntityRoutes & {
    plural: string;
    singular: string;
  };

export interface Input<T> {
  Create: ComponentType<CreateProps<T>>;
  List: React.ComponentType<ListProps<T>>;
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
  const routes = createEntityRoutes({
    components,
    plural: input.plural
  });
  return {
    ...actions,
    ...components,
    ...hooks,
    ...selectors,
    ...reducer,
    ...routes,
    plural: input.plural,
    singular: input.singular
  };
};

export default createEntityModel;
