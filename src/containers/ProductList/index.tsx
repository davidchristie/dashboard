import React from "react";
import { useSelector } from "react-redux";
import { productListSelector } from "../../selectors/products";
import ProductSummary from "../ProductSummary";

const ProductList: React.FunctionComponent = () => {
  const list = useSelector(productListSelector);

  return (
    <div className="ProductList">
      {list.map(product => (
        <ProductSummary key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
