import { fireEvent } from "@testing-library/react";
import React from "react";

import { productCreated } from "../../actions/products";
import { itHasHeading } from "../../testing/content";
import { itHasNavigationLinks } from "../../testing/links";
import { store } from "../../testing/providers";
import { describeRender } from "../../testing/render";
import CreateProductPage from ".";

beforeEach(() => {
  store.dispatch = jest.fn();
});

describeRender("create product page", <CreateProductPage />, getResult => {
  itHasHeading("Create Product", getResult);

  itHasNavigationLinks(getResult);

  describe("when valid input values are entered", () => {
    const values = {
      name: "New Product"
    };

    beforeEach(() => {
      fireEvent.change(getResult().getByLabelText("Name"), {
        target: { value: "New Product" }
      });
    });

    describe("when save button is clicked", () => {
      beforeEach(() => {
        fireEvent.click(getResult().getByText("Save"));
      });

      it("dispatches a product created action", () => {
        expect(store.dispatch).toBeCalledWith(
          productCreated({
            id: expect.any(String),
            name: values.name
          })
        );
      });
    });
  });
});
