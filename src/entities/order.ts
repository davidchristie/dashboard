import createEntityResources from "../factories/createEntityResources";
import Entity from "../factories/Entity";

export interface Order extends Entity {
  name: string;
}

export default createEntityResources<Order>("order");
