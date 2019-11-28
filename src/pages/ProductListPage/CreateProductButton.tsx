import React from "react";
import { Link } from "react-router-dom";
import "./CreateProductButton.css";

const CreateProductButton: React.FunctionComponent = () => (
  <div className="CreateProductButton">
    <Link to="/products/create">Create</Link>
  </div>
);

export default CreateProductButton;
