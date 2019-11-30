import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router";

import Heading from "../../components/Heading";
import Topbar from "../../components/Topbar";
import { productDetailsSelector } from "../../selectors/products";
import Product from "../../types/Product";
import State from "../../types/State";
import NotFoundPage from "../NotFoundPage";

const ViewProductPage: React.FunctionComponent = () => {
  const {
    params: { productId }
  } = useRouteMatch();

  const product = useSelector<State, Product | undefined>(state =>
    productDetailsSelector(state, productId)
  );

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <div className="ViewProductPage">
      <Topbar />
      <Heading>{product.name}</Heading>
    </div>
  );
};

export default ViewProductPage;
