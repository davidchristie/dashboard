import React from "react";

import Button from "../components/Button";
import Heading from "../components/Heading";
import Topbar from "../components/Topbar";
import { EntityHooks } from "./createEntityHooks";
import Entity from "./Entity";

export type EntityComponents = ReturnType<typeof createEntityComponents>;

export interface CreateProps<T> {
  onSave: (values: Omit<T, "id">) => void;
}

export interface ListProps<T> {
  list: T[];
  onDelete: (entity: T) => void;
}

interface Input<T extends Entity> {
  Create: React.ComponentType<CreateProps<T>>;
  List: React.ComponentType<ListProps<T>>;
  hooks: EntityHooks<T>;
  plural: string;
  singular: string;
}

const createEntityComponents = <T extends Entity>({
  Create,
  List,
  hooks,
  plural,
  singular
}: Input<T>) => {
  const CreatePage: React.FunctionComponent = () => {
    const createProduct = hooks.useCreate();

    return (
      <div className={`Create${singular}Page`}>
        <Topbar />
        <Heading>Create {singular}</Heading>
        <Create onSave={createProduct} />
      </div>
    );
  };

  const ListPage: React.FunctionComponent = () => {
    const list = hooks.useList();
    const createPath = hooks.useCreatePath();
    const deleteEntity = hooks.useDelete();

    return (
      <div className={`${singular}ListPage`}>
        <Topbar />
        <Heading>{plural}</Heading>
        <Button to={createPath}>Create</Button>
        <List list={list} onDelete={deleteEntity} />
      </div>
    );
  };

  CreatePage.displayName = `Create${singular}Page`;
  ListPage.displayName = `${singular}ListPage`;

  return {
    CreatePage,
    ListPage
  };
};

export default createEntityComponents;
