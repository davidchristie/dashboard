import { push } from "connected-react-router";
import React from "react";
import { useDispatch } from "react-redux";

import useFormState from "../../hooks/useFormState";
import product from "../../models/product";

const CreateProductForm: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { handleChange, values } = useFormState({
    name: ""
  });
  const createProduct = product.useCreate(values);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createProduct();
    dispatch(push("/products"));
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
