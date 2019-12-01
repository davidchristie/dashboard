import "./Application.css";

import React from "react";

import Dashboard from "./Dashboard";
import order from "./models/order";
import product from "./models/product";

const Application: React.FunctionComponent = () => (
  <div className="Application">
    <Dashboard models={[order, product]} />
  </div>
);

export default Application;
