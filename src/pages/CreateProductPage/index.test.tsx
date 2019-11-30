import { fireEvent, render, RenderResult } from "@testing-library/react";
import React from "react";
import { Dispatch } from "redux";
import { productCreated } from "../../actions/products";
import { itHasHeading } from "../../testing/content";
import { itHasNavigationLinks } from "../../testing/links";
import { AllProviders, store } from "../../testing/providers";
import CreateProductPage from ".";

describe("create product page", () => {
  let dispatch: Dispatch;
  let result: RenderResult;

  beforeEach(() => {
    store.dispatch = dispatch = jest.fn();
    result = render(<CreateProductPage />, { wrapper: AllProviders });
  });

  itHasHeading("Create Product", () => result);

  itHasNavigationLinks(() => result);

  describe("when valid input values are entered", () => {
    const values = {
      name: "New Product"
    };

    beforeEach(() => {
      fireEvent.change(result.getByLabelText("Name"), {
        target: { value: "New Product" }
      });
    });

    describe("when save button is clicked", () => {
      beforeEach(() => {
        fireEvent.click(result.getByText("Save"));
      });

      it("dispatches a product created action", () => {
        expect(dispatch).toBeCalledWith(
          productCreated({
            id: expect.any(String),
            name: values.name
          })
        );
      });
    });
  });
});
