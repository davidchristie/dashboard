import React from "react";

import Button from "../components/Button";
import Heading from "../components/Heading";
import Topbar from "../components/Topbar";
import { EntityHooks } from "./createEntityHooks";
import Entity from "./Entity";

export type EntityComponents = ReturnType<typeof createEntityComponents>;

interface Input<T extends Entity> {
  Create: React.ComponentType<{
    onSave: (values: Omit<T, "id">) => void;
  }>;
  List: React.ComponentType<{
    list: T[];
    onDelete: (entity: T) => void;
  }>;
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

    const handleSave = (values: Omit<T, "id">) => {
      createProduct(values);
    };

    return (
      <div className={`Create${singular}Page`}>
        <Topbar />
        <Heading>Create {singular}</Heading>
        <Create onSave={handleSave} />
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
