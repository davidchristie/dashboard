import React from "react";
import { Link } from "react-router-dom";

import { Product } from ".";

interface Props {
  onDelete: () => void;
  product: Product;
}

const ProductSummary: React.FunctionComponent<Props> = ({
  onDelete,
  product
}) => (
  <div className="ProductSummary">
    <Link to={`/products/${product.id}`}>{product.name}</Link>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default ProductSummary;
