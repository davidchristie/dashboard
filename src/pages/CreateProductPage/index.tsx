import React from "react";
import CreateProductForm from "../../containers/CreateProductForm";
import Heading from "../../components/Heading";
import Topbar from "../../components/Topbar";

const CreateProductPage: React.FunctionComponent = () => (
  <div className="CreateProductPage">
    <Topbar />
    <Heading>Create Product</Heading>
    <CreateProductForm />
  </div>
);

export default CreateProductPage;
