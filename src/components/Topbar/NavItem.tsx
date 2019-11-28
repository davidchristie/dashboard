import React from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
}

const NavItem: React.FunctionComponent<Props> = ({ children, to }) => {
  return (
    <li className="NavItem">
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default NavItem;
