import React from "react";

import useFormState from "../../hooks/useFormState";
import { Order } from ".";

interface Props {
  onSave: (product: Omit<Order, "id">) => void;
}

const CreateOrderForm: React.FunctionComponent<Props> = ({ onSave }) => {
  const { handleChange, values } = useFormState({
    name: ""
  });

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(values);
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
