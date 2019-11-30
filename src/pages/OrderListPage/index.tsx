import React from "react";

import Heading from "../../components/Heading";
import Topbar from "../../components/Topbar";
import OrderList from "../../containers/OrderList";
import CreateOrderButton from "./CreateOrderButton";

const OrderListPage: React.FunctionComponent = () => (
  <div className="OrderListPage">
    <Topbar />
    <Heading>Orders</Heading>
    <CreateOrderButton />
    <OrderList />
  </div>
);

export default OrderListPage;
