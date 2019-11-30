import { fireEvent, render, RenderResult } from "@testing-library/react";
import React from "react";

import order from "../../entities/order";
import { order1 } from "../../testing/data/orders";
import { AllProviders, store } from "../../testing/providers";
import OrderSummary from ".";

describe("order summary container", () => {
  let dispatch: jest.Mock;
  let result: RenderResult;

  beforeEach(() => {
    store.dispatch = dispatch = jest.fn();
    result = render(<OrderSummary order={order1} />, {
      wrapper: AllProviders
    });
  });

  it("displays the order name", () => {
    result.getByText(order1.name);
  });

  describe("when delete button is clicked", () => {
    beforeEach(() => {
      fireEvent.click(result.getByText("Delete"));
    });

    it("dispatches a order deleted action", () => {
      expect(dispatch).toBeCalledWith(order.deleted(order1));
    });
  });
});
