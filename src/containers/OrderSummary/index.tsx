import React from "react";
import { Link } from "react-router-dom";

import order, { Order } from "../../models/order";

interface Props {
  order: Order;
}

const { useDelete } = order;

const OrderSummary: React.FunctionComponent<Props> = ({ order }) => {
  const deleteOrder = useDelete(order);

  return (
    <div className="OrderSummary">
      <Link to={`/orders/${order.id}`}>{order.name}</Link>
      <button onClick={deleteOrder}>Delete</button>
    </div>
  );
};

export default OrderSummary;
