import React from "react";

import Heading from "../../components/Heading";
import Topbar from "../../components/Topbar";
import CreateProductForm from "../../containers/CreateProductForm";

const CreateProductPage: React.FunctionComponent = () => (
  <div className="CreateProductPage">
    <Topbar />
    <Heading>Create Product</Heading>
    <CreateProductForm />
  </div>
);

export default CreateProductPage;
