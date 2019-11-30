import createEntityModel from "../factories/createEntityModel";
import Entity from "../factories/Entity";

export interface Product extends Entity {
  name: string;
}

export default createEntityModel<Product>("product");
