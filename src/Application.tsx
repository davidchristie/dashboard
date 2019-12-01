import "./Application.css";

import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";

import history from "./history";
import Routes from "./Routes";
import { createReduxStore } from "./store";

const store = createReduxStore();

const Application: React.FunctionComponent = () => (
  <div className="Application">
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  </div>
);

export default Application;
