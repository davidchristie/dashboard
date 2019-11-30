import React from "react";

import Heading from "../../components/Heading";
import Topbar from "../../components/Topbar";
import ProductList from "../../containers/ProductList";
import CreateProductButton from "./CreateProductButton";

const ProductListPage: React.FunctionComponent = () => (
  <div className="ProductListPage">
    <Topbar />
    <Heading>Products</Heading>
    <CreateProductButton />
    <ProductList />
  </div>
);

export default ProductListPage;
