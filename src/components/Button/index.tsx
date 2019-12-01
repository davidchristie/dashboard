import "./index.css";

import React from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
}

const Button: React.FunctionComponent<Props> = ({ children, to }) => (
  <div className="Button">
    <Link to={to}>{children}</Link>
  </div>
);

export default Button;
