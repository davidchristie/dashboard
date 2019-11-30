import "./CreateOrderButton.css";

import React from "react";
import { Link } from "react-router-dom";

const CreateOrderButton: React.FunctionComponent = () => (
  <div className="CreateOrderButton">
    <Link to="/orders/create">Create</Link>
  </div>
);

export default CreateOrderButton;
