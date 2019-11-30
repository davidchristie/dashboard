import React from "react";

import Heading from "../../components/Heading";
import Topbar from "../../components/Topbar";
import CreateOrderForm from "../../containers/CreateOrderForm";

const CreateOrderPage: React.FunctionComponent = () => (
  <div className="CreateOrderPage">
    <Topbar />
    <Heading>Create Order</Heading>
    <CreateOrderForm />
  </div>
);

export default CreateOrderPage;
