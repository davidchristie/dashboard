import React from "react";

import { Product } from ".";
import ProductSummary from "./ProductSummary";

interface Props {
  list: Product[];
  onDelete: (product: Product) => void;
}

const ProductList: React.FunctionComponent<Props> = ({ list, onDelete }) => (
  <div className="ProductList">
    {list.map(product => (
      <ProductSummary
        key={product.id}
        onDelete={() => onDelete(product)}
        product={product}
      />
    ))}
  </div>
);

export default ProductList;
