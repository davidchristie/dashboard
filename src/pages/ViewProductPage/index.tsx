import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router";

import Heading from "../../components/Heading";
import Topbar from "../../components/Topbar";
import product, { Product } from "../../models/product";
import { State } from "../../store";
import NotFoundPage from "../NotFoundPage";

const { detailsSelector } = product;

const ViewProductPage: React.FunctionComponent = () => {
  const {
    params: { productId }
  } = useRouteMatch();

  const product = useSelector<State, Product | undefined>(state =>
    detailsSelector(state, productId)
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
