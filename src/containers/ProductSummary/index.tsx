import React from "react";
import { Link } from "react-router-dom";

import product, { Product } from "../../models/product";

interface Props {
  product: Product;
}

const { useDelete } = product;

const ProductSummary: React.FunctionComponent<Props> = ({ product }) => {
  const deleteProduct = useDelete(product);

  return (
    <div className="ProductSummary">
      <Link to={`/products/${product.id}`}>{product.name}</Link>
      <button onClick={deleteProduct}>Delete</button>
    </div>
  );
};

export default ProductSummary;
