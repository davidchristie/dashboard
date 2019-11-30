import React from "react";
import { useSelector } from "react-redux";

import order from "../../models/order";
import OrderSummary from "../OrderSummary";

const OrderList: React.FunctionComponent = () => {
  const list = useSelector(order.listSelector);

  return (
    <div className="OrderList">
      {list.map(order => (
        <OrderSummary key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;
