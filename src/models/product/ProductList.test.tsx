import { fireEvent } from "@testing-library/dom";
import React from "react";

import { product1, product2 } from "../../testing/data/products";
import { describeRender } from "../../testing/render";
import ProductList from "./ProductList";

const onDelete = jest.fn();

afterEach(() => {
  jest.resetAllMocks();
});

describeRender(
  "product list component",
  <ProductList onDelete={onDelete} list={[product1, product2]} />,
  getResult => {
    describe("when first delete button is clicked", () => {
      beforeEach(() => {
        fireEvent.click(getResult().getAllByText("Delete")[0]);
      });

      it("deletes the first product", () => {
        expect(onDelete).toBeCalledWith(product1);
      });
    });
  }
);
