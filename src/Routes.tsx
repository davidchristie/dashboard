import React from "react";
import { Route, Switch } from "react-router";

import order from "./models/order";
import product from "./models/product";
import NotFoundPage from "./pages/NotFoundPage";
import OverviewPage from "./pages/OverviewPage";

const Routes: React.FunctionComponent = () => (
  <div className="Routes">
    <Switch>
      <Route component={OverviewPage} exact path="/" />
      {order.routes}
      {product.routes}
      <Route component={NotFoundPage} path="*" />
    </Switch>
  </div>
);

export default Routes;
