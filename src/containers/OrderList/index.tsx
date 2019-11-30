import React from "react";
import { useSelector } from "react-redux";

import { orderListSelector } from "../../selectors/orders";
import OrderSummary from "../OrderSummary";

const OrderList: React.FunctionComponent = () => {
  const list = useSelector(orderListSelector);

  return (
    <div className="OrderList">
      {list.map(order => (
        <OrderSummary key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;
