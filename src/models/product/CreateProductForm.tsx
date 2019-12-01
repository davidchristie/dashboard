import React from "react";

import useFormState from "../../hooks/useFormState";
import { Product } from ".";

interface Props {
  onSave: (product: Omit<Product, "id">) => void;
}

const CreateProductForm: React.FunctionComponent<Props> = ({ onSave }) => {
  const { handleChange, values } = useFormState({
    name: ""
  });

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(values);
  };

  return (
    <form className="CreateProductForm" onSubmit={handleFormSubmit}>
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

export default CreateProductForm;
