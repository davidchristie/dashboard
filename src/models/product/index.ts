import createEntityModel from "../../factories/createEntityModel";
import Entity from "../../factories/Entity";
import CreateProductForm from "./CreateProductForm";
import ProductList from "./ProductList";

export interface Product extends Entity {
  name: string;
}

export default createEntityModel<Product>({
  Create: CreateProductForm,
  List: ProductList,
  plural: "Products",
  singular: "Product"
});
