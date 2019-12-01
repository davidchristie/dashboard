import { fireEvent } from "@testing-library/dom";
import React from "react";

import { order1, order2 } from "../../testing/data/orders";
import { describeRender } from "../../testing/render";
import OrderList from "./OrderList";

const onDelete = jest.fn();

afterEach(() => {
  jest.resetAllMocks();
});

describeRender(
  "order list component",
  <OrderList onDelete={onDelete} list={[order1, order2]} />,
  getResult => {
    describe("when first delete button is clicked", () => {
      beforeEach(() => {
        fireEvent.click(getResult().getAllByText("Delete")[0]);
      });

      it("deletes the first order", () => {
        expect(onDelete).toBeCalledWith(order1);
      });
    });
  }
);
