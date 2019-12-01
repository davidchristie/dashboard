import createEntityModel from "../../factories/createEntityModel";
import Entity from "../../factories/Entity";
import CreateProductForm from "../product/CreateProductForm";
import ProductList from "../product/ProductList";

export interface Store extends Entity {
  name: string;
}

export default createEntityModel<Store>({
  Create: CreateProductForm,
  List: ProductList,
  plural: "Stores",
  singular: "store"
});
