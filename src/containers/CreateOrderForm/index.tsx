import { push } from "connected-react-router";
import React from "react";
import { useDispatch } from "react-redux";

import useFormState from "../../hooks/useFormState";
import order from "../../models/order";

const CreateOrderForm: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { handleChange, values } = useFormState({
    name: ""
  });

  const createOrder = order.useCreate(values);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createOrder();
    dispatch(push("/orders"));
  };

  return (
    <form className="CreateOrderForm" onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" onChange={handleChange("name")} value={values.name} />
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  );
};

export default CreateOrderForm;
