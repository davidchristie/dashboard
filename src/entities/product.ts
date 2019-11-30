import createEntityResources from "../factories/createEntityResources";
import Entity from "../factories/Entity";

export interface Product extends Entity {
  name: string;
}

export default createEntityResources<Product>("product");
