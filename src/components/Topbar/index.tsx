import "./index.css";

import React from "react";

import NavItem from "./NavItem";

const Topbar = () => {
  return (
    <nav className="Topbar">
      <ul>
        <NavItem to="/">Overview</NavItem>
        <NavItem to="/products">Products</NavItem>
        <NavItem to="/orders">Orders</NavItem>
        <NavItem to="/stores">Stores</NavItem>
      </ul>
    </nav>
  );
};

export default Topbar;
