import { useDispatch } from "react-redux";
import uuid from "uuid/v4";

import { EntityActions } from "./createEntityActions";
import Entity from "./Entity";

export interface EntityHooks<T extends Entity> {
  useCreate: (entity: Omit<T, "id">) => () => void;
  useDelete: (entity: T) => () => void;
}

const createEntityHooks = <T extends Entity>({
  created,
  deleted
}: EntityActions<any>): EntityHooks<T> => {
  const useCreate = (entity: Omit<T, "id">) => {
    const dispatch = useDispatch();
    return () =>
      dispatch(
        created({
          ...entity,
          id: uuid()
        })
      );
  };

  const useDelete = (entity: T) => {
    const dispatch = useDispatch();
    return () => dispatch(deleted(entity));
  };

  return {
    useCreate,
    useDelete
  };
};

export default createEntityHooks;
