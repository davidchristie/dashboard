import React from "react";

import { itHasHeading } from "../../testing/content";
import { itHasNavigationLinks } from "../../testing/links";
import { describeRender } from "../../testing/render";
import ProductListPage from ".";

describeRender("order list page", <ProductListPage />, getResult => {
  itHasHeading("Orders", getResult);

  itHasNavigationLinks(getResult);
});
