import React from "react";
import { Link } from "react-router-dom";

import { Order } from ".";

interface Props {
  onDelete: () => void;
  order: Order;
}

const OrderSummary: React.FunctionComponent<Props> = ({ onDelete, order }) => (
  <div className="OrderSummary">
    <Link to={`/orders/${order.id}`}>{order.name}</Link>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default OrderSummary;
