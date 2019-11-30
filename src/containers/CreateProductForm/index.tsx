import { push } from "connected-react-router";
import React from "react";
import { useDispatch } from "react-redux";
import uuid from "uuid/v4";

import { productCreated } from "../../actions/products";
import Product from "../../types/Product";
import useFormState from "./useFormState";

const CreateProductForm: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { handleNameChange, values } = useFormState();

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const product: Product = {
      ...values,
      id: uuid()
    };

    dispatch(productCreated(product));
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
