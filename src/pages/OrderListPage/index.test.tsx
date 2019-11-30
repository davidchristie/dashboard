import React from "react";

import { itHasHeading } from "../../testing/content";
import { itHasLink, itHasNavigationLinks } from "../../testing/links";
import { describeRender } from "../../testing/render";
import ProductListPage from ".";

describeRender("order list page", <ProductListPage />, getResult => {
  itHasHeading("Orders", getResult);

  itHasLink("Create", "/orders/create", getResult);

  itHasNavigationLinks(getResult);
});
