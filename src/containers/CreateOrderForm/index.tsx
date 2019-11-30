import { push } from "connected-react-router";
import React from "react";
import { useDispatch } from "react-redux";
import uuid from "uuid/v4";

import { orderCreated } from "../../actions/orders";
import Order from "../../types/Order";
import useFormState from "./useFormState";

const CreateOrderForm: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { handleNameChange, values } = useFormState();

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const order: Order = {
      ...values,
      id: uuid()
    };

    dispatch(orderCreated(order));
    dispatch(push("/orders"));
  };

  return (
    <form className="CreateOrderForm" onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" onChange={handleNameChange} value={values.name} />
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  );
};

export default CreateOrderForm;
