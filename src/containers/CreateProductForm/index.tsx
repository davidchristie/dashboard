import { push } from "connected-react-router";
import React from "react";
import { useDispatch } from "react-redux";

import product from "../../models/product";
import useFormState from "./useFormState";

const CreateProductForm: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { handleNameChange, values } = useFormState();
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
        <input id="name" onChange={handleNameChange} value={values.name} />
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  );
};

export default CreateProductForm;
