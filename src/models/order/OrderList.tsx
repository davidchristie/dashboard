import React from "react";

import { Order } from ".";
import OrderSummary from "./OrderSummary";

interface Props {
  list: Order[];
  onDelete: (order: Order) => void;
}

const OrderList: React.FunctionComponent<Props> = ({ list, onDelete }) => (
  <div className="OrderList">
    {list.map(order => (
      <OrderSummary
        key={order.id}
        onDelete={() => onDelete(order)}
        order={order}
      />
    ))}
  </div>
);

export default OrderList;
