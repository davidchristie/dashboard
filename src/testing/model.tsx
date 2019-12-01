import React from "react";

import createEntityModel from "../factories/createEntityModel";
import { Product } from "../models/product";

export default createEntityModel<Product>({
  Create: () => <div data-testid="Create" />,
  List: () => <div data-testid="List" />,
  plural: "Products",
  singular: "Product"
});
