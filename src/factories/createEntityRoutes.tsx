import React from "react";
import { Route } from "react-router";

import { EntityComponents } from "./createEntityComponents";
import Entity from "./Entity";

export type EntityRoutes = ReturnType<typeof createEntityRoutes>;

interface Input<T extends Entity> {
  components: EntityComponents;
  plural: string;
}

const createEntityRoutes = <T extends Entity>({
  components,
  plural
}: Input<T>) => {
  const basePath = plural.toLowerCase();
  const routes = [
    {
      component: components.CreatePage,
      path: `/${basePath}`
    },
    {
      component: components.ListPage,
      path: `/${basePath}/create`
    }
  ].map(({ component, path }, index) => (
    <Route component={component} exact key={index} path={path} />
  ));

  return {
    routes
  };
};

export default createEntityRoutes;
