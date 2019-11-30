import createEntityActions from "./createEntityActions";
import Entity from "./Entity";

const createEntityResources = <E extends Entity = Entity>(singular: string) => {
  return {
    ...createEntityActions<E>(singular)
  };
};

export default createEntityResources;
