import React from "react";

import { itHasHeading } from "../../testing/content";
import state from "../../testing/data/state";
import { itHasLink, itHasNavigationLinks } from "../../testing/links";
import { describeRender } from "../../testing/render";
import ProductListPage from ".";

describeRender("order list page", <ProductListPage />, getResult => {
  itHasHeading("Orders", getResult);

  it("displays the list of orders", () => {
    state.order.list.forEach(order => {
      getResult().getByText(order.name);
    });
  });

  itHasLink("Create", "/orders/create", getResult);

  itHasNavigationLinks(getResult);
});
