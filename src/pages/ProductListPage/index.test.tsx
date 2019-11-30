import { fireEvent, render, RenderResult } from "@testing-library/react";
import React from "react";
import state from "../../testing/data/state";
import { itHasHeading } from "../../testing/content";
import { itHasNavigationLinks } from "../../testing/links";
import { AllProviders } from "../../testing/providers";
import ProductListPage from ".";

describe("product list page", () => {
  let result: RenderResult;

  beforeEach(() => {
    result = render(<ProductListPage />, {
      wrapper: AllProviders
    });
  });

  itHasHeading("Products", () => result);

  it("displays the list of products", async () => {
    state.products.list.forEach(product => {
      result.getByText(product.name);
    });
  });

  itHasNavigationLinks(() => result);

  describe("when create button is clicked", () => {
    beforeEach(() => {
      fireEvent.click(result.getByText("Create"));
    });

    it("goes to the create product page", async () => {
      expect(window.location.pathname).toBe("/products/create");
    });
  });
});
