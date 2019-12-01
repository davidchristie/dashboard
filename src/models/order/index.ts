import createEntityModel from "../../factories/createEntityModel";
import Entity from "../../factories/Entity";
import CreateProductForm from "../product/CreateProductForm";
import ProductList from "../product/ProductList";

export interface Order extends Entity {
  name: string;
}

export default createEntityModel<Order>({
  Create: CreateProductForm,
  List: ProductList,
  plural: "Orders",
  singular: "Order"
});
