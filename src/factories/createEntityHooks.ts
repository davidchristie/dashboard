import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import uuid from "uuid/v4";

import { EntityActions } from "./createEntityActions";
import { EntitySelectors } from "./createEntitySelectors";
import Entity from "./Entity";

export interface EntityHooks<T extends Entity> {
  useCreate: () => (values: Omit<T, "id">) => void;
  useCreatePath: () => string;
  useDelete: () => (entity: T) => void;
  useList: () => T[];
}

interface Input<T extends Entity> {
  actions: EntityActions<any>;
  plural: string;
  selectors: EntitySelectors<T>;
}

const createEntityHooks = <T extends Entity>({
  actions,
  plural,
  selectors
}: Input<T>): EntityHooks<T> => {
  const useCreate = () => {
    const dispatch = useDispatch();
    return (values: Omit<T, "id">) => {
      dispatch(push(`/${plural.toLowerCase()}`));
      dispatch(
        actions.created({
          ...values,
          id: uuid()
        })
      );
    };
  };

  const useCreatePath = () => `/${plural.toLowerCase()}/create`;

  const useDelete = () => {
    const dispatch = useDispatch();
    return (entity: T) => {
      dispatch(actions.deleted(entity));
    };
  };

  const useList = () => {
    const list = useSelector(selectors.listSelector);
    return list;
  };

  return {
    useCreate,
    useCreatePath,
    useDelete,
    useList
  };
};

export default createEntityHooks;
