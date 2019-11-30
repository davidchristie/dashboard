import createEntityModel from "../factories/createEntityModel";
import Entity from "../factories/Entity";

export interface Order extends Entity {
  name: string;
}

export default createEntityModel<Order>("order");
