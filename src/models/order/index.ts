import createEntityModel from "../../factories/createEntityModel";
import Entity from "../../factories/Entity";
import CreateOrderForm from "./CreateOrderForm";
import OrderList from "./OrderList";

export interface Order extends Entity {
  name: string;
}

export default createEntityModel<Order>({
  Create: CreateOrderForm,
  List: OrderList,
  plural: "Orders",
  singular: "Order"
});
