import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { orderDeleted } from "../../actions/orders";
import Order from "../../types/Order";

interface Props {
  order: Order;
}

const OrderSummary: React.FunctionComponent<Props> = ({ order }) => {
  const dispatch = useDispatch();

  const handleDeleteButtonClick = () => {
    dispatch(orderDeleted(order));
  };

  return (
    <div className="OrderSummary">
      <Link to={`/orders/${order.id}`}>{order.name}</Link>
      <button onClick={handleDeleteButtonClick}>Delete</button>
    </div>
  );
};

export default OrderSummary;
