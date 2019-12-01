import "./Application.css";

import React from "react";

import Dashboard from "./Dashboard";
import order from "./models/order";
import product from "./models/product";
import store from "./models/store";

const Application: React.FunctionComponent = () => (
  <div className="Application">
    <Dashboard models={[order, product, store]} />
  </div>
);

export default Application;
