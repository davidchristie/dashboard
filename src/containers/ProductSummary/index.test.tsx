import { fireEvent, render, RenderResult } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import state from "../../testing/data/state";
import ProductSummary from ".";
import { productDeleted } from "../../actions/products";
import { product1 } from "../../testing/data/products";

describe("product summary container", () => {
  let dispatch: jest.Mock;
  let result: RenderResult;

  beforeEach(() => {
    const store = createStore(() => state);
    store.dispatch = dispatch = jest.fn();
    result = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductSummary product={product1} />
        </BrowserRouter>
      </Provider>
    );
  });

  it("displays the product name", () => {
    result.getByText(product1.name);
  });

  describe("when delete button is clicked", () => {
    beforeEach(() => {
      fireEvent.click(result.getByText("Delete"));
    });

    it("dispatches a product deleted action", () => {
      expect(dispatch).toBeCalledWith(productDeleted(product1));
    });
  });
});
