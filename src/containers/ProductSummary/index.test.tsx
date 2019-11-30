import { fireEvent, render, RenderResult } from "@testing-library/react";
import React from "react";

import product from "../../models/product";
import { product1 } from "../../testing/data/products";
import { AllProviders, store } from "../../testing/providers";
import ProductSummary from ".";

describe("product summary container", () => {
  let dispatch: jest.Mock;
  let result: RenderResult;

  beforeEach(() => {
    store.dispatch = dispatch = jest.fn();
    result = render(<ProductSummary product={product1} />, {
      wrapper: AllProviders
    });
  });

  it("displays the product name", () => {
    result.getByText(product1.name);
  });

  describe("when delete button is clicked", () => {
    beforeEach(() => {
      fireEvent.click(result.getByText("Delete"));
    });

    it("dispatches a product deleted action", () => {
      expect(dispatch).toBeCalledWith(product.deleted(product1));
    });
  });
});
