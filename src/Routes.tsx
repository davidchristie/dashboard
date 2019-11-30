import React from "react";
import { Route, Switch } from "react-router";

import CreateProductPage from "./pages/CreateProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import OverviewPage from "./pages/OverviewPage";
import ProductListPage from "./pages/ProductListPage";
import ViewProductPage from "./pages/ViewProductPage";

const Routes: React.FunctionComponent = () => (
  <div className="Routes">
    <Switch>
      <Route component={OverviewPage} exact path="/" />
      <Route component={ProductListPage} exact path="/products" />
      <Route component={CreateProductPage} exact path="/products/create" />
      <Route component={ViewProductPage} exact path="/products/:productId" />
      <Route component={NotFoundPage} path="*" />
    </Switch>
  </div>
);

export default Routes;
