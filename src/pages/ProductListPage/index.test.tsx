import React from "react";

import { itHasHeading } from "../../testing/content";
import state from "../../testing/data/state";
import { itHasLink, itHasNavigationLinks } from "../../testing/links";
import { describeRender } from "../../testing/render";
import ProductListPage from ".";

describeRender("product list page", <ProductListPage />, getResult => {
  itHasHeading("Products", getResult);

  it("displays the list of products", () => {
    state.product.list.forEach(product => {
      getResult().getByText(product.name);
    });
  });

  itHasLink("Create", "/products/create", getResult);

  itHasNavigationLinks(getResult);
});
