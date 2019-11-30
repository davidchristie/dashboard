import { fireEvent } from "@testing-library/react";
import React from "react";
import state from "../../testing/data/state";
import { itHasHeading } from "../../testing/content";
import { itHasNavigationLinks } from "../../testing/links";
import { describeRender } from "../../testing/render";
import ProductListPage from ".";

describeRender("product list page", <ProductListPage />, getResult => {
  itHasHeading("Products", getResult);

  it("displays the list of products", async () => {
    state.products.list.forEach(product => {
      getResult().getByText(product.name);
    });
  });

  itHasNavigationLinks(getResult);

  describe("when create button is clicked", () => {
    beforeEach(() => {
      fireEvent.click(getResult().getByText("Create"));
    });

    it("goes to the create product page", async () => {
      expect(window.location.pathname).toBe("/products/create");
    });
  });
});
