import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";

import { EntityModel } from "./factories/createEntityModel";
import { createReduxStore } from "./factories/createReduxStore";
import history from "./history";
import NotFoundPage from "./pages/NotFoundPage";
import OverviewPage from "./pages/OverviewPage";

interface Props {
  models: EntityModel<any>[];
}

const Dashboard: React.FunctionComponent<Props> = ({ models }) => {
  const store = createReduxStore(models);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route component={OverviewPage} exact path="/" />
          {models.map(model => model.routes)}
          <Route component={NotFoundPage} path="*" />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default Dashboard;
