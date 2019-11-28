import { fireEvent, render, RenderResult } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createStore, Dispatch } from "redux";
import { Provider } from "react-redux";
import state from "../../testing/data/state";
import { itHasHeading } from "../../testing/content";
import { itHasNavigationLinks } from "../../testing/links";
import CreateProductPage from ".";
import { productCreated } from "../../actions/products";

describe("create product page", () => {
  let dispatch: Dispatch;
  let result: RenderResult;

  beforeEach(() => {
    const store = createStore(() => state);
    store.dispatch = dispatch = jest.fn();
    result = render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateProductPage />
        </BrowserRouter>
      </Provider>
    );
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
