import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { productDeleted } from "../../actions/products";
import Product from "../../types/Product";

interface Props {
  product: Product;
}

const ProductSummary: React.FunctionComponent<Props> = ({ product }) => {
  const dispatch = useDispatch();

  const handleDeleteButtonClick = () => {
    dispatch(productDeleted(product));
  };

  return (
    <div className="ProductSummary">
      <Link to={`/products/${product.id}`}>{product.name}</Link>
      <button onClick={handleDeleteButtonClick}>Delete</button>
    </div>
  );
};

export default ProductSummary;
