import "./index.css";

import React from "react";

import useNavigation from "../../hooks/useNavigation";
import NavItem from "./NavItem";

const Topbar = () => {
  const { items } = useNavigation();
  return (
    <nav className="Topbar">
      <ul>
        {items.map((item, index) => (
          <NavItem key={index} to={item.to}>
            {item.text}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Topbar;
